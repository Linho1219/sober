# card

Cards can hold any content. All slots are optional.

```html preview
<s-card>
  <s-avatar slot="header-avatar">U</s-avatar>
  <div slot="header-title">Header Title</div>
  <div slot="header-subtitle">Header SubTitle</div>
  <s-icon-button slot="header-action" width="narrow"> 
    <s-icon name="more_vert"></s-icon>
  </s-icon-button>
  <div slot="media"></div>
  <div slot="title">Title</div>
  <div slot="subtitle">subTitle</div>
  <div slot="text">Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. </div>
  <s-button slot="action" variant="outlined">
    Secondary
  </s-button>
  <s-button slot="action">
    Primary
  </s-button>
</s-card>
```

## Variants

Set `variant` to choose different variants: `elevated`, `filled`, `outlined`.

```html preview
<s-card variant="outlined">
  <s-avatar slot="header-avatar">U</s-avatar>
  <div slot="header-title">Header Title</div>
  <div slot="header-subtitle">Header SubTitle</div>
  <s-icon-button slot="header-action" width="narrow"> 
    <s-icon name="more_vert"></s-icon>
  </s-icon-button>
  <div slot="media"></div>
  <div slot="title">Title</div>
  <div slot="subtitle">subTitle</div>
  <div slot="text">Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. </div>
  <s-button slot="action" variant="outlined">
    Secondary
  </s-button>
  <s-button slot="action">
    Primary
  </s-button>
</s-card>
<s-card variant="filled">
  <s-avatar slot="header-avatar">U</s-avatar>
  <div slot="header-title">Header Title</div>
  <div slot="header-subtitle">Header SubTitle</div>
  <s-icon-button slot="header-action" width="narrow"> 
    <s-icon name="more_vert"></s-icon>
  </s-icon-button>
  <div slot="media"></div>
  <div slot="title">Title</div>
  <div slot="subtitle">subTitle</div>
  <div slot="text">Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. </div>
  <s-button slot="action" variant="outlined">
    Secondary
  </s-button>
  <s-button slot="action">
    Primary
  </s-button>
</s-card>
```

## Interactable

Set the `clickable` attribute to make the card interactive.

```html preview
<s-card clickable>
  <s-avatar slot="header-avatar">U</s-avatar>
  <div slot="header-title">Header Title</div>
  <div slot="header-subtitle">Header SubTitle</div>
  <s-icon-button slot="header-action" width="narrow"> 
    <s-icon name="more_vert"></s-icon>
  </s-icon-button>
  <div slot="media"></div>
  <div slot="title">Title</div>
  <div slot="subtitle">subTitle</div>
  <div slot="text">Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. </div>
  <s-button slot="action" variant="outlined">
    Secondary
  </s-button>
  <s-button slot="action">
    Primary
  </s-button>
</s-card>
```

---

## Properties

| Name      | Type                             | Default    | Sync | Description  |
| --------- | -------------------------------- | ---------- | ---- | ------------ |
| variant   | `elevated`, `filled`, `outlined` | `elevated` | √    | Variant      |
| clickable | `boolean`                        | `false`    | √    | Interactable |
| disabled  | `boolean`                        | `false`    | √    | Disabled     |

## Slots

| Name            | Description                 |
| --------------- | --------------------------- |
| Anonymous       | Custom content              |
| header-avatar   | Card header avatar          |
| header-title    | Card header title           |
| header-subtitle | Card header subtitle        |
| header-action   | Card header action button   |
| title           | Card title                  |
| subtitle        | Card subtitle               |
| text            | Card text                   |
| media           | Card media                  |
| action          | Card action buttons         |

## HTML Tag Attributes

| Name    | Description          |
| ------- | -------------------- |
| pressed | Set when pressed     |
| hover   | Set on pointer enter |

## Keyboard shortcuts

Use `Tab` to move focus, and `Space` or `Enter` to trigger the click event.

## Dependencies

When this component is imported, it automatically imports the following components:

- [Ripple](./ripple.md)
