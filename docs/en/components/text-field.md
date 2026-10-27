# TextField

A single-line text input.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本"></s-text-field>
```

## Using slots

Use the `start` and `end` slots to add content before and after the input, use the anonymous slot to place content inside, and use the `helper` slot to add help text.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本">
  <s-icon slot="start"></s-icon>
  <s-icon slot="end"></s-icon>
</s-text-field>

<s-text-field label="请输入内容..." placeholder="请输入文本">
  <s-icon-button slot="start">
    <svg viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
  </s-icon-button>
  <s-icon-button slot="end">
    <svg viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
  </s-icon-button>
</s-text-field>

<s-text-field label="请输入内容..." placeholder="请输入文本">
  <s-button slot="start" variant="text"> 点击我 </s-button>
  <s-button slot="end" variant="text"> 点击我 </s-button>
</s-text-field>

<s-text-field label="请输入内容..." placeholder="请输入文本">
  <s-chip closable onclose="this.remove()" style="margin-bottom: 12px">
    贵州
  </s-chip>
  <s-chip closable onclose="this.remove()" style="margin-bottom: 12px; margin-left: 8px;">
    广西
  </s-chip>
</s-text-field>

<s-text-field label="请输入内容..." placeholder="请输入文本">
  <div slot="helper">请输入 10 个字符</div>
</s-text-field>
```

## Clear button

Set the `showClear` attribute to make the input clearable.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本" showClear value="你好"></s-text-field>
```

## Counter

Set `showCount` to display a counter.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本" showClear showCount value="This is My TextArea"></s-text-field>
```

You can also set the `maxLength` attribute to limit the input length.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本" showClear showCount maxLength="100" value="This is My TextArea"></s-text-field>
```

## Error state

Set `showError` to display an error state.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本" showError value="userName">
  <div slot="helper">用户名称已存在</div>
</s-text-field>
```

## Password input

Set `type="password"` to show a password input, and `showPasswordToggle` to show the password toggle button.

```html preview
<s-text-field label="请输入密码" type="password" showPasswordToggle></s-text-field>
```

## Number input

Set `type="number"` to show a number input. It only allows `0‑9`, `+`, `‑`, `.`, `e`, `E`. Note that if the input is invalid, `value` will return an empty string. Set `showNumberSpin` to show the number spin buttons.

```html preview
<s-text-field label="请输入数字" type="number" showNumberSpin></s-text-field>
```

## Search input

Set `type="search"` to show a search input, and `showSearch` to show the search button.

```html preview
<s-text-field label="请输入关键字" type="search" showSearch onsearch="alert('搜索')"></s-text-field>
```

## Readonly and disabled

Set `disabled` to disable the input, and `readOnly` to make it read-only.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本" disabled value="userName"></s-text-field>
<s-text-field label="请输入内容..." placeholder="请输入文本" readOnly value="userName"></s-text-field>
```

## Size

Use the `size` attribute to define the input size. Besides the default `medium`, it can be set to `small` or `large`.

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本" size="small">
  <s-icon slot="start"></s-icon>
  <s-icon slot="end"></s-icon>
</s-text-field>
<s-text-field label="请输入内容..." placeholder="请输入文本" size="small">
  <s-icon-button slot="start" size="extra-small">
    <svg viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
  </s-icon-button>
  <s-icon-button slot="end" size="extra-small">
    <svg viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
  </s-icon-button>
</s-text-field>
<s-text-field label="请输入内容..." placeholder="请输入文本" size="small">
  <s-button slot="start" variant="text" size="extra-small"> 点击我 </s-button>
  <s-button slot="end" variant="text" size="extra-small"> 点击我 </s-button>
</s-text-field>
<hr>
```

```html preview
<s-text-field label="请输入内容..." placeholder="请输入文本" size="large">
  <s-icon slot="start"></s-icon>
  <s-icon slot="end"></s-icon>
</s-text-field>
<s-text-field label="请输入内容..." placeholder="请输入文本" size="large">
  <s-icon-button slot="start">
    <svg viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
  </s-icon-button>
  <s-icon-button slot="end">
    <svg viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
  </s-icon-button>
</s-text-field>
<s-text-field label="请输入内容..." placeholder="请输入文本" size="large">
  <s-button slot="start" variant="text"> 点击我 </s-button>
  <s-button slot="end" variant="text"> 点击我 </s-button>
</s-text-field>
<hr>
```

## Custom styles

You can customize the input size or style via CSS variables.

```vue preview
<template>
  <s-text-field label="请输入内容..." placeholder="请输入文本" class="text-field"></s-text-field>
</template>
<style scoped>
.text-field {
  --s-text-field-padding-left: 24px;
  --s-text-field-padding-right: 24px;
  --s-text-field-border-radius: 24px;
}
</style>
```

## Form support

This component supports forms.

```html preview
<form action="http://coolaf.com/tool/params" method="get"> 
  <s-text-field label="请输入内容..." placeholder="请输入文本" name="text"></s-text-field>
    <s-button type="reset" variant="outlined">重置</s-button>
  <s-button type="submit">提交</s-button>
</form>
```

---

## Properties

| Name               | Type                                                   | Default  | Sync | Description                                                          |
| ------------------ | ------------------------------------------------------ | -------- | ---- | -------------------------------------------------------------------- |
| type               | `text`, `password`, `number`, `search`, `email`, `tel` | `text`   | √    | Input type                                                           |
| size               | `small`, `medium`, `large`                            | `medium` | √    | Size                                                                 |
| disabled           | `boolean`                                              | `false`  | √    | Disabled                                                             |
| readOnly           | `boolean`                                              | `false`  | √    | Readonly                                                             |
| showError          | `boolean`                                              | `false`  | √    | Show error state                                                     |
| showClear          | `boolean`                                              | `false`  | √    | Show clear button                                                    |
| showCount          | `boolean`                                              | `false`  | √    | Show character count                                                 |
| showPasswordToggle | `boolean`                                              | `false`  | √    | Show password toggle button (requires `type="password"`)            |
| showNumberSpin     | `boolean`                                              | `false`  | √    | Show number spin buttons (requires `type="number"`)                  |
| showSearch         | `boolean`                                              | `false`  | √    | Show search button (requires `type="search"`)                       |
| name               | `string`                                               | `''`     | √    | Name, used as the `key` when the form is submitted                   |
| autoComplete       | `string`                                               | `off`    | ×    | Autocomplete, same as the native input                               |
| inputMode          | `string`                                               | `''`     | ×    | Input mode, same as the native input                                 |
| defaultValue       | `string`                                               | `''`     | ×    | Default value, used when the form is reset                           |
| value              | `string`                                               | `''`     | ×    | Value                                                                |
| label              | `string`                                               | `''`     | ×    | Floating label                                                       |
| placeholder        | `string`                                               | `''`     | ×    | Placeholder, same as the native input                                |
| maxLength          | `string`                                               | `-1`     | ×    | Maximum length                                                       |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                                      |
| ------ | --------- | ------ | ---------- | ------------------------------------------------ |
| input  | InputEvent | ×     | ×          | Fired when the input changes                     |
| change | Event     | ×      | ×          | Fired when the input changes and loses focus     |
| search | Event     | ×      | ×          | Fired after the search button is pressed         |

## Slots

| Name      | Description                                                                                          |
| --------- | --------------------------------------------------------------------------------------------------- |
| Anonymous | Custom content                                                                                       |
| start     | Start. Supports `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `s-button`, `s-icon-button` by default. |
| end       | End. Same as `start` by default.                                                                    |
| helper    | Help text                                                                                            |

## CSS Variables

| Name                                      | Description                                                          |
| ----------------------------------------- | -------------------------------------------------------------------- |
| --s-text-field-label-gap                  | Gap around the label                                                 |
| --s-text-field-padding                    | Padding; supports a single value that applies to left and right      |
| --s-text-field-padding-right              | Right padding                                                        |
| --s-text-field-padding-left               | Left padding                                                         |
| --s-text-field-border-color               | Border color                                                         |
| --s-text-field-border-color-focused       | Border color when focused                                            |
| --s-text-field-border-width               | Border width                                                         |
| --s-text-field-border-width-focused       | Border width when focused                                            |
| --s-text-field-border-radius              | Border radius; supports a single value that applies to all four corners |
| --s-text-field-border-top-left-radius     | Top-left corner radius                                               |
| --s-text-field-border-top-right-radius    | Top-right corner radius                                              |
| --s-text-field-border-bottom-left-radius  | Bottom-left corner radius                                            |
| --s-text-field-border-bottom-right-radius | Bottom-right corner radius                                           |

> Note: CSS variables participate in size calculations. You should prefer CSS variables to adjust the component style. If you directly use ::part() selectors to adjust sizes, you may cause incorrect size calculations unless you know exactly what you are doing.

## Keyboard shortcuts

Use the `Tab` key to move focus, and the `Space` or `Enter` key to trigger the click event.

## Dependencies

When this component is imported, the following components are automatically imported:

- [Ripple](./ripple.md)
