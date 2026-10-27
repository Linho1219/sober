# Tab

Used to switch between multiple tabs.

```html preview
<s-tab>
  <s-tab-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

Text only:

```html preview
<s-tab>
  <s-tab-item>
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

Icons only with tooltips:

```html preview
<s-tab>
  <s-tab-item>
    <s-icon slot="icon" name="home"></s-icon>
    <s-tooltip> 选项卡1 </s-tooltip>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <s-tooltip> 选项卡2 </s-tooltip>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <s-tooltip> 选项卡3 </s-tooltip>
  </s-tab-item>
</s-tab>
```

## Setting the selected tab

You can set the selected tab in either of the following two ways.

Set the `selected` attribute on `s-tab-item` to select it.

```html preview
<s-tab>
  <s-tab-item>
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item selected> <!-- [!code highlight] -->
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

Set the `value` attribute on `s-tab`, and set the same `value` on the corresponding `s-tab-item` to select it.

```html preview
<s-tab value="a2"> <!-- [!code highlight] -->
  <s-tab-item value="a1">
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item value="a2"> <!-- [!code highlight] -->
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item value="a3">
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

## Multiple selection

Set the `multiple` attribute to enable multiple selection.  
When using `value` on `s-tab` for selection, separate multiple values with `,`.  
You can get the array of currently selected indexes via `.selectedIndexes`, and the array of currently selected elements via `.selectedItems`.

```html preview
<s-tab multiple value="a1,a2"> <!-- [!code highlight] -->
  <s-tab-item value="a1"> <!-- [!code highlight] -->
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item value="a2"> <!-- [!code highlight] -->
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item value="a3">
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

## Orientation

Set the `orientation` attribute to `vertical` to enable vertical layout.

```html preview
<s-tab orientation="vertical"> <!-- [!code highlight] -->
  <s-tab-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

## Item orientation

By default, a `s-tab-item` with icon + text chooses horizontal or vertical layout based on the **aspect ratio of the window** (landscape or portrait).  
You can use the `itemsOrientation` attribute to force a fixed value; it defaults to `auto`.

Fixed horizontal:

```html preview
<s-tab itemsOrientation="horizontal"> <!-- [!code highlight] -->
  <s-tab-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

Fixed vertical:

```html preview
<s-tab itemsOrientation="vertical"> <!-- [!code highlight] -->
  <s-tab-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

## Mode

Set the `mode` attribute to `fixed` to enable fixed mode. In this mode, the tabs are no longer scrollable and share the width equally (this attribute has no effect when `orientation="vertical"`).

Default (scrollable):

```html preview
<s-tab style="max-width: 500px">
  <s-tab-item>
    <div slot="text"> 选项卡100 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡101 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡102 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡103 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡104 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡105 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡106 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡107 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡108 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡109 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡110 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡111 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡112 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡113 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡114 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡115 </div>
  </s-tab-item>
  <s-tab-item>
    <div slot="text"> 选项卡116 </div>
  </s-tab-item>
</s-tab>
```

Fixed (fixed):

```html preview
<s-tab mode="fixed"> <!-- [!code highlight] -->
  <s-tab-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 选项卡1 </div>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <div slot="text"> 选项卡2 </div>
    <s-badge></s-badge>
  </s-tab-item>
  <s-tab-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <div slot="text"> 选项卡3 </div>
    <s-badge>3</s-badge>
  </s-tab-item>
</s-tab>
```

## Form support

This component supports forms. You can set a unique `name` attribute on `s-tab`.

```html preview
<form method="get" action="http://coolaf.com/tool/params">
  <s-tab multiple name="tab" value="a1,a2" defaultValue="a1,a2"> <!-- [!code highlight] -->
    <s-tab-item value="a1"> <!-- [!code highlight] -->
      <div slot="text"> 选项卡1 </div>
    </s-tab-item>
    <s-tab-item value="a2"> <!-- [!code highlight] -->
      <div slot="text"> 选项卡2 </div>
      <s-badge></s-badge>
    </s-tab-item>
    <s-tab-item value="a3">
      <div slot="text"> 选项卡3 </div>
      <s-badge>3</s-badge>
    </s-tab-item>
  </s-tab>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交 </s-button>
</form>
```

---

## Properties

| Name                   | Type                       | Default                  | Sync | Description                                                                                     |
| ---------------------- | -------------------------- | ----------------------- | ---- | ----------------------------------------------------------------------------------------------- |
| name                   | string                     |                         | ×    | The name attribute used when submitting the form                                                 |
| value                  | string                     |                         | ×    | The selected value (separate multiple values with `,` when multiple selection). This takes precedence over the child element's `selected` attribute. |
| defaultValue           | string                     |                         | ×    | Default selected value (only set when the form is reset; same as the `value` attribute)        |
| multiple               | boolean                    | false                   | √    | Multiple selection                                                                              |
| selectable             | boolean                    | true                    | √    | Whether the tab can be selected; when disabled, clicking will not select it                      |
| mode                   | scrollable, fixed          | x                       | √    | Mode: scrollable = scrollable, fixed = fixed                                                    |
| orientation            | horizontal, vertical       | horizontal              | √    | Component orientation: horizontal = horizontal, vertical = vertical                            |
| itemsOrientation       | auto, horizontal, vertical | auto                    | ×    | Item orientation: auto = automatic, horizontal = horizontal, vertical = vertical                 |
| media                  | string                     | (orientation: portrait) | ×    | Media query. When the screen is in portrait, setting this attribute controls when `itemsOrientation` switches. |
| items `readonly`       | TabItem[]                  | []                      |      | All child items                                                                                 |
| selectedItems `readonly` | TabItem[]                | []                      |      | Selected child items                                                                             |
| selectedIndex `readonly` | number                    | -1                      |      | Currently selected index                                                                        |
| selectedIndexes `readonly` | number[]               | []                      |      | Array of currently selected indexes for multiple selection                                       |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                          |
| ------ | --------- | ------ | ---------- | ------------------------------------ |
| change | Event     | ×      | ×          | Fired after the selection changes   |

## Slots

| Name      | Description                                              |
| --------- | -------------------------------------------------------- |
| Anonymous | Place TabItem child elements, or other content          |

## HTML Tag Attributes

| Name          | Description                     |
| ------------- | ------------------------------- |
| item-vertical | Set when child items are vertical |

---

## TabItem

This component is only used as a child element of `Tab`. On its own, it is just a plain container.

## Item Properties

| Name       | Type    | Default | Sync | Description                                                                 |
| ---------- | ------- | ------- | ---- | --------------------------------------------------------------------------- |
| value      | string  |         | ×    | Any value, used by the `Tab` component for selection                        |
| selected   | boolean | false   | √    | Selected                                                                    |
| disabled   | boolean | false   | √    | Disabled                                                                    |
| selectable | boolean | true    | √    | Whether the item can be selected; when disabled, clicking will not select it |

## Item Events

| Name  | Parameter | Bubble | Cancelable | Description                            |
| ----- | --------- | ------ | ---------- | -------------------------------------- |
| input | Event     | ×      | ×          | Fired after the element is clicked and selected |

## Item Slots

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| Anonymous | Supports s-badge, s-tooltip, etc.           |
| icon      | Icon                                          |
| text      | Text                                          |

---

## Keyboard shortcuts

Use the `Tab` key to move focus, and the `Space` or `Enter` key to trigger the click event.

## Dependencies

- [Ripple](./ripple.md)
