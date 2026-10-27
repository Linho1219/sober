# NavBar

A navigation bar with a fixed number of navigation items.

```html preview block
<s-nav-bar>
  <s-nav-bar-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-bar-item>
</s-nav-bar>
```

Text only

```html preview block
<s-nav-bar>
  <s-nav-bar-item>
    <div slot="text"> 首页 </div>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <div slot="text"> 发现 </div>
    <s-badge></s-badge>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <div slot="text"> 我的 </div>
    <s-badge>3</s-badge>
  </s-nav-bar-item>
</s-nav-bar>
```

Icons only with tooltips

```html preview block
<s-nav-bar>
  <s-nav-bar-item>
    <s-icon slot="icon" name="home"></s-icon>
    <s-tooltip> 首页 </s-tooltip>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <s-tooltip> 发现 </s-tooltip>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <s-tooltip> 我的 </s-tooltip>
  </s-nav-bar-item>
</s-nav-bar>
```

## Selecting an item

You can set the selected item in either of the following two ways.

Set the `selected` attribute on `s-nav-bar-item` to select an item.  

```html preview block
<s-nav-bar>
  <s-nav-bar-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-bar-item>
  <s-nav-bar-item selected> <!-- [!code highlight] -->
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-bar-item>
</s-nav-bar>
```

Set the `value` attribute on `s-nav-bar`, and then set the same `value` on `s-nav-bar-item` to select an item.

```html preview block
<s-nav-bar value="a2"> <!-- [!code highlight] -->
  <s-nav-bar-item value="a1">
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-bar-item>
  <s-nav-bar-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-bar-item>
  <s-nav-bar-item value="a3">
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-bar-item>
</s-nav-bar>
```

## Item orientation

By default, an `s-nav-bar-item` with icon + text chooses between a horizontal and vertical layout based on the **window aspect ratio** (landscape or portrait).  
You can fix this with the `itemsOrientation` attribute.

Fixed horizontal:

```html preview block
<s-nav-bar itemsOrientation="horizontal"> <!-- [!code highlight] -->
  <s-nav-bar-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-bar-item>
  <s-nav-bar-item selected>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-bar-item>
</s-nav-bar>
```

Fixed vertical:

```html preview block
<s-nav-bar itemsOrientation="vertical"> <!-- [!code highlight] -->
  <s-nav-bar-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-bar-item>
  <s-nav-bar-item selected>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-bar-item>
  <s-nav-bar-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-bar-item>
</s-nav-bar>
```

## Multiple selection

Set the `multiple` attribute to enable multiple selection.  
If you set `value` on `s-nav-bar` to select items, separate multiple values with `,`.  
You can get the indexes of the currently selected items via `.selectedIndexes`, and the selected elements via `.selectedItems`.

```html preview block
<s-nav-bar multiple value="a1,a2" onchange="console.log('selected', this.selectedIndexes)"> <!-- [!code highlight] -->
  <s-nav-bar-item value="a1"> <!-- [!code highlight] -->
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-bar-item>
  <s-nav-bar-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-bar-item>
  <s-nav-bar-item value="a3">
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-bar-item>
</s-nav-bar>
```

## Form support

This component supports forms. Set a unique `name` attribute on `s-nav-bar` as the form key, and set the `value` attribute on each `s-nav-bar-item` as its submitted value.  

```html preview block
<form method="get" action="http://coolaf.com/tool/params">
  <s-nav-bar name="navigation" value="a1,a2" defaultValue="a1,a2" multiple> <!-- [!code highlight] -->
    <s-nav-bar-item value="a1"> 
      <s-icon slot="icon" name="home"></s-icon>
      <div slot="text"> 首页 </div>
    </s-nav-bar-item>
    <s-nav-bar-item value="a2"> 
      <s-icon slot="icon" name="light_mode"></s-icon>
      <div slot="text"> 发现 </div>
    </s-nav-bar-item>
    <s-nav-bar-item value="a3"> 
      <s-icon slot="icon" name="favorite"></s-icon>
      <div slot="text"> 我的 </div>
    </s-nav-bar-item>
  </s-nav-bar>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交 </s-button>
</form>
```

---

## Properties

| Name                   | Type                       | Default                 | Sync | Description                                                                              |
| ---------------------- | -------------------------- | ----------------------- | ---- | ---------------------------------------------------------------------------------------- |
| name                   | string                     |                         | ×    | The `name` attribute used when submitting the form                                        |
| value                  | string                     |                         | ×    | The selected value (separate multiple values with `,` in multiple mode)                  |
| defaultValue           | string                     |                         | ×    | The default selected value (only applied on form reset; same as the `value` attribute)   |
| multiple               | boolean                    | false                   | √    | Whether multiple selection is enabled                                                    |
| selectable             | boolean                    | true                    | √    | Whether items are selectable; when disabled, clicking will not select                    |
| itemsOrientation       | auto, horizontal, vertical | auto                    | ×    | Item orientation; auto=automatic, horizontal=horizontal, vertical=vertical              |
| media                  | string                     | (orientation: portrait) | ×    | Media query. When the screen is in portrait, this controls when `itemsOrientation` switches |
| items `readonly`           | NavigationBarItem[]        | []                      |      | All child items                                                                          |
| selectedItems `readonly`   | NavigationBarItem[]        | []                      |      | The selected child items                                                                  |
| selectedIndex `readonly`   | number                     | -1                      |      | The index of the currently selected item                                                  |
| selectedIndexes `readonly` | number[]                   | []                      |      | The indexes of the currently selected items in multiple-selection mode                    |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                    |
| ------ | --------- | ------ | ---------- | ------------------------------ |
| change | Event     | ×      | ×          | Emitted when the selection changes |

## Slots

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| Anonymous | Place NavigationBarItem child items here; other content can also be placed |
| start     | The start position                                                    |
| end       | The end position                                                      |

## HTML Tag Attributes

| Name          | Description                          |
| ------------- | ------------------------------------ |
| item-vertical | Set when items are vertical          |

---

## NavBarItem

This component is only used as a child of `NavBar`; on its own it is just a plain container.

## Item Properties

| Name       | Type    | Default | Sync | Description                                                        |
| ---------- | ------- | ------- | ---- | ------------------------------------------------------------------ |
| value      | string  |         | ×    | The value submitted with the form or used for selection            |
| selected   | boolean | false   | √    | Whether the item is selected                                       |
| selectable | boolean | true    | √    | Whether the item is selectable; when disabled, clicking will not select |

## Item Events

| Name  | Parameter | Bubble | Cancelable | Description                            |
| ----- | --------- | ------ | ---------- | -------------------------------------- |
| input | Event     | ×      | ×          | Emitted after the item is clicked and selected |

## Item Slots

| Name      | Description                          |
| --------- | ------------------------------------ |
| Anonymous | Supports s-badge, s-tooltip, and so on |
| icon      | The icon                             |
| text      | The text                             |

---

## Keyboard shortcuts

Use the `Tab` key to move focus, and use the `Space` or `Enter` key to trigger a click event.

## Dependencies

- [Ripple](./ripple.md)
