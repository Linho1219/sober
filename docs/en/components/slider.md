# Slider

The slider component allows users to select a value within a numeric range. If you need highly custom styles, consider using the [BaseSlider](./base-slider.md) component.

```html preview
<s-slider></s-slider>
```

## Mode

Set the `mode` attribute to use different slider types: `reversed` for a reversed slider, and `range` for a range slider.

```html preview
<s-slider mode="reversed" end="80"></s-slider>
<s-slider mode="range" end="80"></s-slider>
```

## Sliding mode

Set the `slidingMode` attribute to `all` to make clicking anywhere on the slider trigger sliding.

```html preview
<s-slider slidingMode="all"></s-slider>
```

Set the `slidingMode` attribute to `all-cumulative"` to make clicking anywhere on the slider trigger sliding, and accumulate the value.

```html preview
<s-slider slidingMode="all-cumulative"></s-slider>
```

## Disabled

Set `disabled` to disable the slider.

```html preview
<s-slider disabled></s-slider>
<s-slider disabled mode="range"></s-slider>
```

## Read-only

Set the `readOnly` attribute to make the slider read-only.

```html preview
<s-slider readOnly></s-slider>
<s-slider readOnly mode="range"></s-slider>
```

## Value display

Set the `showShow` attribute to make the slider display the current value.

```html preview
<s-slider showValue></s-slider>
<s-slider showValue mode="range"></s-slider>
```

Listen to the `formatvalue` event to format the label value.

```html preview
<s-slider mode="range" showValue onformatvalue="event.detail.format((v) => `No.${v}`)"></s-slider>
```

## Vertical

Set the `orientation` attribute to `vertical` to define a vertical slider. The slider becomes an inline-block element (no longer taking up a full row).

```html preview
<s-slider orientation="vertical" value="30"></s-slider>
<s-slider orientation="vertical" mode="reversed" value="30"></s-slider>
<s-slider orientation="vertical" mode="range"></s-slider>
```

## Interval

Set the `step` attribute to define the slider interval, or use the `stepMarks` attribute to set specific interval values (higher priority).

```html preview
<s-slider step="10"></s-slider>
<s-slider stepMarks="50,60,70,80,90" end="50"></s-slider>
```

## Tick divisions

Set `showDivisions` to display tick divisions.

```html preview
<s-slider showDivisions showValue step="10"></s-slider>
<s-slider showDivisions showValue step="10" mode="reversed"></s-slider>
<s-slider showDivisions showValue step="10" mode="range"></s-slider>
```

You can also set the `stepMarks` attribute to define custom interval values.

```html preview
<s-slider showDivisions showValue stepMarks="30,40,50,60" mode="range"></s-slider>
```

## Size

Set `size` to change the slider size.

```html preview
<s-slider size="extra-small"></s-slider>
<s-slider size="small"></s-slider>
<s-slider size="medium"></s-slider>
<s-slider size="large"></s-slider>
<s-slider size="extra-large"></s-slider>
```

## Form support

This component can be used as a form element.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <s-slider name="tag" defaultEnd="50" mode="range"></s-slider>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

---

## Properties

| Name                | Type                                                     | Default       | Sync | Description                                                                                              |
| ------------------- | -------------------------------------------------------- | ------------- | ---- | -------------------------------------------------------------------------------------------------------- |
| size                | `small`, `extra-small`, `medium`, `large`, `extra-large` | `extra-small` | √    | Size                                                                                                     |
| mode                | `single`, `reversed`, `range`                            | `single`      | √    | Mode. single = single selection, reversed = reversed single selection, range = range selection           |
| slidingMode         | `thumb`, `all`, `all-cumulative`                         | `thumb`       | √    | Sliding mode. thumb = thumb only, all = anywhere, all-cumulative = anywhere with accumulated value      |
| orientation         | `horizontal`, `vertical`                                 | `horizontal`  | √    | Orientation                                                                                              |
| disabled            | `boolean`                                                | `false`       | √    | Disabled                                                                                                 |
| readOnly            | `boolean`                                                | `false`       | √    | Read-only                                                                                                |
| touchScrollPriority | `boolean`                                                | `false`       | √    | Touch scroll priority. When enabled, scrolling takes priority on touch devices                          |
| showValue           | `boolean`                                                | `false`       | √    | Show value. When enabled, the slider displays the current value                                        |
| showDivisions       | `boolean`                                                | `false`       | √    | Show tick divisions. When enabled, the slider shows tick divisions; can be used with `step` or `stepMarks` |
| stepMarks           | `string`                                                 | `''`          | ×    | Step marks, separated by commas, e.g. `20,30,50` (no need to provide max/min). The slider only snaps to the marks |
| step                | `number`                                                 | `1`           | ×    | Step; make sure it is divisible by (max - min)                                                          |
| min                 | `number`                                                 | `0`           | ×    | Minimum value                                                                                            |
| max                 | `number`                                                 | `100`         | ×    | Maximum value                                                                                            |
| value               | `number`                                                 | `50`          | ×    | Current value (value of the single thumb)                                                               |
| start               | `number`                                                 | `0`           | ×    | Start value (the start value when `mode=range`)                                                          |
| end                 | `number`                                                 | `50`          | ×    | End value (the end value when `mode=range`)                                                              |
| name                | `string`                                                 | `''`          | √    | Name; the `key` used when the form is submitted                                                          |
| defaultValue        | `number`                                                 | `50`          | ×    | Default value on form reset; only takes effect on form reset                                            |
| defaultStart        | `number`                                                 | `0`           | ×    | Default start value (only effective in `mode=range`); the default value on form reset                     |
| defaulttEnd         | `number`                                                 | `0`           | ×    | Default end value (only effective in `mode=range`); the default value on form reset                       |

## Events

| Name        | Parameter                                                                                                                      | Bubble | Cancelable | Description                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- | -------------------------------------------------------------------------------------------- |
| input       | Event                                                                                                                         | ×      | ×          | Fired after the value changes                                                                |
| change      | Event                                                                                                                         | ×      | ×          | Fired after the value changes and the element loses focus                                    |
| formatvalue | CustomEvent<{ format: (fn: (value: number, type?: 'start' \| 'end') => string) => void }>                                   | ×      | ×          | Fired when formatting the value; you can call `event.detail.format()` to format the `label` |

## CSS Style Variables

| Name                           | Description          |
| ------------------------------ | -------------------- |
| --s-slider-size                | Slider size          |
| --s-slider-track-size          | Slider track size    |
| --s_slider-track-border-radius | Slider track border radius |
| --s-slider-thumb-size          | Slider thumb size    |

> Note: CSS variables are involved in size calculations. You should prefer using CSS variables to adjust component styles. If you directly use the ::part() selector to adjust sizes, you may cause incorrect size calculations unless you know exactly what you are doing.

## Keyboard shortcuts

Press `Tab` to move focus, and `⬆️⬇️⬅️➡️` to adjust the value.
