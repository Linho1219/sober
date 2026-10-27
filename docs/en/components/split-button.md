# Split Button

A split button opens a menu to provide the user with more options related to the action.

```html preview
<s-split-button>
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>
```

## Variants

Set `variant` to choose a different variant: `elevated`, `tonal`, `outlined`.

```html preview
<s-split-button variant="elevated">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button variant="tonal">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button variant="outlined">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>
```

## Disabled

Set `disabled` on both `action` and `trigger` to disable them.

```html preview
<s-split-button>
  <s-split-button-action disabled>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>

<s-split-button variant="elevated">
  <s-split-button-action disabled>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>

<s-split-button variant="tonal">
  <s-split-button-action disabled>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>

<s-split-button variant="outlined">
  <s-split-button-action disabled>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>
```

## Size

Set the `size` attribute to control the button size (you can also set the CSS `height` property to define the button height more precisely).

```html preview
<s-split-button size="extra-small">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="small">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="medium">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="large">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="extra-large">
  <s-split-button-action>
    <ms-icon slot="start" name="home"></ms-icon>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>
```

## Properties

| Name    | Type                                                     | Default  | Sync | Description |
| ------- | -------------------------------------------------------- | -------- | ---- | ----------- |
| variant | `filled`, `elevated`, `tonal`, `outlined`                | `filled` | √    | Variant     |
| size    | `small`, `extra-small`, `medium`, `large`, `extra-large` | `small`  | √    | Size        |

## Slots

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| Anonymous | `s-split-button-action` and `s-split-button-trigger` |

## Keyboard shortcuts

Use the `Tab` key to move focus, and the `Space` or `Enter` key to trigger the click event.

## Dependencies

When this component is imported, the following components are automatically imported:

- [Ripple](./ripple.md)
