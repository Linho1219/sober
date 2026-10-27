import { device } from './device.js'

let div: HTMLDivElement

if (!device.isServer) {
  div = document.createElement('div')
  div.setAttribute('style', 'position: fixed;inset: 0;pointer-events: none')
}

export const getStackingContext = (el: Node) => {
  el.appendChild(div)
  const DOMRect = div.getBoundingClientRect()
  el.removeChild(div)
  return DOMRect
}