# AppBar

An application bar, commonly used for top navigation.

```html preview block
<s-app-bar>
  <span slot="title">Material 3</span>
</s-app-bar>
```

Using more slots

```html preview block
<s-app-bar>
  <s-icon-button slot="nav">
    <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
  </s-icon-button>
  <span slot="title">Material 3</span>
</s-app-bar>
```

```html preview block
<s-app-bar>
  <s-icon-button slot="nav">
    <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
  </s-icon-button>
  <svg viewBox="0 0 1024 1024" slot="logo">
    <path d="M913.4 757.4c-105-16-113-31.4-113-31.4 21.6-129.8-45.4-294.2-154.8-383.2-145.6-118.4-367-32.4-539.4-212.4-40.2-42-16.8 471 199 665.4 157.8 142 343.6 98.4 394.6 75.2 46.2-21.2 78.6-59.8 78.6-59.8 84.2 26 125.8 24.4 125.8 24.4C933.8 839.2 948.8 762.8 913.4 757.4zM721.2 766.2c-276.4-81.8-484.2-369-484.2-369s182.4 215.4 504 320.4C741.4 733.8 731.8 757 721.2 766.2z"></path>
  </svg>
  <span slot="title">Material 3</span>
</s-app-bar>
```

```html preview block
<s-app-bar>
  <s-icon-button slot="nav">
    <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
  </s-icon-button>
  <svg viewBox="0 0 1024 1024" slot="logo"><path d="M913.4 757.4c-105-16-113-31.4-113-31.4 21.6-129.8-45.4-294.2-154.8-383.2-145.6-118.4-367-32.4-539.4-212.4-40.2-42-16.8 471 199 665.4 157.8 142 343.6 98.4 394.6 75.2 46.2-21.2 78.6-59.8 78.6-59.8 84.2 26 125.8 24.4 125.8 24.4C933.8 839.2 948.8 762.8 913.4 757.4zM721.2 766.2c-276.4-81.8-484.2-369-484.2-369s182.4 215.4 504 320.4C741.4 733.8 731.8 757 721.2 766.2z"></path></svg>
  <span slot="title">Material 3</span>
  <span slot="subtitle">Google M3 Expressive</span>
  <s-icon-button>
    <s-icon></s-icon>
    <s-tooltip>搜索</s-tooltip>
  </s-icon-button>
  <s-icon-button>
    <s-icon></s-icon>
    <s-tooltip>收藏</s-tooltip>
  </s-icon-button>
  <s-icon-button width="narrow">
    <s-icon></s-icon>
    <s-tooltip>更多</s-tooltip>
  </s-icon-button>
</s-app-bar>
```

## Size

Set the `size` attribute to define the size. It defaults to `auto`, which picks `small` or `medium` based on the **window aspect ratio**. You can also set this attribute to a fixed size.

Fixed small:

```html preview block
<s-app-bar size="small">
  <s-icon-button slot="nav">
    <s-icon></s-icon>
  </s-icon-button>
  <span slot="title">Material 3</span>
  <s-icon-button>
    <s-icon></s-icon>
    <s-tooltip>搜索</s-tooltip>
  </s-icon-button>
</s-app-bar>
```

Fixed medium:

```html preview block
<s-app-bar size="medium">
  <s-icon-button slot="nav">
    <s-icon></s-icon>
  </s-icon-button>
  <span slot="title">Material 3</span>
  <s-icon-button>
    <s-icon></s-icon>
    <s-tooltip>搜索</s-tooltip>
  </s-icon-button>
</s-app-bar>
```

---

## Properties

| Name  | Type                      | Default                   | Sync | Description                                                                       |
| ----- | ------------------------- | ------------------------- | ---- | --------------------------------------------------------------------------------- |
| size  | `auto`, `medium`, `small` | `auto`                    | ×    | Size. Defaults to `auto`, which selects `small` or `medium` based on the `media` attribute |
| media | `string`                  | `(orientation: portrait)` | ×    | Media query. When the screen is in portrait orientation, this attribute controls when `size` switches |

## Slots

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| Anonymous| Custom content                               |
| nav      | Navigation button                            |
| logo     | Logo icon. Supports svg, s-icon.             |
| title    | Title                                        |
| subtitle | Subtitle                                     |

## HTML Tag Attributes

| Name  | Description                          |
| ----- | ------------------------------------ |
| small | Set when the size is small           |

## Methods

`.getSize(): small | medium` gets the current size.
