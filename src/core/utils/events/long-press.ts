type Callback = (e: PointerEvent) => (() => void) | void

export const addLongPressEvent = (el: HTMLElement, callback: Callback, duration: number) => {
  const call = (e: PointerEvent) => {
    if (e.button !== 0) return
    const timer = setTimeout(() => callback(e), duration)
    const remove = () => {
      clearTimeout(timer)
      document.removeEventListener('pointerup', remove)
      document.removeEventListener('pointercancel', remove)
    }
    document.addEventListener('pointerup', remove)
    document.addEventListener('pointercancel', remove)
  }
  el.addEventListener('pointerdown', call)
  return () => el.removeEventListener('pointerdown', call)
}
