# Chip

Chips are used to enter information, make selections, filter content, or trigger actions.

```html preview
<s-chip>
  <s-loading slot="start"></s-loading>
  Chip
  <s-spinner indeterminate slot="end"></s-spinner>
</s-chip>
```

## Variants

Set `variant` to choose different variants: `outlined`, `elevated`, `surface`.

```html preview
<s-chip>
  <s-icon slot="start"></s-icon>
  outlined
</s-chip>
<s-chip variant="surface">
  <s-icon slot="start"></s-icon>
  elevated
</s-chip>
<s-chip variant="elevated">
  <s-icon slot="start"></s-icon>
  elevated
</s-chip>
```

## Interactable

Set the `clickable` attribute to make the chip interactive.

```html preview
<s-chip clickable>
  <s-icon slot="start"></s-icon>
  outlined
</s-chip>
<s-chip variant="surface" clickable>
  <s-icon slot="start"></s-icon>
  surface
</s-chip>
<s-chip variant="elevated" clickable>
  <s-icon slot="start"></s-icon>
  elevated
</s-chip>
```

## Checkbox and Radio

Set the `type` attribute to `checkbox` or `radio` to make the chip checkable. You can also set the `checked` attribute to check it by default. The `change` event is fired when the checked state toggles. Set the `showCheckmark` attribute to show the checkmark icon for checkbox or radio.

```html preview
<s-chip type="checkbox" showCheckmark>Java</s-chip>
<s-chip variant="surface" type="checkbox" showCheckmark checked>Kotlin</s-chip>
<s-chip variant="elevated" type="checkbox" showCheckmark>JavaScript</s-chip>
<hr>
<s-chip type="radio" name="lang">Java</s-chip>
<s-chip type="radio" name="lang" variant="surface" checked>Kotlin</s-chip>
<s-chip type="radio" name="lang" variant="elevated">JavaScript</s-chip>
```

## Closable

Set the `closable` attribute to show a close button. The `close` event is fired when the delete button is clicked.

```html preview
<s-chip closable onclose="this.remove()"> 
  <s-icon slot="start"></s-icon>
  chip 1
</s-chip>
<s-chip closable variant="surface" onclose="this.remove()"> 
  <s-icon slot="start"></s-icon>
  chip 2
</s-chip>
<s-chip closable variant="elevated" onclose="this.remove()"> 
  <s-icon slot="start"></s-icon>
  chip 3
</s-chip>
```

Use the `close-icon` slot to customize the close button icon, or insert an `s-tooltip`.

```html preview
<s-chip closable onclose="this.remove()"> 
  <s-icon slot="start"></s-icon>
  chip 1
  <s-tooltip slot="close-icon" parentDepth="1">关闭</s-tooltip> 
  <svg viewBox="0 -960 960 960" slot="close-icon"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>
</s-chip>
<s-chip closable variant="surface" onclose="this.remove()"> 
  <s-icon slot="start"></s-icon>
  chip 2
  <s-tooltip slot="close-icon" parentDepth="1">关闭</s-tooltip> 
  <svg viewBox="0 -960 960 960" slot="close-icon"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>
</s-chip>
<s-chip closable variant="elevated" onclose="this.remove()"> 
  <s-icon slot="start"></s-icon>
  chip 3
  <s-tooltip slot="close-icon" parentDepth="1">关闭</s-tooltip> 
  <svg viewBox="0 -960 960 960" slot="close-icon"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>
</s-chip>
```

## Disabled

Set the `disabled` attribute to disable the chip.

```html preview
<s-chip disabled> 
  <s-icon slot="start"></s-icon>
  chip 1
</s-chip>
<s-chip disabled variant="surface"> 
  <s-icon slot="start"></s-icon>
  chip 1
</s-chip>
<s-chip disabled variant="elevated"> 
  <s-icon slot="start"></s-icon>
  chip 1
</s-chip>
```

## Using slots

```html preview
<s-chip> Actions </s-chip>
<s-chip>
  <svg viewBox="0 -960 960 960" slot="start"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
  Andorid
</s-chip>
<s-chip>
  <s-loading slot="start"></s-loading>
  Audio & Video
</s-chip>
<s-chip>
  <s-avatar slot="start">S</s-avatar>
  Business
</s-chip>
<s-chip>
  <s-spinner indeterminate slot="start"></s-spinner>
  Business
  <svg slot="end" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>
</s-chip>
```

## Form support

This component can be used as a form element.

```html preview
<form action="/link" method="get">
  选择标签：
  <s-chip name="tag" type="checkbox" value="java"> Java </s-chip>
  <s-chip name="tag" type="checkbox" value="rust"> Rust </s-chip>
  <s-chip name="tag" type="checkbox" value="python" checked defaultChecked> Python </s-chip>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

---

## Properties

| Name           | Type                             | Default    | Sync | Description                                                              |
| -------------- | -------------------------------- | ---------- | ---- | ------------------------------------------------------------------------ |
| variant        | `outlined`,`elevated`, `surface` | `outlined` | √    | Variant                                                                  |
| type           | `chip`, `checkbox`, `radio`      | `chip`     | √    | Type. Allows the component to act as a checkbox or radio.               |
| clickable      | `boolean`                        | `false`    | √    | Interactable                                                             |
| closable       | `boolean`                        | `false`    | √    | Closable                                                                 |
| disabled       | `boolean`                        | `false`    | √    | Disabled                                                                 |
| showCheckmark  | `boolean`                        | `false`    | √    | Shows the checkmark icon for checkbox or radio.                          |
| checked        | `boolean`                        | `false`    | √    | Checked                                                                  |
| name           | `string`                         | `''`       | √    | Name. The `key` used when the form is submitted.                          |
| defaultChecked | `boolean`                        | `false`    | ×    | Default checked. Used as the default when the form resets; only effective on form reset. |
| value          | `string`                         | `''`       | ×    | Value. Effective on form submission.                                     |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                              |
| ------ | --------- | ------ | ---------- | ---------------------------------------- |
| change | Event     | ×      | ×          | Fired when the checked state changes     |
| close  | Event     | ×      | ×          | Fired after the delete button is clicked |

## Slots

| Name       | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| Anonymous  | Text                                                                          |
| start      | Leading content. Supports `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` by default. |
| end        | Trailing content. Same as `start` by default.                                |
| close-icon | Close icon. Same as `start` by default.                                       |

## HTML Tag Attributes

| Name    | Description          |
| ------- | -------------------- |
| pressed | Set when pressed     |
| hovered | Set on pointer enter |

> Tag attributes are sometimes set as HTML attributes so that external styles can be defined.

## Keyboard shortcuts

Use `Tab` to move focus, and `Space` or `Enter` to trigger the click event.

## Dependencies

When this component is imported, it automatically imports the following components:

- [Ripple](./ripple.md)
