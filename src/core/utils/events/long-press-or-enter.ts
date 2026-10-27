import { device } from '../device.js'

type Callback = (e: PointerEvent) => (() => void) | void

export const addLongPressOrEnterEvent = (el: HTMLElement, callback: Callback, duration: number) => {
  const call = (e: PointerEvent) => {
    if (e.pointerType === 'mouse' && device.mouseEnabled) {
      const up = callback(e)
      const remove = () => {
        up?.()
        el.removeEventListener('pointerleave', remove)
        document.removeEventListener('wheel', remove)
      }
      el.addEventListener('pointerleave', remove)
      document.addEventListener('wheel', remove)
      return
    }
    let up: (() => void) | void
    const timer = setTimeout(() => up = callback(e), duration)
    const remove = () => {
      clearTimeout(timer)
      up?.()
      document.removeEventListener('pointerup', remove)
      document.removeEventListener('pointercancel', remove)
    }
    document.addEventListener('pointerup', remove)
    document.addEventListener('pointercancel', remove)
  }
  el.addEventListener('pointerenter', call)
  return () => el.removeEventListener('pointerenter', call)
}