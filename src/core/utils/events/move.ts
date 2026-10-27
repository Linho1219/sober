import { device } from '../device.js'

type MoveEvent = PointerEvent | TouchEvent

type Callback = (e: MoveEvent, x: number, y: number) => {
  move?: (e: MoveEvent, x: number, y: number) => void
  up?: (e: MoveEvent, x: number, y: number) => void
} | void

export const addMoveEvent = (el: HTMLElement, callback: Callback) => {
  const call = (e: PointerEvent) => {
    const event = e instanceof TouchEvent ? e.touches[0] : e
    const options = callback(e, event.pageX, event.pageY)
    const moveName = device.touchEnabled ? 'touchmove' : 'pointermove'
    const upName = device.touchEnabled ? 'touchend' : 'pointerup'
    const cancelName = device.touchEnabled ? 'touchcancel' : 'pointercancel'
    const move = (e: TouchEvent | PointerEvent) => {
      const event = e instanceof TouchEvent ? e.touches[0] : e
      options?.move?.(e, event.pageX, event.pageY)
    }
    const remove = (e: TouchEvent | PointerEvent) => {
      const event = e instanceof TouchEvent ? e.touches[0] : e
      options?.up?.(e, event.pageX, event.pageY)
      document.removeEventListener(moveName, move)
      document.removeEventListener(upName, remove)
      document.removeEventListener(cancelName, remove)
      alert('移除')
    }
    document.addEventListener(moveName, move, { passive: false })
    document.addEventListener(upName, remove)
    document.addEventListener(cancelName, remove)
  }
  el.addEventListener('pointerdown', call)
  return () => el.removeEventListener('pointerdown', call)
}