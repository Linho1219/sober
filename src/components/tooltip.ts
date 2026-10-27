import { useElement, useProps, getParentDepth } from '../core/elements.js'
import { useComputedStyle } from '../core/utils/CSS.js'
import { Popup } from '../core/utils/popup.js'
import { device } from '../core/utils/device.js'
import { addLongPressOrEnterEvent } from '../core/utils/events/long-press-or-enter.js'
import * as scheme from '../core/scheme.js'

const props = useProps({
  placement: ['auto', 'top', 'bottom', 'left', 'right'],
  $parentDepth: -1,
})
const events = {
  opened: Event,
  closed: Event
}

const style = /*css*/`
:host{
  display: contents;
  font-size: calc(var(--s-font-size, 1) * 13px);
  line-height: calc(100% + 4px);
  font-weight: 400;
  border-radius: 4px;
  border: none;
  padding: 6px 8px;
  outline-offset: 4px;
  filter: opacity(.95);
  transition-timing-function: ${scheme.motion.easing.standard};
  transition-duration: ${scheme.motion.duration.short4};
  background: ${scheme.color.inverseSurface};
  color: ${scheme.color.inverseOnSurface};
}
.popover{
  pointer-events: none;
  position: fixed;
  display: none;
  inset: 0;
  margin: 0;
  width: max-content;
  height: max-content;
  border: inherit;
  overflow: hidden;
  outline: none;
  max-width: 100%;
  max-height: 100%;
  padding: inherit;
  filter: inherit;
  border-radius: inherit;
  background: inherit;
  color: inherit;
  transition-property: none;
  z-index: 3;
  &.open{
    display: block;
  }
}
`

const template = /*html*/`
<div class="popover" popover="manual" part="popup">
  <slot></slot>
</div>
`

export class Tooltip extends useElement({
  style, template, props, events,
  setup(shadowRoot, info) {
    const popover = shadowRoot.querySelector<HTMLDivElement>('.popover')!
    const computedStyle = useComputedStyle(this)
    const popup = new Popup(this, popover, popover)
    const getAnimateOptions = () => {
      const easing = computedStyle.getValue('transition-timing-function')
      const duration = computedStyle.getDuration('transition-duration')
      return { easing, duration }
    }
    const hover = () => {
      if (!this.isConnected || popover.classList.contains('open') || computedStyle.getValue('display') === 'none') return
      const cssPlacement = computedStyle.getVariable('--s-tooltip-placement', this.placement, props.metadata.placement.types)
      const placement = cssPlacement === 'auto' ? device.touchEnabled ? 'top' : 'bottom' : cssPlacement
      const parentNode = info.parentNode!
      const margin = computedStyle.getNumber('outline-offset')
      popup.open(parentNode, placement, margin, getAnimateOptions())
      return () => popup.close()
    }
    let removeEvent: (() => void) | undefined
    const addEvent = () => {
      if (!info.parentNode) return
      let parent = getParentDepth(this) || info.parentNode
      removeEvent = addLongPressOrEnterEvent(parent, hover, 500)
      info.parentNode = parent
    }
    return {
      onMounted: addEvent,
      onUnmounted: removeEvent,
      parentDepth: () => {
        removeEvent?.()
        addEvent()
      }
    }
  }
}) { }

const name = Tooltip.define('s-tooltip')

declare global {
  interface HTMLElementTagNameMap {
    [name]: Tooltip
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        //@ts-ignore
        [name]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
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
      $props: HTMLAttributes
    } & Tooltip
  }
}

//@ts-ignore
declare module 'vue/jsx-runtime' {
  namespace JSX {
    export interface IntrinsicElements {
      //@ts-ignore
      [name]: IntrinsicElements['div']
    }
  }
}

//@ts-ignore
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSX.HTMLAttributes<HTMLElement>
    }
  }
}

//@ts-ignore
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSXInternal.HTMLAttributes<HTMLElement>
    }
  }
}