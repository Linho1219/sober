import { useElement, useProps, getParentDepth } from '../core/elements.js'
import { useComputedStyle } from '../core/utils/CSS.js'
import * as scheme from '../core/scheme.js'

const props = useProps({
  placement: ['center', 'top', 'bottom'],
  size: ['standard', 'full-screen'],
  $parentDepth: -1,
})

type CloseSource = 0 | 1 | 2

const events = {
  opened: Event,
  closed: Event,
  open: Event,
  close: CustomEvent<{ source: CloseSource }>
}

const style = /*css*/`
:host{
  display: contents;
  width: 380px;
  height: min-content;
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
  cursor: default;
  border-radius: 28px;
  white-space: normal;
  font-size: calc(var(--s-font-size, 1) * 16px);
  transition-timing-function: ${scheme.motion.easing.standard};
  transition-duration: ${scheme.motion.duration.short4};
  background: ${scheme.color.surfaceContainerHigh};
  color: ${scheme.color.onSurface};
  box-shadow: ${scheme.elevation.level4};
}
:host([size=full-screen]){
  max-width: none;
  max-height: none;
  border-radius: 0;
  width: 100%;
  height: 100%;
}
.popover{
  position: fixed;
  display: none;
  margin: auto;
  width: inherit;
  height: inherit;
  border: inherit;
  overflow: hidden;
  outline: none;
  max-width: inherit;
  max-height: inherit;
  background: inherit;
  color: inherit;
  box-shadow: inherit;
  border-radius: inherit;
  padding: inherit;
}
`

const template = /*html*/`
<dialog class="popover" part="popover">
  <div class="layout" part="layout">
    <slot name="icon"></slot>
    <slot name="title"></slot>
    <slot name="center-title"></slot>
    <slot name="text"></slot>
    <slot></slot>
    <div class="actions" part="actions">
      <slot name="action"></slot>
    </div>
  </div>
</dialog>
`

export class Dialog extends useElement({
  style, template, props, events,
  setup(shadowRoot, info) {
    const popover = shadowRoot.querySelector<HTMLDialogElement>('.popover')!
    const layout = shadowRoot.querySelector<HTMLDivElement>('.layout')!
    const action = shadowRoot.querySelector<HTMLDivElement>('slot[name=action')!
    const computedStyle = useComputedStyle(this)
    const getAnimateOptions = () => {
      const easing = computedStyle.getValue('transition-timing-function')
      const duration = computedStyle.getDuration('transition-duration')
      return { easing, duration }
    }
  }
}) {
  static readonly CLOSE_SOURCE_SCRIM = 0 as const
  static readonly CLOSE_SOURCE_ACTION = 1 as const
  static readonly CLOSE_SOURCE_KEYBOARD = 2 as const
}

const name = Dialog.define('s-dialog')

declare global {
  interface HTMLElementTagNameMap {
    [name]: Dialog
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
    } & Dialog
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