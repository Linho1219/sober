# FieldSet

A field set. This component can be used as a container or a form container.

```html preview
<s-field-set>
  <div slot="legend"> 浣溪沙·谁念西风独自凉时只道是寻常时只道是寻常</div>
  <div slot="body">
    谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳。<br>
    被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常
  </div>
</s-field-set>
```

Use slots.

```html preview
<s-field-set>
  <s-icon slot="start" name="star" style="margin-left: 16px"></s-icon>
  <div slot="legend">浣溪沙·谁念西风独自凉</div>
  <div slot="body">
    谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳。<br>
    被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常
  </div>
  <s-icon slot="end" name="star" style="margin-right: 16px"></s-icon>
</s-field-set>
```

Without a legend, it acts as a plain container.

```html preview
<s-field-set>
  <div slot="body">
    谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳。<br>
    被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常
  </div>
</s-field-set>
```

## Focused

Set the `focused` attribute to focus.

```html preview
<s-field-set focused>
  <div slot="legend">浣溪沙·谁念西风独自凉</div>
  <div slot="body">
    浣溪沙·谁念西风独自凉<br>
    谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳。<br>
    被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常
  </div>
</s-field-set>
```

## Floating

Set `floating` to toggle the floating state.

```html preview
<s-field-set floating>
  <div slot="legend">浣溪沙·谁念西风独自凉</div>
</s-field-set>
<s-button onclick="this.previousElementSibling.floating=!this.previousElementSibling.floating"> 切换 </s-button>
```

## Custom styles

Customize the border radius via CSS variables.

```vue preview
<style scoped>
 .field-set{
    --s-field-set-border-top-left-radius: 12px;
    --s-field-set-border-top-right-radius: 0px;
    --s-field-set-border-bottom-right-radius: 12px;
    --s-field-set-border-bottom-left-radius: 0px;
  }
</style>
<template>
  <s-field-set class="field-set">
    <div slot="legend">浣溪沙·谁念西风独自凉</div>
    <div slot="body">
      谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳。<br>
      被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常
    </div>
  </s-field-set>
</template>
```

---

## Properties

| Name     | Type    | Default | Sync | Description |
| -------- | ------- | ------- | ---- | ----------- |
| focused  | boolean | false   | √    | Focused     |
| floating | boolean | false   | √    | Floating    |

## Slots

| Name      | Description    |
| --------- | -------------- |
| Anonymous | Custom content |
| legend    | Legend         |
| body      | Body content   |
| start     | Start          |
| end       | End            |

## CSS Variables

| Name                                     | Description                                                          |
| ---------------------------------------- | -------------------------------------------------------------------- |
| --s-field-set-legend-gap                 | Gap around the legend                                                |
| --s-field-set-padding                    | Padding; accepts a single value that applies to all four sides      |
| --s-field-set-padding-top                | Top padding                                                          |
| --s-field-set-padding-right              | Right padding                                                        |
| --s-field-set-padding-bottom             | Bottom padding                                                       |
| --s-field-set-padding-left               | Left padding                                                         |
| --s-field-set-border-color               | Border color                                                         |
| --s-field-set-border-color-focused       | Border color when focused                                            |
| --s-field-set-border-width                | Border width                                                         |
| --s-field-set-border-width-focused        | Border width when focused                                            |
| --s-field-set-border-radius               | Border radius; accepts a single value that applies to all four corners |
| --s-field-set-border-top-left-radius     | Top-left corner radius                                               |
| --s-field-set-border-top-right-radius    | Top-right corner radius                                              |
| --s-field-set-border-bottom-left-radius  | Bottom-left corner radius                                            |
| --s-field-set-border-bottom-right-radius | Bottom-right corner radius                                           |

> Note: CSS variables are involved in size calculations. Prefer using CSS variables to adjust the component's styles. If you directly use the ::part() selector to adjust sizes, the size calculation may break unless you know exactly what you are doing.
