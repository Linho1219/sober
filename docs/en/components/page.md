# page

This component is used to create a themed page. It is similar to `<div>`, and in most cases we recommend using it as the root element.

```html preview block
<s-page style="padding: 16px">
  <s-button> Button </s-button>
  <s-button variant="outlined"> Button </s-button>
  <s-checkbox></s-checkbox>
</s-page>
```

## Theme mode

You can use the `theme` attribute to set the theme mode (dark or light), which defaults to `auto` and follows the system.  

Fixed light:

```html preview block
<s-page theme="light" style="padding: 16px">
  <s-button> Button </s-button>
  <s-button variant="outlined"> Button </s-button>
  <s-checkbox></s-checkbox>
</s-page>
```

Fixed dark:

```html preview block
<s-page theme="dark" style="padding: 16px">
  <s-button> Button </s-button>
  <s-button variant="outlined"> Button </s-button>
  <s-checkbox></s-checkbox>
</s-page>
```

## Switching the theme dynamically

Call the `.toggle(theme, anchor)` method to switch the theme mode dynamically. Compared with directly setting the `theme` attribute, this adds a full-screen transition animation.

```html preview block
<s-page style="padding: 16px" id="test-page">
  <s-radio name="toggle" onchange="document.querySelector('#test-page').toggle('auto', this)" checked> Auto </s-radio>
  <s-radio name="toggle" onchange="document.querySelector('#test-page').toggle('light', this)"> Light </s-radio>
  <s-radio name="toggle" onchange="document.querySelector('#test-page').toggle('dark', this)"> Dark </s-radio>
</s-page>
```

## Theme generation

If you want to customize the theme, please refer to the [theme](../get-started/theme.md) documentation.

---

## Properties

| Name  | Type              | Default                      | Sync | Description                                                                              |
| ----- | ----------------- | ---------------------------- | ---- | ---------------------------------------------------------------------------------------- |
| theme | auto, light, dark | auto                         | ×    | Theme mode                                                                               |
| media | string            | (prefers-color-scheme: dark) | ×    | Media query. When the system theme is dark, this controls when `theme` switches          |

## Slots

| Name      | Description        |
| --------- | ------------------ |
| Anonymous | Any content        |

## Methods

`.toggleTheme(theme, anchor): Promise<Animation | undefined>` switches the theme mode. If a transition animation exists, the animation object is returned.

- `theme`: `light | dark | auto` the target mode.
- `anchor`: `HTMLElement` optional, the anchor element; the animation is centered on this anchor.

## HTML Tag Attributes

| Name | Description              |
| ---- | ------------------------ |
| dark | Set in dark mode         |
