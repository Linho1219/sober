# Fab

浮动操作按钮（Floating Action Button）帮助用户采取主要操作。

```html preview
<s-fab>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="secondary">
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tertiary">
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tonal-primary">
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tonal-secondary">
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tonal-tertiary">
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="surface">
  <ms-icon name="home"></ms-icon>
</s-fab>
```

使用其他组件作为插槽。

```html preview
<s-fab>
  <s-loading></s-loading>
</s-fab>
<s-fab>
  <s-spinner indeterminate></s-spinner> 
</s-fab>
```

## 禁用

设置 `disbled` 属性禁用按钮

```html preview
<s-fab disabled>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="secondary" disabled>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tertiary" disabled>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tonal-primary" disabled>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tonal-secondary" disabled>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="tonal-tertiary" disabled>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab variant="surface" disabled>
  <ms-icon name="home"></ms-icon>
</s-fab>
```

## 隐藏的

设置 `hidden` 属性隐藏

```vue preview
<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>
<template>
  <s-fab :hidden="visible">
    <ms-icon name="home"></ms-icon>
  </s-fab>
  <s-button @click="visible=!visible">切换</s-button>
</template>
```

## 尺寸

设置 `size` 属性改变按钮大小。

```html preview
<s-fab>
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab size="medium">
  <ms-icon name="home"></ms-icon>
</s-fab>

<s-fab size="large">
  <ms-icon name="home"></ms-icon>
</s-fab>
```

## 扩展

可以使用文本和 `start`、`end` 插槽添加其他内容。

```html preview
<s-fab>
  <ms-icon slot="start" name="home"></ms-icon>
  提交信息
  <ms-icon slot="end" name="star"></ms-icon>
</s-fab>

<s-fab size="medium" variant="secondary">
  <ms-icon slot="start" name="home"></ms-icon>
  提交信息
  <ms-icon slot="end" name="star"></ms-icon>
</s-fab>

<s-fab size="large" variant="tertiary">
  <ms-icon slot="start" name="home"></ms-icon>
  提交信息
  <ms-icon slot="end" name="star"></ms-icon>
</s-fab>
```

## 属性

| 名称     | 类型                                                                                                | 默认值    | 同步 | 说明   |
| -------- | --------------------------------------------------------------------------------------------------- | --------- | ---- | ------ |
| variant  | `primary`, `secondary`, `tertiary`, `surface`, `tonal-primary`, `tonal-secondary`, `tonal-tertiary` | `primary` | √    | 变体   |
| size     | `small`, `medium`, `large`                                                                          | `small`   | √    | 尺寸   |
| disabled | `boolean`                                                                                           | `false`   | √    | 禁用的 |
| hidden   | `boolean`                                                                                           | `false`   | √    | 隐藏的 |

## 插槽

| 名称  | 说明                                                                                  |
| ----- | ------------------------------------------------------------------------------------- |
| 匿名  | 按钮文本，默认支持文本, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` |
| start | 开始，默认支持同匿名                                                                  |
| end   | 结束，默认支持同匿名                                                                  |

## HTML 标记属性

| 名称    | 说明           |
| ------- | -------------- |
| pressed | 按下时设置     |
| hover   | 鼠标移入时设置 |

## 键盘快捷键

使用 `Tab` 键切换焦点，使用 `Space` 或者 `Enter` 键触发点击事件。

## 依赖

该组件在被引入时会自动引入以下组件：

- [Ripple](./ripple.md)
