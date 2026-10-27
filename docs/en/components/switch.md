# Switch

A switch is used to toggle the state of an item on or off.

```html preview
<s-switch></s-switch>
<s-switch checked></s-switch>
```

Custom icons

```html preview
<s-switch>
  <svg viewBox="0 -960 960 960" slot="inactive-icon"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>
  <svg viewBox="0 -960 960 960" slot="active-icon"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>
</s-switch>
<s-switch checked>
  <svg viewBox="0 -960 960 960" slot="inactive-icon"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>
  <svg viewBox="0 -960 960 960" slot="active-icon"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>
</s-switch>
```

## Disabled

```html preview
<s-switch disabled>
  <svg viewBox="0 -960 960 960" slot="inactive-icon"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>
  <svg viewBox="0 -960 960 960" slot="active-icon"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>
</s-switch>
<s-switch checked disabled>
  <svg viewBox="0 -960 960 960" slot="inactive-icon"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>
  <svg viewBox="0 -960 960 960" slot="active-icon"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>
</s-switch>
```

## Readonly

Set the `readOnly` attribute to make the switch read-only.

```html preview
<s-switch readOnly></s-switch>
<s-switch checked readOnly></s-switch>
```

## Custom styles

Custom size

```html preview
<s-switch style="width: 42px"></s-switch>
```

## Form support

This component can be used as a form element.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <label> Java <s-switch name="tag" value="java"></s-switch> </label>
  <label> Rust <s-switch name="tag" value="rust"></s-switch> </label>
  <label> Python <s-switch name="tag" value="python" checked defualtChecked></s-switch> </label>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

> Note: If you use the `v-model.lazy` syntax sugar in `Vue`, you must explicitly set `type="checkbox"` in the template.

---

## Properties

| Name           | Type      | Default | Sync | Description                                        |
| -------------- | --------- | ------- | ---- | -------------------------------------------------- |
| disabled       | `boolean` | `false` | √    | Disabled                                           |
| readOnly       | `boolean` | `false` | √    | Readonly                                           |
| checked        | `boolean` | `false` | √    | Checked                                            |
| defualtChecked | `boolean` | `false` | √    | Default checked, used as the value when the form is reset |
| name           | `string`  | `''`    | √    | Name, used as the `key` when the form is submitted |
| value          | `string`  | `''`    | ×    | Value, effective when the form is submitted        |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                      |
| ------ | --------- | ------ | ---------- | -------------------------------- |
| change | Event     | ×      | ×          | Fired when the checked state changes |

## Slots

| Name          | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| inactive-icon | Icon shown when inactive. Supports `.icon`, `svg`, `s-icon`, `ms-icon` by default. |
| active-icon   | Icon shown when active. Same as `inactive-icon` by default.                      |

## Keyboard shortcuts

Use the `Tab` key to move focus, and the `Space` or `Enter` key to trigger the click event.
