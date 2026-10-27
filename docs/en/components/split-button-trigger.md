# Split Button Trigger

This component defines the trigger part of a split button.

```html preview
<s-split-button>
  <s-split-button-trigger>
    <ms-icon slot="icon" name="arrow_downward"></ms-icon>
    <s-tooltip>Tooltip</s-tooltip>
  </s-split-button-trigger>
</s-split-button>
```

## Properties

| Name     | Type      | Default | Sync | Description |
| -------- | --------- | ------- | ---- | ----------- |
| disabled | `boolean` | `false` | √    | Disabled    |
| checked  | `boolean` | `false` | √    | Checked     |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                          |
| ------ | --------- | ------ | ---------- | ------------------------------------ |
| change | Event     | ×      | ×          | Fired after the trigger button is clicked |

## Slots

| Name      | Description                                                                               |
| --------- | ----------------------------------------------------------------------------------------- |
| Anonymous | Button content                                                                            |
| icon      | Toggle icon. Supports `.icon`, `svg`, `s-icon`, `ms-icon` by default. Rotates `-180deg` when checked. |
