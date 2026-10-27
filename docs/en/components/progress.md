# Progress

A progress bar.

```html preview
<s-progress value="60"></s-progress>
```

## Indeterminate

Set the `indeterminate` attribute to define an indeterminate progress bar.

```html preview
<s-progress indeterminate></s-progress><hr>
<s-progress size="large" indeterminate></s-progress>
```

The progress bar has transition animations. If you want the value to update in real time, you can use CSS `transition: none` to disable the transition.

```html preview
<s-progress value="80" style="transition: none"></s-progress>
<input type="range" min="0" max="100" value="80" style=" margin-top: 16px" oninput="this.previousElementSibling.value=this.value" />
```

---

## Properties

| Name          | Type              | Default   | Sync | Description   |     |
| ------------- | ----------------- | --------- | ---- | ------------- | --- |
| indeterminate | `boolean`         | `false`   | √    | Indeterminate |     |
| max           | `number`          | `100`     | ×    | Maximum value |     |
| value         | `number`          | `0`       | ×    | Current value |     |
