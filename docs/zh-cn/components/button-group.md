# Button Group

按钮组，它为 [Button](./button.md) 组件和 [Icon Button](./icon-button.md) 组件提供一个容器，以方便组合使用。

```vue preview
<script setup lang="ts">
import { ref } from 'vue'

const size = ref('medium')

</script>
<template>
  <s-button-group>
    <s-icon-button type="checkbox" :size="size">
      <ms-icon name="home"></ms-icon>
    </s-icon-button>
    <s-icon-button type="checkbox" :size="size" width="wide">
      <ms-icon name="favorite"></ms-icon>
    </s-icon-button>
    <s-icon-button type="checkbox" :size="size" width="narrow">
      <ms-icon name="star"></ms-icon>
    </s-icon-button>
    <s-icon-button type="checkbox" :size="size">
      <ms-icon name="settings"></ms-icon>
    </s-icon-button>
</s-button-group>
  <hr>
  <s-radio v-model.lazy="size" value="extra-small" type="radio">extra-small</s-radio>
  <s-radio v-model.lazy="size" value="small" type="radio">small</s-radio>
  <s-radio v-model.lazy="size" value="medium" type="radio">medium</s-radio>
  <s-radio v-model.lazy="size" value="large" type="radio">large</s-radio>
  <s-radio v-model.lazy="size" value="extra-large" type="radio">extra-large</s-radio>
</template>
```

## 变体

设置 `variant` 属性为 `connected` 设置不同的变体，它支持 [Button](./button.md) 和 [Icon Button](./icon-button.md) 组件的不同尺寸。

```vue preview
<script setup lang="ts">
import { ref } from 'vue'

const size = ref('small')

</script>
<template>
  <s-button-group variant="connected">
    <s-button type="checkbox" :size="size">
      <ms-icon name="home" slot="start"></ms-icon>
      Home
    </s-button>
    <s-button type="checkbox" :size="size">
      <ms-icon name="favorite" slot="start"></ms-icon>
      Favorite
    </s-button>
    <s-button type="checkbox" :size="size">
      <ms-icon name="star" slot="start"></ms-icon>
      star
    </s-button>
  </s-button-group>
  <hr>
  <s-radio v-model.lazy="size" value="extra-small" type="radio">extra-small</s-radio>
  <s-radio v-model.lazy="size" value="small" type="radio">small</s-radio>
  <s-radio v-model.lazy="size" value="medium" type="radio">medium</s-radio>
  <s-radio v-model.lazy="size" value="large" type="radio">large</s-radio>
  <s-radio v-model.lazy="size" value="extra-large" type="radio">extra-large</s-radio>
</template>
```

## 属性

| 名称    | 类型                    | 默认值     | 同步 | 说明 |
| ------- | ----------------------- | ---------- | ---- | ---- |
| variant | `standard`, `connected` | `standard` | √    | 变体 |

## 插槽

| 名称 | 说明                                       |
| ---- | ------------------------------------------ |
| 匿名 | 内容，默认支持 `s-button`, `s-icon-button` |

## 键盘快捷键

使用 `Tab` 键切换焦点，使用 `Space` 或者 `Enter` 键触发点击事件。

## 依赖

- [Button](./button.md)
- [IconButton](./icon-button.md)
