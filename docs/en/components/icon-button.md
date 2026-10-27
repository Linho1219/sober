# Icon Button

Icon buttons let users take an action with a single tap.

```html preview
<s-icon-button> 
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button>
  <!--使用 svg-->
  <svg viewBox="0 -960 960 960"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"></path></svg>
</s-icon-button>

<s-icon-button> 
  <s-loading></s-loading>
</s-icon-button>

<s-icon-button> 
  <s-spinner indeterminate></s-spinner>
</s-icon-button>

<s-icon-button> 
  S
</s-icon-button>
```

## Variants

Set `variant` to choose a variant: `standard`, `filled`, `tonal`, or `outlined`.

```html preview
<s-icon-button> 
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<s-icon-button variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button variant="tonal"> 
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button variant="outlined">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
```

## Disabled

Set `disabled` to disable the button.

```html preview
<s-icon-button disabled> 
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button disabled variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button disabled variant="tonal"> 
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button disabled variant="outlined">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
```

## Radio and checkbox

Set the `type` attribute to `checkbox` or `radio` to make the button selectable. You can also set `checked` to check it by default, and the `change` event fires when the selection toggles.

```html preview
<s-icon-button type="checkbox">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<s-icon-button type="checkbox" variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<s-icon-button type="checkbox" variant="tonal">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<s-icon-button type="checkbox" variant="outlined">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<hr>
<s-icon-button type="radio" name="select">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<s-icon-button type="radio" name="select" variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<s-icon-button type="radio" name="select" variant="tonal">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
<s-icon-button type="radio" name="select" variant="outlined">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
```

## Size

Set the `size` attribute to control the button size (you can also set the CSS `width` and `height` for more precise sizing).

```html preview
<s-icon-button size="extra-small" variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button size="small" variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button size="medium" variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button size="large" variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button size="extra-large" variant="filled">
  <ms-icon name="home"></ms-icon>
</s-icon-button>
```

## Width

Set the `width` attribute to make the button wider or narrower, which suits wider or narrower icons.

```html preview
<s-icon-button variant="filled" width="wide">
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button variant="tonal"> 
  <ms-icon name="home"></ms-icon>
</s-icon-button>

<s-icon-button variant="outlined" width="narrow">
  <ms-icon name="home"></ms-icon>
</s-icon-button><br>
```

## Badge

Use the `badge` component to add a badge to the icon button.

```html preview
<s-icon-button variant="filled">
  <ms-icon name="home"></ms-icon>
  <s-badge></s-badge>
</s-icon-button>

<s-icon-button variant="tonal"> 
  <ms-icon name="home"></ms-icon>
  <s-badge>6</s-badge>
</s-icon-button>

<s-icon-button variant="outlined">
  <ms-icon name="home"></ms-icon>
  <s-badge>99</s-badge>
</s-icon-button>
```

## Form support

This component can be used as a form element: as a checkbox, a form reset button, or a submit button.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <s-icon-button name="tag" type="checkbox" value="star">
    <ms-icon name="home"></ms-icon>
  </s-icon-button>
  <s-icon-button name="tag" type="checkbox" value="home">
    <ms-icon name="home"></ms-icon>
  </s-icon-button>
  <s-icon-button name="tag" type="checkbox" value="favorite" defaultChecked checked>
    <ms-icon name="home"></ms-icon> 
  </s-icon-button>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit" variant="filled"> 提交结果 </s-button>
</form>
```

## Properties

| Name           | Type                                                     | Default       | Sync | Description                                                                 |
| -------------- | -------------------------------------------------------- | ------------- | ---- | --------------------------------------------------------------------------- |
| variant        | `standard`, `filled`, `tonal`, `outlined`                 | `standard`    | √    | Variant                                                                     |
| size           | `extra-small`, `small`, `medium`, `large`, `extra-large` | `medium`      | √    | Size                                                                        |
| width          | `default`, `narrow`, `wide`                              | `default`     | √    | Width; `wide` = wider, `narrow` = narrower                                 |
| type           | `icon-button`, `checkbox`, `radio`, `reset`, `submit`    | `icon-button` | √    | Type; makes the component work as a checkbox, submit button, or reset button |
| disabled       | `boolean`                                                | `false`       | √    | Disabled                                                                    |
| checked        | `boolean`                                                | `false`       | √    | Checked                                                                     |
| defaultChecked | `boolean`                                                | `false`       | √    | Checked by default; the default value used when the form resets; only applies to form reset |
| name           | `string`                                                 | `''`          | √    | Name; the `key` submitted with the form                                     |
| value          | `string`                                                 | `''`          | ×    | Value; used when the form is submitted                                      |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                       |
| ------ | --------- | ------ | ---------- | --------------------------------- |
| change | Event     | ×      | ×          | Fired when the selection changes  |

## Slots

| Name      | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| Anonymous | Icon; supports text, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` by default |

## HTML Tag Attributes

| Name    | Description                      |
| ------- | -------------------------------- |
| pressed | Set when pressed                 |
| hover   | Set on mouse hover               |

## Keyboard shortcuts

Use the `Tab` key to move focus; use `Space` or `Enter` to trigger the click event.

## Dependencies

- [Ripple](./ripple.md)
