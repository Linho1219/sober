# TimePanel

时间面板，设置 `value` 属性设置值，如果提供空字符串或不提供该值，则使用当前时间(组件创建的时间)。

```html preview
<s-time-panel value="14:05"></s-time-panel>
```

## 多语言

默认情况下使用系统语言，你可以通过 `locales` 属性设置语言，例如 `zh-CN`，不设置该属性的情况下它会监听系统语言，当系统语言改变时该组件也会改变。

```html preview
<s-time-panel locales="ru"></s-time-panel>
```

## 方向

设置 `orientation` 属性设置方向，默认为 `auto` 它会根据**窗口宽高比例**选择横向还是竖向显示，你也可以设置该属性固定方向。

```html preview
<s-time-panel orientation="vertical"></s-time-panel>
```

## 表单支持

该组件可以作为表单元素使用。

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  <s-time-panel name="tag" defualtValue="06:00"></s-time-panel>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

---

## 属性

| 名称         | 类型                       | 默认值 | 同步 | 说明                                                   |
| ------------ | -------------------------- | ------ | ---- | ------------------------------------------------------ |
| orientation  | auto, horizontal, vertical | auto   | √    | 方向，默认为 auto 会根据窗口宽高比例自动为横向或者纵向 |
| name         | string                     |        | ×    | 名称，表单提交时的 `key` 值                            |
| defualtValue | string                     |        | ×    | 默认选中，表单重置时的默认值，仅表单重置时生效         |
| value        | string                     |        | ×    | 值，格式：HH:mm，如果不提供该值则使用当前时间          |

## 事件

| 名称   | 参数  | 冒泡 | 可取消 | 说明           |
| ------ | ----- | ---- | ------ | -------------- |
| change | Event | ×    | ×      | 选中变更时触发 |

## 键盘快捷键

使用 `Tab` 键切换焦点，使用 `ArrowUp` 或者 `ArrowDown` 切换小时或者分钟。

## 依赖

该组件在被引入时会自动引入以下组件：

- [Ripple](./ripple.md)
