# Ripple

你可以将该组件添加到任意元素内来添加波纹效果，但请注意，你必须为父元素或祖先元素设置 CSS `position` 不为 `static`，因为它依赖 `position` 进行定位。

```html preview
<div style="position: relative; height: 100px;border: solid 1px #ddd">
  <s-ripple></s-ripple>
</div>
```

## 在 A 标签使用

```html preview
<a href="http://baidu.com/xxxx" style="position: relative;">
  Back Home
  <s-ripple></s-ripple>
</a>
```

---

## 属性

| 名称             | 类型      | 默认值  | 同步 | 说明                                                                                                   |
| ---------------- | --------- | ------- | ---- | ------------------------------------------------------------------------------------------------------ |
| disabled         | `boolean` | `false` | √    | 禁用波纹的                                                                                             |
| disabledHover    | `boolean` | `false` | √    | 禁用悬停的                                                                                             |
| syncParentStates | `boolean` | `false` | √    | 同步父级状态，启用后按下或鼠标移入时，父级状态也会同步设置 `pressed` 和 `hover` 属性                   |
| parentDepth      | `number`  | `-1`    | ×    | 父级层数，该属性会设置在**祖先元素第几层**触发。如果组件作为其他组件的插槽插入，会查找插槽内的祖先元素 |

## 事件

| 名称   | 参数  | 冒泡 | 可取消 | 说明               |
| ------ | ----- | ---- | ------ | ------------------ |
| open   | Event | ×    | ×      | 波纹打开时触发     |
| close  | Event | ×    | ×      | 波纹关闭时触发     |
| opened | Event | ×    | ×      | 波纹打开完成时触发 |
| closed | Event | ×    | ×      | 波纹关闭完成时触发 |

## 样式变量

| 名称                          | 说明                                                              |
| ----------------------------- | ----------------------------------------------------------------- |
| --s-ripple-disabled           | 该 CSS 变量和 `disabled` 属性一致，区别是该变量优先级更高         |
| --s-ripple-disabled-hover     | 该 CSS 变量和 `disabled-hover` 属性一致，区别是该变量优先级更高   |
| --s-ripple-sync-parent-states | 该 CSS 变量和 `syncParentStates` 属性一致，区别是该变量优先级更高 |
| --s-ripple-opacity            | 波纹不透明度，默认为 0.24                                         |
| --s-ripple-hover-opacity      | 悬停不透明度，默认为 0.1                                          |
| --s-ripple-color              | 波纹颜色，默认情况下使用 color 颜色                               |
| --s-ripple-shadow             | 波纹阴影，如果你需要扩充波纹范围，你可以设置该变量                |
