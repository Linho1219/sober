import { useElement, useProps, getParentDepth } from '../core/elements.js'
import { useComputedStyle } from '../core/utils/CSS.js'
import { addDownEvent } from '../core/utils/events/down.js'
import { addHoverEvent } from '../core/utils/events/hover.js'
import * as scheme from '../core/scheme.js'

const props = useProps({
  disabled: false,
  disabledHover: false,
  syncParentStates: false,
  $parentDepth: -1,
  $delay: 0,
})

const events = {
  opened: Event,
  closed: Event
}

const style = /*css*/`
:host{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  transition-property: none;
  transition-duration: ${scheme.motion.duration.short4};
  animation-duration: ${scheme.motion.duration.long4};
  animation-timing-function: ${scheme.motion.easing.standard};
}
.mask,
.container,
.ripple{
  position: absolute;
  inset: 0;
  animation-timing-function: inherit;
  animation-duration: inherit;
}
.container{
  color: var(--s-ripple-color, currentColor);
}
.container:where(.hover, .pressed) .mask{
  opacity: var(--s-ripple-hover-opacity, .1);
}
.mask{
  opacity: 0;
  transition-property: opacity;
  background: currentColor;
}
.ripple{
  opacity: 0;
  border-radius: 50%;
  background: currentColor;
  filter: opacity(var(--s-ripple-opacity, .24));
  box-shadow: var(--s-ripple-shadow, none);
}
@media (prefers-reduced-motion: reduce) {
  :host{
    animation-duration: 0s;
    transition-duration: 0s;
  }
}
`

const template = /*html*/`
<slot></slot>
<div class="container" part="container">
  <div class="mask" part="mask"></div>
  <div class="ripple" part="ripple"></div>
</div>
`

const startRipple = (options: {
  root: HTMLElement,
  ripple: HTMLElement,
  container: HTMLDivElement,
  event: PointerEvent,
  animateOptions: { duration: number, easing: string }
}) => {
  let size = Math.sqrt(options.container.offsetWidth ** 2 + options.container.offsetHeight ** 2)
  const rect = options.container.getBoundingClientRect()
  const x = Math.max(rect.left, Math.min(options.event.clientX, rect.left + rect.width))
  const y = Math.max(rect.top, Math.min(options.event.clientY, rect.top + rect.height))
  const state = { x: x - rect.left, y: y - rect.top, h: rect.height / 2, w: rect.width / 2 }
  const edgeW = (Math.abs(state.h - state.y) + state.h) * 2
  const edgeH = (Math.abs(state.w - state.x) + state.w) * 2
  size = Math.sqrt(edgeW ** 2 + edgeH ** 2)
  const coordinate = { x: `${state.x}px`, y: `${state.y}px` }
  let newRipple = options.ripple
  if (newRipple.getAnimations().length > 0) {
    newRipple = options.ripple.cloneNode() as HTMLDivElement
    options.container.appendChild(newRipple)
  }
  options.root.dispatchEvent(new Event('open'))
  const animation = newRipple.animate({
    opacity: [1, 1],
    width: [`${size}px`, `${size}px`],
    height: [`${size}px`, `${size}px`],
    transform: ['translate(-50%, -50%) scale(0)', 'translate(-50%, -50%) scale(1)'],
    left: [coordinate.x, coordinate.x],
    top: [coordinate.y, coordinate.y],
  }, { ...options.animateOptions, fill: 'forwards' })
  animation.finished.then(() => options.root.dispatchEvent(new Event('opened')))
  options.root.dispatchEvent(new Event('open'))
  return () => {
    const time = Number(animation.currentTime)
    const short = options.animateOptions.duration / 2
    const diff = options.animateOptions.duration - short
    const duration = time > diff ? short : options.animateOptions.duration - time
    const animate = newRipple.animate({ opacity: [1, 0] }, { ...options.animateOptions, duration, easing: options.animateOptions.easing, fill: 'forwards' })
    animate.finished.then(() => newRipple !== options.ripple && newRipple.isConnected && options.container.removeChild(newRipple))
    animate.finished.then(() => options.root.dispatchEvent(new Event('closed')))
    options.root.dispatchEvent(new Event('close'))
  }
}

export class Ripple extends useElement({
  style, template, props, events,
  setup(shadowRoot, info) {
    const container = shadowRoot.querySelector<HTMLDivElement>('.container')!
    const ripple = shadowRoot.querySelector<HTMLDivElement>('.ripple')!
    const computedStyle = useComputedStyle(this)
    const getAnimateOptions = () => {
      const easing = computedStyle.getValue('animation-timing-function')
      const duration = computedStyle.getDuration('animation-duration')
      return { easing, duration }
    }
    const down = (e: PointerEvent) => {
      if (!info.parentNode) return
      if (computedStyle.getValue('display') === 'none' || computedStyle.getVariable('--s-ripple-disabled', this.disabled)) return
      const syncParentStates = computedStyle.getVariable('--s-ripple-sync-parent-states', this.syncParentStates)
      syncParentStates && info.parentNode.setAttribute('pressed', '')
      container.classList.add('pressed')
      const stop = startRipple({ root: this, ripple, container, event: e, animateOptions: getAnimateOptions() })
      return () => {
        stop()
        syncParentStates && info.parentNode?.removeAttribute('pressed')
        container.classList.remove('pressed')
      }
    }
    const hover = () => {
      if (computedStyle.getValue('display') === 'none') return
      const syncParentStates = computedStyle.getVariable('--s-ripple-sync-parent-states', this.syncParentStates)
      const disabledHover = computedStyle.getVariable('--s-ripple-disabled-hover', this.disabledHover)
      syncParentStates && info.parentNode?.setAttribute('hover', '')
      !disabledHover && container.classList.add('hover')
      return () => {
        syncParentStates && info.parentNode?.removeAttribute('hover')
        container.classList.remove('hover')
      }
    }
    const eventListener: { hover?: () => void, down?: () => void } = {}
    const addEvent = () => {
      if (!info.parentNode) return
      let parent = getParentDepth(this) || info.parentNode
      eventListener.down = addDownEvent(parent, down)
      eventListener.hover = addHoverEvent(parent, hover)
      info.parentNode = parent
    }
    const removeEvent = () => {
      eventListener.hover?.()
      eventListener.down?.()
    }
    return {
      onMounted: addEvent,
      onUnmounted: removeEvent,
      parentDepth: () => {
        removeEvent()
        addEvent()
      }
    }
  }
}) { }

const name = Ripple.define('s-ripple')

declare global {
  interface HTMLElementTagNameMap {
    [name]: Ripple
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        //@ts-ignore
        [name]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Partial<typeof props.values>
      }
    }
  }
}

//@ts-ignore
declare module 'vue' {
  //@ts-ignore
  import { HTMLAttributes } from 'vue'
  interface GlobalComponents {
    [name]: new () => {
      /**
      * @deprecated
      **/
      $props: HTMLAttributes & Partial<typeof props.values>
    } & Ripple
  }
}
//@ts-ignore
declare module 'vue/jsx-runtime' {
  namespace JSX {
    export interface IntrinsicElements {
      //@ts-ignore
      [name]: IntrinsicElements['div'] & Partial<typeof props.values>
    }
  }
}

//@ts-ignore
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSX.HTMLAttributes<HTMLElement> & Partial<typeof props.values>
    }
  }
}

//@ts-ignore
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSXInternal.HTMLAttributes<HTMLElement> & Partial<typeof props.values>
    }
  }
}