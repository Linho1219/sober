type Callback = (e: PointerEvent) => (() => void) | void

export const addDownEvent = (el: HTMLElement, callback: Callback) => {
  const call = (e: PointerEvent) => {
    if (e.button !== 0) return
    const up = callback(e)
    const remove = () => {
      up?.()
      document.removeEventListener('pointerup', remove)
      document.removeEventListener('pointercancel', remove)
    }
    document.addEventListener('pointerup', remove)
    document.addEventListener('pointercancel', remove)
  }
  el.addEventListener('pointerdown', call)
  return () => el.removeEventListener('pointerdown', call)
}