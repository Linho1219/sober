# Split Button Action

This component defines the action part of a split button. It supports the `start` and `end` slots for placing content before and after the label.

```html preview
<s-split-button>
  <s-split-button-action>
    <s-loading slot="start"></s-loading>
    label
    <s-spinner slot="end" indeterminate></s-spinner>
  </s-split-button-action>
</s-split-button>
```

## Properties

| Name     | Type      | Default | Sync | Description |
| -------- | --------- | ------- | ---- | ----------- |
| disabled | `boolean` | `false` | √    | Disabled    |

## Slots

| Name      | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| Anonymous | Button label. Text, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` are supported by default. |
| start     | Start. Same as the anonymous slot by default.                                                |
| end       | End. Same as the anonymous slot by default.                                                  |
