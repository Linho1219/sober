# Sober Guide for Vue Developers

This document aims to help Vue developers leverage their existing Vue knowledge to build applications with Sober.
If you understand the basics of Vue, you can use this document as a quick start guide for Sober development.

## Components

### How to use components?

```html
<template>
  <s-button ref="button"> Button </s-button>
</template>
<script setup>
  import 'sober/button'
</script>
```

> Importing the corresponding component every time is tedious, so we recommend importing all components in your entry file, so you can use Sober components anywhere.

```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'sober' //导入所有组件
const app = createApp(App)
```

```html
<!--App.vue-->
<template>
  <s-button> Button </s-button>
</template>
```

Don't worry that importing all components will cause you to lose syntax hints and autocompletion for Sober components. We have created `.d.ts` files for each Sober component, so as long as your IDE supports `TypeScript`, it will automatically provide syntax hints and autocompletion for Sober components.

### Vue Caveats

### How to reference a component?

You can reference component instances via `ref` or `useTemplateRef` (v3.5);

```html
<template>
  <s-button ref="button"> Button </s-button>
</template>
<script setup>
  import { useTemplateRef } from 'vue'
  const button = useTemplateRef('button')
</script>
```

Sober component instances, like the return value of `document.querySelector('body')`, are instances of `HTMLElement`.
