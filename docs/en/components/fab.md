# Fab

A Floating Action Button (FAB) helps users take the primary action.

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

Use other components as slots.

```html preview
<s-fab>
  <s-loading></s-loading>
</s-fab>
<s-fab>
  <s-spinner indeterminate></s-spinner> 
</s-fab>
```

## Disabled

Set the `disbled` attribute to disable the button.

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

## Hidden

Set the `hidden` attribute to hide the button.

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

## Size

Set the `size` attribute to change the button size.

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

## Extended

You can add content using text and the `start` and `end` slots.

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

## Properties

| Name     | Type                                                                                                | Default   | Sync | Description |
| -------- | --------------------------------------------------------------------------------------------------- | --------- | ---- | ----------- |
| variant  | `primary`, `secondary`, `tertiary`, `surface`, `tonal-primary`, `tonal-secondary`, `tonal-tertiary` | `primary` | √    | Variant     |
| size     | `small`, `medium`, `large`                                                                          | `small`   | √    | Size        |
| disabled | `boolean`                                                                                           | `false`   | √    | Disabled    |
| hidden   | `boolean`                                                                                           | `false`   | √    | Hidden      |

## Slots

| Name      | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| Anonymous | Button text; supports text, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` by default |
| start     | Start; supports the same content as Anonymous by default                                             |
| end       | End; supports the same content as Anonymous by default                                               |

## HTML Tag Attributes

| Name    | Description                      |
| ------- | -------------------------------- |
| pressed | Set when pressed                 |
| hover   | Set on mouse hover               |

## Keyboard shortcuts

Use the `Tab` key to move focus; use `Space` or `Enter` to trigger the click event.

## Dependencies

This component automatically imports the following components when it is imported:

- [Ripple](./ripple.md)
