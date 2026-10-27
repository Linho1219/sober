import { useProps, useElement } from '../core/elements.js'
import * as scheme from '../core/scheme.js'
import { Button } from './button.js'
import { IconButton } from './icon-button.js'
import { addDownEvent } from '../core/utils/events/down.js'

const props = useProps({
  variant: ['standard', 'connected']
})

const style = /*css*/`
:host{
  display: inline-flex;
  vertical-align: middle;
  gap: 8px;
}
:host(:not([variant=connected])){
  ::slotted(:where(s-button, s-icon-button)){
    will-change: width, padding;
  }
  ::slotted(s-icon-button[expand]:not([size])){
    width: 48px;
  }
  ::slotted(s-icon-button[expand]:not([size])[width=wide]){
    width: 56px;
  }
  ::slotted(s-icon-button[expand]:not([size])[width=narrow]){
    width: 36px;
  }
  ::slotted(s-icon-button[shrink]:not([size])){
    width: 36px;
  }
  ::slotted(s-icon-button[shrink]:not([size])[width=wide]){
    --width: 36px;
  }
  ::slotted(s-icon-button[shrink]:not([size])[width=narrow]){
    --width: 36px;
  }
  ::slotted(s-icon-button[shrink=only]:not([size])){
    width: 32px;
  }
  ::slotted(s-icon-button[shrink=only]:not([size])[width=wide]){
    width: 32px;
  }
  ::slotted(s-icon-button[shrink=only]:not([size])[width=narrow]){
    width: 32px;
  }
}
:host([variant=connected]){
  gap: 2px;
  ::slotted(:where(s-button, s-icon-button):not([size])){
    border-radius: 8px;
  }
  ::slotted(:where(s-button, s-icon-button):not([size])[pressed]){
    border-radius: 4px;
  }
  ::slotted(:where(s-button, s-icon-button):not([size])[checked]){
    border-radius: 20px;
  }
  ::slotted(:where(s-button, s-icon-button):not([size]):first-child){
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  ::slotted(:where(s-button, s-icon-button):not([size]):last-child){
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  /* extra-small */
  ::slotted(:where(s-button, s-icon-button)[size=extra-small]){
    border-radius: 4px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-small][pressed]){
    border-radius: 2px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-small][checked]){
    border-radius: 16px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-small]:first-child){
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-small]:last-child){
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  /* medium */
  ::slotted(:where(s-button, s-icon-button)[size=medium]){
    border-radius: 8px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=medium][pressed]){
    border-radius: 4px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=medium][checked]){
    border-radius: 28px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=medium]:first-child){
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=medium]:last-child){
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
  }
  /* large */
  ::slotted(:where(s-button, s-icon-button)[size=large]){
    border-radius: 16px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=large][pressed]){
    border-radius: 8px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=large][checked]){
    border-radius: 48px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=large]:first-child){
    border-top-left-radius: 48px;
    border-bottom-left-radius: 48px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=large]:last-child){
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px;
  }
  /* extra large*/
  ::slotted(:where(s-button, s-icon-button)[size=extra-large]){
    border-radius: 20px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-large][pressed]){
    border-radius: 12px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-large][checked]){
    border-radius: 68px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-large]:first-child){
    border-top-left-radius: 68px;
    border-bottom-left-radius: 68px;
  }
  ::slotted(:where(s-button, s-icon-button)[size=extra-large]:last-child){
    border-top-right-radius: 68px;
    border-bottom-right-radius: 68px;
  }
}
`

const template = /*html*/`
<slot></slot>
`

export class ButtonGroup extends useElement({
  style, props, template,
  setup(shadowRoot) {
    const slot = shadowRoot.querySelector<HTMLSlotElement>('slot')!
    const children: (Button | IconButton)[] = []
    slot.addEventListener('slotchange', () => {
      children.splice(0, children.length)
      for (const child of slot.assignedElements()) {
        if (!(child instanceof Button) && !(child instanceof IconButton)) return
        children.push(child)
      }
    })
    addDownEvent(this, (e) => {
      if (e.target === this || children.length <= 1) return
      const target = e.target as HTMLElement
      const btn = target.closest<Button | IconButton>('s-icon-button, s-button')
      if (!btn || !children.includes(btn)) return
      const prev = btn.previousElementSibling as Button | IconButton
      const next = btn.nextElementSibling as Button | IconButton
      const shrink = 'shrink'
      const expand = 'expand'
      const only = 'only'
      prev?.setAttribute(shrink, next ? '' : only)
      next?.setAttribute(shrink, prev ? '' : only)
      btn.setAttribute(expand, '')
      return () => {
        prev?.removeAttribute(shrink)
        next?.removeAttribute(shrink)
        btn.removeAttribute(expand)
      }
    })
  }
}) { }


const name = ButtonGroup.define('s-button-group')

declare global {
  interface HTMLElementTagNameMap {
    [name]: ButtonGroup
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
    } & ButtonGroup
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