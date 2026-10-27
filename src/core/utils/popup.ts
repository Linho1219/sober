import { ResizeWatcher } from './resize-watcher.js'
import { getStackingContext } from './get-stacking-context.js'

type Placement = 'top' | 'bottom' | 'left' | 'right'

const showPopover = (anchor: HTMLElement, container: HTMLElement, placement: Placement, margin: number) => {
  const rect = anchor.getBoundingClientRect()
  const size = { x: container.offsetWidth, y: container.offsetHeight }
  const viewport = { x: innerWidth, y: innerHeight }
  // x/y 统一处理，placement 只决定方向
  const axis = {
    top: { main: 'y', side: 'x', sign: -1 },
    bottom: { main: 'y', side: 'x', sign: 1 },
    left: { main: 'x', side: 'y', sign: -1 },
    right: { main: 'x', side: 'y', sign: 1 }
  } as const
  const a = axis[placement]
  const { main, side, sign } = a
  const mainSize = size[main]
  const sideSize = size[side]
  const mainViewport = viewport[main]
  const sideViewport = viewport[side]
  const mainStart = rect[main]
  const mainEnd = rect[main === 'x' ? 'right' : 'bottom']
  const mainLength = rect[main === 'x' ? 'width' : 'height']
  const sideStart = rect[side]
  const sideLength = rect[side === 'x' ? 'width' : 'height']
  const config = { left: 0, top: 0, origin: ['50%', '50%'] }
  // 主轴：计算首选方向
  const position = sign > 0 ? mainEnd + margin : mainStart - margin - mainSize
  const overflow = sign > 0 ? position + mainSize > mainViewport : position < 0
  // 主轴反向
  const reversePosition = sign > 0 ? mainStart - margin - mainSize : mainEnd + margin
  const reverseOverflow = sign > 0 ? reversePosition < 0 : reversePosition + mainSize > mainViewport
  const mainInset = main === 'x' ? 'left' : 'top'
  const sideInset = side === 'x' ? 'left' : 'top'
  const mainOrigin = main === 'x' ? 0 : 1
  const sideOrigin = side === 'x' ? 0 : 1
  // 主轴 origin：靠近 anchor 的一侧
  const origin = sign > 0 ? '0%' : '100%'
  if (!overflow) {
    config[mainInset] = position
    config.origin[mainOrigin] = origin
  } else if (!reverseOverflow) {
    config[mainInset] = reversePosition
    config.origin[mainOrigin] = sign > 0 ? '100%' : '0%'
  } else {
    // 两侧都放不下：限制在 viewport 内
    const edge = Math.max(0, mainViewport - mainSize)
    config[mainInset] = edge
    config.origin[mainOrigin] = `${mainStart + mainLength / 2 - edge}px`
  }
  // 副轴：默认居中
  let sidePosition = sideStart + sideLength / 2 - sideSize / 2
  let sideOriginValue = '50%'
  // 超出前侧
  if (sidePosition < 0) {
    sidePosition = 0
    sideOriginValue = `${sideStart + sideLength / 2}px`
  }
  // 超出后侧
  if (sidePosition + sideSize > sideViewport) {
    sidePosition = sideViewport - sideSize
    sideOriginValue = `${sideStart + sideLength / 2 - sidePosition}px`
  }
  config[sideInset] = sidePosition
  config.origin[sideOrigin] = sideOriginValue
  container.style.left = `${config.left}px`
  container.style.top = `${config.top}px`
  container.style.transformOrigin = config.origin.join(' ')
}

export class Popup {
  declare onUpdate?: () => void
  declare onUpdated?: () => void
  declare onClose?: () => void
  declare onClosed?: () => void
  private focusElement?: HTMLElement
  private resizer?: ResizeWatcher
  private animete?: { easing: string, duration: number }
  private closeCallback?: () => void
  constructor(private root: HTMLElement, private popover: HTMLElement, private container: HTMLElement) { }
  getRootDocument() {
    const rootNode = this.root.getRootNode()
    return rootNode instanceof ShadowRoot ? rootNode : document
  }
  async open(anchor: HTMLElement, placement: Placement, margin: number, animete?: { easing: string, duration: number }) {
    this.animete = animete
    const focus = this.getRootDocument().querySelector(':focus-visible')
    this.focusElement = focus instanceof HTMLElement ? focus : undefined
    this.resizer = new ResizeWatcher(anchor, this.container)
    if (this.popover instanceof HTMLDialogElement) {
      this.popover.showModal()
    } else if (typeof this.popover.showPopover === 'function') {
      this.popover.showPopover()
    } else {
      const rootNode = this.popover.getRootNode()
      if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
        const rect = getStackingContext(rootNode)
        this.popover.style.marginLeft = `${-rect.left}px`
        this.popover.style.marginTop = `${-rect.top}px`
        this.popover.style.maxWidth = `${innerWidth}px`
        this.popover.style.maxHeight = `${innerHeight}px`
      }
    }
    this.popover.classList.add('open')
    this.popover.focus()
    this.resizer.onChange = () => {
      this.onUpdate?.()
      showPopover(anchor, this.container, placement, margin)
      this.onUpdated?.()
    }
    this.closeCallback = () => this.close()
    window.addEventListener('resize', this.closeCallback)
    this.resizer.onChange()
    this.resizer.run()
    this.container.onpointerdown = (e) => e.stopPropagation()
    this.popover.onpointerdown = this.popover.onclose = this.closeCallback
    this.root.dispatchEvent(new CustomEvent('s-top-layer-open', { bubbles: true }))
    if (animete) await this.container.animate({ opacity: [0, 1], transform: ['scale(.8)', 'scale(1)'] }, animete).finished
  }
  async close() {
    if (!this.resizer) return
    this.resizer.stop()
    window.removeEventListener('resize', this.closeCallback!)
    this.onClose?.()
    this.root.dispatchEvent(new CustomEvent('s-top-layer-close', { bubbles: true }))
    if (this.animete) await this.container.animate({ opacity: [1, 0], transform: ['scale(1)', 'scale(.8)'] }, this.animete).finished
    if (this.popover instanceof HTMLDialogElement) this.popover.close()
    if (!(this.popover instanceof HTMLDialogElement) && this.popover.hidePopover) this.popover.hidePopover()
    this.container.style.removeProperty('left')
    this.container.style.removeProperty('top')
    this.container.style.removeProperty('transform-origin')
    this.container.style.removeProperty('margin-top')
    this.container.style.removeProperty('max-width')
    this.container.style.removeProperty('max-height')
    this.popover.style.removeProperty('margin-left')
    const rootNode = this.getRootDocument()
    if (this.focusElement) {
      this.focusElement.focus()
    } else if (rootNode.activeElement instanceof HTMLElement) {
      rootNode.activeElement.blur()
    }
    this.popover.classList.remove('open')
    this.onClosed?.()
  }
}