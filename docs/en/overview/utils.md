# Utils

Sober's core includes some built-in utility functions that you can `import` and use directly.

## scrollElenet — Scroll element

Scrolls the target element to the specified position (with animation).

```ts
import { scrollElement } from 'sober/core/utils/scrollElement.js'
```

```ts
type Options = {
  element: HTMLElement //目标元素
  left?: number // scrollLeft 为空则不滚动
  top?: number //scrollTop 为空则不滚动
  duration: number //动画时长，单位毫秒，如 400
  easing?: string //动画曲线，支持linear、ease、ease-in、ease-out、ease-in-out、或自定义曲线 cubic-bezier(0.2, 0, 0, 1)，默认值 ease
}

export const scrollElement = (options: Options) => void
```

## getStackingContext — Get the target element's stacking context

This function is used to detect the target's stacking context position, width, and height. It is useful when using fixed positioning.

```ts
import { getStackingContext } from 'sober/core/utils/getStackingContext.js'
```

```ts
export declare const getStackingContext: (el: Node) => {
  left: number
  top: number
  width: number
  height: number
}
```
