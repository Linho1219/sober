# 服务端渲染 SSR

Sober 已经做了SSR兼容，你可以在服务端中直接 `import 'sober'`。  
但是请注意：Sober 不会在服务端执行任何渲染，因为它需要依赖浏览器的 DOM API 来渲染样式。

因此，以下组件实例在服务端永远返回 `null`，在 `React` 中也同理：

```vue
<template>
  <s-button ref="btn"> Button </s-button>
</template>
<script setup>
import { useTemplateRef } from 'vue'

const btn = useTemplateRef('btn')
btn.value //null
</script>
```

## 组件原型

组件原型类在服务端渲染中，将返回一个只有 `define()` 静态方法的空类。

```js
import { Button } from 'sober'

console.log(Button) // class {}
Button.define('s-my-button')
```

## 组件实例

尽管你依旧可以实例化组件，但由于组件原型是个空类，所以所有组件都没有任何属性和方法。

```js
import { Button } from 'sober'

const btn = new Button()
console.log(btn.varint) // undefined
```
