# Ripple

You can add this component inside any element to add a ripple effect. Note that you must set a CSS `position` other than `static` on the parent or an ancestor element, because it relies on `position` for positioning.

```html preview
<div style="position: relative; height: 100px;border: solid 1px #ddd">
  <s-ripple></s-ripple>
</div>
```

## Delay

With the `delay` attribute, you can define a delay time in milliseconds (effective on touch devices only). If the user swipes during the delay, the animation will be canceled.

```html preview
<div style="position: relative; height: 100px;border: solid 1px #ddd">
  <s-ripple delay="200"></s-ripple>
</div>
```

The user's touch is likely intended to scroll the page rather than trigger a click, so playing the ripple animation on touch can feel jarring. You can define `--s-ripple-delay` on a scrollable element to set the delay for all ripples inside it.

```html
<div style="overflow: auto; --s-ripple-delay: 50;">
  <s-ripple></s-ripple>
  <s-ripple></s-ripple>
  <s-ripple></s-ripple>
</div>
```

> Any other component that depends on this component can use this approach to set the delay, for example the `s-button` component.

## Usage on `<a>` tags

```html preview
<a href="http://baidu.com/xxxx" style="position: relative;">
  Back Home
  <s-ripple></s-ripple>
</a>
```

---

## Properties

| Name          | Type      | Default  | Sync | Description                                                                                                                       |
| ------------- | --------- | -------- | ---- | --------------------------------------------------------------------------------------------------------------------------------- |
| disabled      | `boolean` | `false`  | √    | Disables the ripple                                                                                                               |
| disabledHover | `boolean` | `false`  | √    | Disables the hover effect                                                                                                         |
| parentDepth   | `number`  | `-1`     | ×    | Number of parent levels. This attribute sets how many levels up an ancestor element triggers the ripple. If the component is inserted as a slot of another component, it looks for ancestor elements inside the slot. |
| delay         | `number`  | `0`      | √    | Delay time in milliseconds                                                                                                         |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                           |
| ------ | --------- | ------ | ---------- | ------------------------------------ |
| open   | Event     | ×      | ×          | Fired when the ripple opens          |
| close  | Event     | ×      | ×          | Fired when the ripple closes         |
| opened | Event     | ×      | ×          | Fired when the ripple opening finishes |
| closed | Event     | ×      | ×          | Fired when the ripple closing finishes |

## HTML Tag Attributes

| Name    | Description                                            |
| ------- | ------------------------------------------------------ |
| pressed | Set when pressed (set on the container)                |
| hover   | Set on mouse hover (set on the container)              |

## Style variables

| Name                      | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| --s-ripple-disabled       | Same as the `disabled` attribute, but this CSS variable has higher priority     |
| --s-ripple-disabled-hover | Same as the `disabled-hover` attribute, but this CSS variable has higher priority |
| --s-ripple-delay          | Same as the `delay` attribute, but this CSS variable has higher priority          |
| --s-ripple-opacity        | Ripple opacity; defaults to 0.1                                                  |
| --s-ripple-color          | Ripple color; defaults to the `color` value                                      |
| --s-ripple-hover-opacity  | Hover opacity; defaults to 0.08                                                 |
