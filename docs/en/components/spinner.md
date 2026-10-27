# Spinner

A circular progress indicator.

```html preview
<s-spinner value="60"></s-spinner>
```

## Indeterminate

Set the `indeterminate` attribute to define an indeterminate spinner.

```html preview
<s-spinner indeterminate></s-spinner>
```

## Custom Size

Use `strokeWidth` and `strokeGap` to control the thickness and gap of the spinner.

```html preview
<s-spinner strokeWidth="6" strokeGap="4" style="width: 80px" value="80">80%</s-spinner>
<s-spinner indeterminate strokeWidth="2" style="width: 80px"></s-spinner>
```

> Note: The component always preserves its aspect ratio, so `strokeWidth` and `strokeGap` are always relative to the original size (`40px`).  
> For example, if the spinner is set to `80px` wide, `strokeWidth=4` actually renders as `8px`.  
> You can always use the formula `value * 40 / width` to define absolute values.

The spinner has a transition animation. If you want progress to update in real time, use CSS `transition: none` to disable the transition.

```html preview
<s-spinner value="84" style="transition: none; width: 60px"></s-spinner><hr>

<s-base-slider end="84" oninput="this.previousElementSibling.previousElementSibling.value=this.end"></s-base-slider>
```

---

## Properties

| Name          | Type      | Default | Sync | Description     |
| ------------- | --------- | ------- | ---- | --------------- |
| indeterminate | `boolean` | `false` | √    | Indeterminate   |
| max           | `number`  | `100`   | ×    | Maximum value   |
| value         | `number`  | `0`     | ×    | Current value   |
| strokeWidth   | `number`  | `4`     | ×    | Track width     |
| strokeGap     | `number`  | `4`     | ×    | Track gap       |

## Style Variables

| Name                          | Description                              |
| ----------------------------- | ---------------------------------------- |
| --s-spinner-track-color       | Track color, defaults to the stroke value |
| --s-spinner-indicator-color   | Indicator color, defaults to the color value |
| --s-spinner-track-opacity      | Track opacity                            |
| --s-spinner-indicator-opacity  | Indicator opacity                        |
