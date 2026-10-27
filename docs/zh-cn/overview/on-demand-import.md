# 按需引入

随着 **Sober** 的更新，体积可能会越来越大，如果你对大小非常敏感，我们强烈建议你定义对 **Sober** 的按需引入。

下面是一个例子，新建一个 **sober.js** 文件，编辑以下示例代码。

```js
//sober.js
export * from 'sober/button' //按钮
export * from 'sober/checkbox' //复选框
```

然后在你的入口文件中引入该文件进行注册组件。

```js
//mian.js
import './sober.js'
```

完整的组件列表如下，可按照你的需要去导入：

- [Alert](../components/alert.md) `sober/alert`
- [AppBar](../components/appbar.md) `sober/appbar`
- [Avatar](../components/avatar.md) `sober/avatar`
- [Badge](../components/badge.md) `sober/badge`
- [BaseSlider](../components/base-slider.md) `sober/base-slider`
- [ButtonGroup](../components/button.md) `sober/button-group`
- [Button](../components/button.md) `sober/button`
- [Card](../components/card.md) `sober/card`
- [Carousel](../components/carousel.md) `sober/carousel`
- [Checkbox](../components/checkbox.md) `sober/checkbox`
- [Chip](../components/chip.md) `sober/chip`
- [ColorPicker](../components/color-picker.md) `sober/color-picker`
- [DatePicker](../components/date-picker.md) `sober/date-picker`
- [Dialog](../components/dialog.md) `sober/dialog`
- [Divider](../components/divider.md) `sober/divider`
- [Drawer](../components/drawer.md) `sober/drawer`
- [Empty](../components/empty.md) `sober/empty`
- [FabMenu](../components/fab-menu.md) `sober/fab-menu`
- [Fab](../components/fab.md) `sober/fab`
- [FieldSet](../components/field-set.md) `sober/field-set`
- [IconButton](../components/icon-button.md) `sober/icon-button`
- [Icon](../components/icon.md) `sober/icon`
- [Loading](../components/loading.md) `sober/loading`
- [Menu](../components/menu.md) `sober/menu`
- [NavAdaptive](../components/nav-adaptive.md) `sober/nav-adaptive`
- [NavBar](../components/nav-bar.md) `sober/nav-bar`
- [NavRail](../components/nav-rail.md) `sober/nav-rail`
- [PageView](../components/page-view.md) `sober/page-view`
- [Page](../components/page.md) `sober/page`
- [Pagination](../components/pagination.md) `sober/pagination`
- [Picker](../components/picker.md) `sober/picker`

---

## 浏览器上按需引入

如果你没有使用构建工具，而是直接在浏览器中引入，按需引入会发起多个请求造成首次加载变慢，这是不被推荐的行为。
如果你对此不敏感，你依旧可以使用下面的方式按需引入每个组件：

```html
<script type="module">
  import 'https://unpkg.com/sober/dist/appbar.js'
</script>
```
