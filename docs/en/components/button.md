# Button

Buttons display most actions in the UI.

```html preview
<s-button>
  <s-loading slot="start"></s-loading>
  Button
  <s-spinner slot="end" indeterminate></s-spinner>
</s-button>
```

## Variants

Set `variant` to choose different variants: `filled`, `elevated`, `tonal`, `outlined`, `text`.

```html preview
<s-button>
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button variant="elevated">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button variant="tonal">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button variant="outlined">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button variant="text">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
```

## Disabled

Set `disabled` to disable a button.

```html preview
<s-button disabled>
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button disabled variant="elevated">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button disabled variant="tonal">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button disabled variant="outlined">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>

<s-button disabled variant="text">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
```

## Checkbox and Radio

Set the `type` attribute to `checkbox` or `radio` to make the button checkable. You can also set the `checked` attribute to check it by default. The `change` event is fired when the checked state toggles.

```html preview
<s-button type="checkbox">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="checkbox" variant="elevated">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="checkbox" variant="tonal">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="checkbox" variant="outlined">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="checkbox" variant="text"> 
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<hr>
<s-button type="radio" name="select">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="radio" name="select" variant="elevated">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="radio" name="select" variant="tonal">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="radio" name="select" variant="outlined">
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
<s-button type="radio" name="select" variant="text"> 
  <ms-icon slot="start" name="home"></ms-icon>
  Button
</s-button>
```

## Size

Set the `size` attribute to define the button size.

```html preview
<s-button size="extra-small">
  <ms-icon slot="start" name="home"></ms-icon>
  button
</s-button>

<s-button size="small">
  <ms-icon slot="start" name="home"></ms-icon>
  button
</s-button>

<s-button size="medium">
  <ms-icon slot="start" name="home"></ms-icon>
  button
</s-button>

<s-button size="large">
  <ms-icon slot="start" name="home"></ms-icon>
  button
</s-button>

<s-button size="extra-large">
  <ms-icon slot="start" name="home"></ms-icon>
  button
</s-button>
```

## Custom styles

You can style it like a regular element, reference styles via a class, or set `display: flex` to fill its container.

```html preview
<s-button style="background-color: #278d1e; display: flex;"> 
  <ms-icon slot="start" name="home"></ms-icon>
  full width
  <s-icon slot="end"></s-icon>
  <s-tooltip>提示</s-tooltip>
</s-button>
```

## Form support

This component can be used as a form element: as a checkbox (`type=checkbox`), a form reset button (`type=reset`), or a submit button (`type=submit`).

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <s-button name="tag" type="checkbox" value="java"> Java </s-button>
  <s-button name="tag" type="checkbox" value="rust"> Rust </s-button>
  <s-button name="tag" type="checkbox" value="python" checked defaultChecked> Python </s-button>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

## Properties

| Name           | Type                                                     | Default   | Sync | Description                                                              |
| -------------- | -------------------------------------------------------- | --------- | ---- | ------------------------------------------------------------------------ |
| variant        | `filled`, `elevated`, `tonal`, `outlined`, `text`        | `filled`  | √    | Variant                                                                  |
| size           | `small`, `extra-small`, `medium`, `large`, `extra-large` | `small`   | √    | Size                                                                     |
| type           | `button`, `checkbox`, `radio`, `reset`, `submit`         | `button`  | √    | Type. Allows the component to act as a checkbox, radio, submit button, or reset button. |
| disabled       | `boolean`                                                | `false`   | √    | Disabled                                                                 |
| checked        | `boolean`                                                | `false`   | √    | Checked                                                                  |
| defaultChecked | `boolean`                                                | `false`   | ×    | Default checked. Used as the default when the form resets; only effective on form reset. |
| name           | `string`                                                 | `''`      | √    | Name. The `key` used when the form is submitted.                         |
| value          | `string`                                                 | `''`      | ×    | Value. Effective on form submission.                                     |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                          |
| ------ | --------- | ------ | ---------- | ------------------------------------ |
| change | Event     | ×      | ×          | Fired when the checked state changes |

## Slots

| Name      | Description                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------- |
| Anonymous | Button content. Supports text, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` by default. |
| start     | Leading content. Same as Anonymous by default.                                                          |
| end       | Trailing content. Same as Anonymous by default.                                                         |

## HTML Tag Attributes

| Name    | Description          |
| ------- | -------------------- |
| pressed | Set when pressed     |
| hover   | Set on pointer enter |

## Keyboard shortcuts

Use `Tab` to move focus, and `Space` or `Enter` to trigger the click event.

## Dependencies

When this component is imported, it automatically imports the following components:

- [Ripple](./ripple.md)
