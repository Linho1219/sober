# Picker Item

This component is only used as a child of `Picker`; on its own it is just a plain container.

```html
<s-picker-item text="南京市">
  <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
  南京
  <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
</s-picker-item>
```

## Properties

| Name       | Type      | Default | Sync | Description                                                            |
| ---------- | --------- | ------- | ---- | ---------------------------------------------------------------------- |
| text       | `string`  |         | ×    | The text displayed when selected                                       |
| value      | `string`  |         | ×    | An arbitrary value, supplied to the `Picker` component when selected   |
| selected   | `boolean` | `false` | √    | Whether the item is selected                                           |
| disabled   | `boolean` | `false` | √    | Whether the item is disabled                                           |
| selectable | `boolean` | `true`  | √    | Whether the item is selectable; when disabled, clicking will not select |

## Events

| Name  | Parameter | Bubble | Cancelable | Description                            |
| ----- | --------- | ------ | ---------- | -------------------------------------- |
| input | Event     | ×      | ×          | Emitted after the item is clicked and selected |

## Slots

| Name      | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| Anonymous | Button text; by default supports text, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` |
| start     | The start position; by default same as the anonymous slot                                    |
| end       | The end position; by default supports the same as the anonymous slot                         |
