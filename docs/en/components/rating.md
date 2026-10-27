# Rating

A rating component.

```html preview
<s-rating></s-rating>
```

Reversed rating.

```html preview
<s-rating reversed></s-rating>
```

Read-only.

```html preview
<s-rating readonly></s-rating>
```

## Disabled

Set the `disabled` attribute to disable the component.

```html preview
<s-rating disabled></s-rating>
```

## Custom display

Custom icons.

```html preview
<s-rating>
  <s-icon slot="track"></s-icon>
  <s-icon slot="track"></s-icon>
  <s-icon slot="track"></s-icon>
  <s-icon slot="track"></s-icon>
  <s-icon slot="track"></s-icon>
  <s-icon slot="fill"></s-icon>
  <s-icon slot="fill"></s-icon>
  <s-icon slot="fill"></s-icon>
  <s-icon slot="fill"></s-icon>
  <s-icon slot="fill"></s-icon>
</s-rating>
```

Using text.

```html preview
<s-rating>
  <span slot="track">ABCDE</span>
  <span slot="fill">ABCDE</span>
</s-rating>
```

## Form support

This component can be used as a form element.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <s-rating name="star" defualtValue="5"></s-rating>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

---

## Properties

| Name         | Type      | Default  | Sync | Description                                                          |
| ------------ | --------- | -------- | ---- | ------------------------------------------------------------------- |
| disabled     | `boolean` | `false`  | √    | Disabled                                                            |
| readOnly     | `boolean` | `false`  | √    | Read-only                                                           |
| reversed     | `boolean` | `false`  | √    | Reversed                                                            |
| value        | `number`  | `5`      | √    | Value                                                               |
| step         | `number`  | `1`      | √    | Step; make sure it is divisible by (max - min)                      |
| max          | `number`  | `10`     | √    | Maximum value                                                       |
| min          | `number`  | `0`      | √    | Minimum value                                                       |
| name         | `string`  | `''`     | ×    | Name; the `key` used when the form is submitted                     |
| defualtValue | `number`  | `0`      | ×    | The default value on form reset; only takes effect on form reset    |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                                        |
| ------ | --------- | ------ | ---------- | -------------------------------------------------- |
| input  | Event     | ×      | ×          | Fired after the value changes                      |
| change | Event     | ×      | ×          | Fired after the value changes and the element loses focus |

## Slots

| Name  | Description                                                          |
| ----- | -------------------------------------------------------------------- |
| track | Track; supports `.icon`, `svg`, `s-icon`, `ms-icon` by default      |
| fill  | Fill; supports the same as track by default                          |

## HTML Attributes

| Name    | Description              |
| ------- | ------------------------ |
| pressed | Set when pressed         |
| hovered | Set on mouse hover       |

## Keyboard shortcuts

Press `Tab` to move focus, and `⬆️⬇️⬅️➡️` to adjust the value.

## Dependencies

When this component is imported, the following components are automatically imported:

- [BaseSlider](./base-slider.md)
