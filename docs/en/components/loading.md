# Loading

Loading indicators show progress for a short wait.

```html preview
<s-loading></s-loading>
<s-loading variant="contained"></s-loading>
```

## Full-screen loading

Call the `showModal` static method to show a full-screen loading indicator.

```vue preview
<script setup>
  import { Loading } from 'sober'

  const showLoading = () => {
    const hideModal = Loading.showModal()
    setTimeout(hideModal, 3000)
  }
</script>
<template>
  <s-button @click="showLoading"> 显示 3 秒加载 </s-button>
</template>
```

---

## Properties

| Name    | Type                   | Default   | Sync | Description |
| ------- | ---------------------- | --------- | ---- | ----------- |
| variant | `default`, `contained` | `default` | √    | Variant     |

---
