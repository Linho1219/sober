# DockedTimePicker

A basic time component. Set the `value` property to set the time; if an empty string is provided or the property is omitted, the current time (when the component was created) is used.

```html preview
<s-time-panel></s-time-panel>
```

## Orientation

Set the `orientation` property to control the orientation. It defaults to `auto`, which chooses between horizontal and vertical based on the **window aspect ratio**. You can also set this property to fix the orientation.

```html preview
<s-docked-time-picker orientation="vertical"></s-docked-time-picker>
<s-docked-time-picker orientation="horizontal"></s-docked-time-picker>
```

## Form support

This component can be used as a form element.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  <s-docked-time-picker name="tag" defualtValue="06:00"></s-docked-time-picker>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

---

## Properties

| Name         | Type                       | Default | Sync | Description                                                                                  |
| ------------ | -------------------------- | ------- | ---- | -------------------------------------------------------------------------------------------- |
| orientation  | auto, horizontal, vertical | auto    | √    | Orientation. Defaults to auto, which switches between horizontal and vertical based on the window aspect ratio |
| name         | string                     |         | ×    | The `key` submitted with the form                                                            |
| defualtValue | string                     |         | ×    | Default selection. The value used when the form is reset; only applies on form reset        |
| value        | string                     |         | ×    | Value in HH:mm format. If omitted, the current time is used                                  |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                  |
| ------ | --------- | ------ | ---------- | ---------------------------- |
| change | Event     | ×      | ×          | Fired when the selection changes |

## Keyboard shortcuts

Use `Tab` to move focus, and `ArrowUp` or `ArrowDown` to switch between the hour and minute.

## Dependencies

This component automatically imports the following components when imported:

- [Ripple](./ripple.md)
