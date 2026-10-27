# Radio

Radio buttons allow users to select one option from a set. (A unique `name` must be set to group the radios so that single selection works.)

```html preview
<s-radio name="group">男</s-radio>
<s-radio name="group">女</s-radio>
<s-radio name="group">未知</s-radio>
```

## Disabled

Set the `disabled` attribute to disable the radio.

```html preview
<s-radio disabled></s-radio>
<s-radio disabled checked></s-radio>
```

## Read-only

Set the `readOnly` attribute to make the radio read-only.

```html preview
<s-radio readOnly></s-radio>
<s-radio readOnly checked></s-radio>
```

When using the `v-model` syntax in the **Vue** framework, you can omit the `name` attribute.

```vue preview
<template>
  <s-radio value="male" v-model.lazy="group" type="radio">男</s-radio>
  <s-radio value="female" v-model.lazy="group" type="radio">女</s-radio>
  <s-radio value="unknown" v-model.lazy="group" type="radio">未知</s-radio>
  当前选中：{{ group }}
</template>
<script setup>
  import { ref } from 'vue'
  const group = ref('male')
</script>
```

## Custom styles

Customize the icon and styles.

```html preview
<s-radio name="group2"></s-radio>
<s-radio name="group2" style="color: #009688" checked></s-radio>
<s-radio name="group2" style="color:rgb(212, 162, 35); height: 56px"></s-radio>
```

If you need to set the checked and unchecked colors separately, you can use CSS selectors:

```vue preview
<style scoped>
  .radio{
    color: #336699;
  }
  .radio[checked]{
    color: #009688;
  }
</style>
<template>
  <s-radio class="radio" name="other">其他 A</s-radio>
  <s-radio class="radio" name="other">其他 B</s-radio>
</template>
```

## Form support

This component can be used as a form element.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <s-radio name="tag" value="java"> Java </s-radio>
  <s-radio name="tag" value="rust"> Rust </s-radio>
  <s-radio name="tag" value="python" defaultChecked checked> Python </s-radio>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

> Note: if you use the `v-model.lazy` syntactic sugar in `Vue`, you must explicitly set `type=radio` in the template.

---

## Properties

| Name           | Type      | Default  | Sync | Description                                |
| -------------- | --------- | -------- | ---- | ------------------------------------------ |
| disabled       | `boolean` | `false`  | √    | Disabled                                   |
| readOnly       | `boolean` | `false`  | √    | Read-only                                  |
| checked        | `boolean` | `false`  | √    | Checked                                    |
| defaultChecked | `boolean` | `false`  | √    | Checked by default; the value on form reset |
| value          | `string`  | `''`     | ×    | Value; used when the form is submitted     |
| name           | `string`  | `''`     | √    | Name; the `key` used when the form is submitted |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                      |
| ------ | --------- | ------ | ---------- | -------------------------------- |
| change | Event     | ×      | ×          | Fired when the selection changes |

## Slots

| Name      | Description |
| --------- | ----------- |
| Anonymous | Text        |

## HTML Tag Attributes

| Name    | Description        |
| ------- | ------------------ |
| pressed | Set when pressed   |
| hover   | Set on mouse hover |

## Keyboard shortcuts

Press `Tab` to move focus, and `Space` or `Enter` to trigger the click event.
