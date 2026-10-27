import { device } from '../device.js'

type Callback = (e: PointerEvent) => (() => void) | void

export const addHoverEvent = (el: HTMLElement, callback: Callback) => {
  const call = (e: PointerEvent) => {
    if (!device.mouseEnabled || e.pointerType !== 'mouse') return
    const up = callback(e)
    const remove = () => {
      up?.()
      el.removeEventListener('pointerleave', remove)
      el.removeEventListener('pointercancel', remove)
    }
    el.addEventListener('pointerleave', remove)
    el.addEventListener('pointercancel', remove)
  }
  el.addEventListener('pointerenter', call)
  return () => el.removeEventListener('pointerenter', call)
}