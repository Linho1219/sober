import { useProps, useElement, focusKeydownClick, useThrottle } from '../core/elements.js'
import * as scheme from '../core/scheme.js'
import { addDownEvent } from '../core/utils/events/down.js'
import { addMoveEvent } from '../core/utils/events/move.js'
import './ripple.js'

const props = useProps({
  name: '',
  locales: '',
  $value: '',
  $defaultValue: '',
  orientation: ['auto', 'horizontal', 'vertical']
})

const style = /*css*/`
:host{
  display: inline-flex;
  vertical-align: middle;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 36px;
  padding: 24px;
  position: relative;
  border-radius: 12px;
  transition-property: none;
  color: ${scheme.color.onSurface};
  background: ${scheme.color.surfaceContainerLow};
  transition-timing-function: ${scheme.motion.easing.standard};
  transition-duration: ${scheme.motion.duration.short4};
}
.layout{
  display: flex;
  gap: 24px;
}
.headline{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
.time-selector{
  display: flex;
  gap: 8px;
  justify-content: center;
  .hour,
  .minute{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 80px;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    font-size: calc(var(--s-font-size, 1) * 57px);
    background: ${scheme.color.primaryContainer};
    color: ${scheme.color.onPrimaryContainer};
  }
  .minute{
    background: ${scheme.color.surfaceContainer};
    color: ${scheme.color.onSurface};
  }
  .separator{
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    &::before,
    &::after{
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
    }
  }
}
.period-selector{
  display: flex;
  height: 38px;
  border-style: solid;
  border-radius: 12px;
  overflow: hidden;
  border-width: var(--s-border-min, 1px);
  border-color: ${scheme.color.outlineVariant};
  .am,
  .pm{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-basis: 100%;
    min-width: 0;
    height: 100%;
    padding: 0 8px;
    position: relative;
    cursor: pointer;
    font-size: calc(var(--s-font-size, 1) * 14px);
    &.checked{
      background: ${scheme.color.tertiaryContainer};
      color: ${scheme.color.onTertiaryContainer};
    }
    span{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
  }
  .divider{
    border-left-style: solid;
    border-color: inherit;
    border-width: inherit;
    height: 100%;
  }
}
.clock-dial{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  touch-action: none;
  background: ${scheme.color.surfaceContainer};
  .low,
  .high{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    counter-reset: num;
  }
  .high{
    position: absolute;
    transition-property: none;
    clip-path: circle(20px at var(--s_x, 50%) var(--s_y, calc(0% + 24px)));
    background: ${scheme.color.primary};
    color: ${scheme.color.onPrimary};
  }
  .text{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 32px;
    height: 100%;
    position: absolute;
    padding: 8px 0;
    counter-increment: num;
    transform: rotate(calc(var(--s_rotate) * 1deg));
    &::before{
      content: counter(num);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      aspect-ratio: 1;
      -webkit-aspect-ratio: 1;
      transform: rotate(calc(360deg - (var(--s_rotate) * 1deg)));
    }
  }
  .hand{
    height: 100%;
    width: 2px;
    position: absolute;
    transition-property: none;
    transform: rotate(var(--s_hand-rotate));
    color: ${scheme.color.primary};
    .track{ 
      background: currentColor;
      width: 100%;
      position: absolute;
      bottom: 50%;
      height: calc(50% - 40px);
      border-radius: 1px;
    }
  }
}
`

const template = /*html*/`
<div class="layout" part="layout">
  <div class="headline" part="headline">
    <div class="time-selector">
      <div class="hour" aria-label="toggle hour selector" part="time-selector-hour" tabindex="0">
        12
        <s-ripple></s-ripple>
      </div>
      <div class="separator" part="time-selector-separator"></div>
      <div class="minute" aria-label="toggle minute selector" part="time-selector-minute" tabindex="0">
        00
      <s-ripple></s-ripple>
    </div>
    </div>
    <div class="period-selector" part="period-selector">
      <div class="am checked" aria-label="toggle AM" tabindex="0">
        <span></span>
        <s-ripple></s-ripple>
      </div>
      <div class="divider" aria-hidden="true" part="period-selector-divider"></div>
      <div class="pm" aria-label="toggle PM" tabindex="0">
        <span></span>
        <s-ripple></s-ripple>
    </div>
    </div>
  </div>
  <div class="clock-dial" part="clock-dial">
    <div class="low" part="clock-dial-low">
      <div class="text" part="clock-dial-text" style="--s_rotate: 30"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 60"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 90"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 120"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 150"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 180"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 210"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 240"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 270"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 300"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 330"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 0"></div>
    </div>
    <div class="high" part="clock-dial-high">
      <div class="text" part="clock-dial-text" style="--s_rotate: 30"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 60"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 90"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 120"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 150"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 180"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 210"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 240"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 270"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 300"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 330"></div>
      <div class="text" part="clock-dial-text" style="--s_rotate: 0"></div>
    </div>
    <div class="hand" part="hand">
      <div class="track" part="clock-dial-hand-track"></div>
    </div>
  </div>
</div>
`

const getPeriodText = (locales: string) => {
  const out = { start: 'AM', end: 'PM' }
  if (/^en(?:-|$)/i.test(locales)) return out
  const dateTimeFormat = new Intl.DateTimeFormat(locales, {
    hour: 'numeric',
    hourCycle: 'h12',
    dayPeriod: 'narrow',
  })
  const parts = dateTimeFormat.formatRangeToParts(new Date('2026-01-01 08:00:00'), new Date('2026-01-01 15:00:00'))
  for (const part of parts) {
    if (part.type !== 'dayPeriod') continue
    if (part.source === 'startRange') out.start = part.value
    if (part.source === 'endRange') out.end = part.value
  }
  return out
}

export class DockedTimePicker extends useElement({
  props, style, template,
  states: ['formable'],
  setup(shadowRoot, info) {
    const am = shadowRoot.querySelector<HTMLDivElement>('.am')!
    const pm = shadowRoot.querySelector<HTMLDivElement>('.pm')!
    const clockDial = shadowRoot.querySelector<HTMLDivElement>('.clock-dial')!
    const setPeriod = (language?: string) => {
      const { start, end } = getPeriodText((language ?? this.locales) || navigator.language)
      am.firstChild!.textContent = start
      pm.firstChild!.textContent = end
    }
    setPeriod()
    addMoveEvent(clockDial, (e, x, y) => {
      const rect = clockDial.getBoundingClientRect()
      let rotation: number
      const updateHand = (e: PointerEvent | TouchEvent, x: number, y: number) => {
        e.cancelable && e.preventDefault()
        const angle = Math.atan2(y - rect.top - rect.height / 2, x - rect.left - rect.width / 2) * 180 / Math.PI
        rotation = (angle + 90 + 360) % 360
        clockDial.style.setProperty('--s_hand-rotate', `${rotation}deg`)
        const padding = 4
        const indicatorSize = 40
        const size = Math.min(rect.width, rect.height)
        const radius = size / 2 - indicatorSize / 2 - padding
        const rad = (angle + 90) * Math.PI / 180
        clockDial.style.setProperty('--s_x', `${50 + radius * Math.sin(rad) / size * 100}%`)
        clockDial.style.setProperty('--s_y', `${50 - radius * Math.cos(rad) / size * 100}%`)
      }
      updateHand(e, x, y)
      return {
        move: updateHand,
        up: () => {
          console.log('松手', rotation)
        }
      }
    })
    const onLanguageChange = () => {
      if (this.locales !== '') return
      setPeriod(navigator.language)
    }
    window.addEventListener('languagechange', onLanguageChange)
    return {
      onUnmounted: () => window.removeEventListener('languagechange', onLanguageChange),
      locales: () => setPeriod()
    }
  }
}) { }

const name = DockedTimePicker.define('s-time-panel')

declare global {
  interface HTMLElementTagNameMap {
    [name]: DockedTimePicker
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
    } & DockedTimePicker
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