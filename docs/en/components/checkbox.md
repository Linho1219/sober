# Checkbox

Checkboxes allow users to select one or more items from a list, or to toggle items on or off.

```html preview
<s-checkbox>已阅读用户协议</s-checkbox>
<s-checkbox checked></s-checkbox>
<s-checkbox indeterminate></s-checkbox>
<s-checkbox indeterminate checked></s-checkbox>
```

## Disabled

Set the `disabled` attribute to disable the checkbox.

```html preview
<s-checkbox disabled></s-checkbox>
<s-checkbox disabled checked></s-checkbox>
<s-checkbox disabled indeterminate></s-checkbox>
<s-checkbox disabled indeterminate checked></s-checkbox>
```

## Readonly

Set the `readOnly` attribute to make the checkbox read-only.

```html preview
<s-checkbox readOnly></s-checkbox>
<s-checkbox readOnly checked></s-checkbox>
<s-checkbox readOnly indeterminate></s-checkbox>
<s-checkbox readOnly indeterminate checked></s-checkbox>
```

## Custom styles

```html preview
<s-checkbox style="color: #009688" checked></s-checkbox>
<s-checkbox style="color:rgb(212, 162, 35); height: 56px" checked></s-checkbox>
```

If you need to set the checked color separately, you can use a CSS selector:

```vue preview
<style>
  .checkbox[checked]{
    color: #009688;
  }
</style>
<template>
  <s-checkbox class="checkbox">已阅读用户协议</s-checkbox>
</template>
```

## Form support

This component can be used as a form element.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <s-checkbox name="tag" value="java"> Java </s-checkbox>
  <s-checkbox name="tag" value="rust"> Rust </s-checkbox>
  <s-checkbox name="tag" value="python" defaultChecked checked> Python </s-checkbox>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

> Note: if you use the `v-model.lazy` syntactic sugar in `Vue`, you must explicitly set `type=checkbox` in the template.

---

## Properties

| Name           | Type      | Default  | Sync | Description                                                 |
| -------------- | --------- | -------- | ---- | ----------------------------------------------------------- |
| disabled       | `boolean` | `false`  | √    | Disabled                                                    |
| readOnly       | `boolean` | `false`  | √    | Read-only                                                   |
| indeterminate  | `boolean` | `false`  | √    | Indeterminate                                               |
| checked        | `boolean` | `false`  | √    | Checked                                                     |
| defaultChecked | `boolean` | `false`  | √    | Default checked. Used as the default when the form resets.  |
| name           | `string`  | `''`     | √    | Name. The `key` used when the form is submitted.             |
| value          | `string`  | `''`     | ×    | Value. Effective on form submission.                          |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                          |
| ------ | --------- | ------ | ---------- | ------------------------------------ |
| change | Event     | ×      | ×          | Fired when the checked state changes |

## Slots

| Name      | Description |
| --------- | ----------- |
| Anonymous | Text        |

## HTML Tag Attributes

| Name    | Description          |
| ------- | -------------------- |
| pressed | Set when pressed     |
| hover   | Set on pointer enter |

## Keyboard shortcuts

Use `Tab` to move focus, and `Space` or `Enter` to trigger the click event.
