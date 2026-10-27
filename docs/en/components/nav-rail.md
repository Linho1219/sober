# NavRail

A navigation rail.

```html preview block
<s-nav-rail>
  <s-nav-rail-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item selected>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="star"></s-icon>
    <s-badge>99</s-badge>
    <div slot="text"> 帮助 </div>
  </s-nav-rail-item>
  <s-divider></s-divider>
  <label>其他</label>
  <s-nav-rail-item>
    <s-icon slot="icon" name="home"></s-icon>
    <s-badge>99</s-badge>
    <div slot="text"> 帮助 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <div slot="text"> 协议 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="star"></s-icon>
    <div slot="text"> 关于 </div>
  </s-nav-rail-item>
</s-nav-rail>
```

Text only

```html preview block
<s-nav-rail>
  <s-nav-rail-item>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item selected>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
  <s-divider></s-divider>
  <label>其他</label>
  <s-nav-rail-item>
    <s-badge>99</s-badge>
    <div slot="text"> 帮助 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <div slot="text"> 协议 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <div slot="text"> 关于 </div>
  </s-nav-rail-item>
</s-nav-rail>
```

Icons only with tooltips

```html preview block
<s-nav-rail>
  <s-nav-rail-item>
    <s-icon slot="icon" name="home"></s-icon>
    <s-tooltip gravity="right"> 首页 </s-tooltip>
  </s-nav-rail-item>
  <s-nav-rail-item selected>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <s-tooltip gravity="right"> 发现 </s-tooltip>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <s-tooltip gravity="right"> 我的 </s-tooltip>
  </s-nav-rail-item>
  <s-divider></s-divider>
  <s-nav-rail-item>
    <s-icon slot="icon" name="star"></s-icon>
    <s-badge>99</s-badge>
    <s-tooltip gravity="right"> 帮助 </s-tooltip>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-tooltip gravity="right"> 协议 </s-tooltip>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-tooltip gravity="right"> 帮助 </s-tooltip>
  </s-nav-rail-item>
</s-nav-rail>
```

## Selecting an item

You can set the selected item in either of the following two ways.

Set the `selected` attribute on `s-nav-rail-item` to select an item.  

```html preview
<s-nav-rail>
  <s-nav-rail-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item selected> <!-- [!code highlight] -->
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
</s-nav-rail>
```

Set the `value` attribute on `s-nav-rail`, and then set the same `value` on `s-nav-rail-item` to select an item.

```html preview
<s-nav-rail value="a2"> <!-- [!code highlight] -->
  <s-nav-rail-item value="a1">
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item value="a3">
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
</s-nav-rail>
```

## Mode

By default, an `s-nav-rail-item` with icon + text chooses to collapse or expand horizontally based on the **window aspect ratio** (landscape or portrait).

Fixed expanded:

```html preview
<s-nav-rail mode="expanded"> <!-- [!code highlight] -->
  <s-nav-rail-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item selected>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
</s-nav-rail>
```

Fixed collapsed:

```html preview
<s-nav-rail mode="collapsed"> <!-- [!code highlight] -->
  <s-nav-rail-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item selected>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
</s-nav-rail>
```

## Sub-rail and slots

Use the `action` slot to place actions, and the `sub-rail` slot to place a sub-rail.

```html preview block
<s-nav-rail>
  <s-nav-rail-item>
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item selected>
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item>
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
  <s-divider></s-divider>
  <s-nav-rail-item selectable="false" oninput="this.querySelector('s-radio').click()">
    <s-icon slot="icon" name="done"></s-icon>
    <div slot="text"> 开启 </div>
    <s-radio name="nav-radio" slot="action" readonly></s-radio>
  </s-nav-rail-item>
    <s-nav-rail-item selectable="false" oninput="this.querySelector('s-radio').click()">
    <s-icon slot="icon" name="close"></s-icon>
    <div slot="text"> 关闭 </div>
    <s-radio name="nav-radio" slot="action" readonly></s-radio>
  </s-nav-rail-item>
  <s-divider></s-divider>
  <label>多选</label>
  <s-nav-rail-item selectable="false" oninput="this.querySelector('s-checkbox').click()">
    <s-icon slot="icon" name="light_mode"></s-icon>
    <div slot="text"> 启用 </div>
    <s-checkbox slot="action" readonly></s-checkbox>
  </s-nav-rail-item>
  <s-nav-rail-item selectable="false">
    <s-icon slot="icon" name="star"></s-icon>
    <div slot="text"> 更多 </div>
    <!--子轨道-->
    <s-nav-rail slot="sub-rail">
      <s-nav-rail-item>
        <s-icon slot="icon" name="home"></s-icon>
        <div slot="text"> 首页 </div>
      </s-nav-rail-item>
      <s-nav-rail-item selected>
        <s-icon slot="icon" name="light_mode"></s-icon>
        <s-badge></s-badge>
        <div slot="text"> 发现 </div>
      </s-nav-rail-item>
      <s-nav-rail-item>
        <s-icon slot="icon" name="favorite"></s-icon>
        <s-badge>3</s-badge>
        <div slot="text"> 我的 </div>
      </s-nav-rail-item>
    </s-nav-rail>
  </s-nav-rail-item>
</s-nav-rail>
```

## Multiple selection

Set the `multiple` attribute to enable multiple selection.  
If you set `value` on `s-nav-rail` to select items, separate multiple values with `,`.  
You can get the indexes of the currently selected items via `.selectedIndexes`, and the selected elements via `.selectedItems`.

```html preview
<s-nav-rail multiple value="a1,a2" onchange="console.log('selected', this.selectedIndexes)"> <!-- [!code highlight] -->
  <s-nav-rail-item value="a1"> <!-- [!code highlight] -->
    <s-icon slot="icon" name="home"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-rail-item>
  <s-nav-rail-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon" name="light_mode"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-rail-item>
  <s-nav-rail-item value="a3">
    <s-icon slot="icon" name="favorite"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-rail-item>
</s-nav-rail>
```

## Form support

This component supports forms. Set a unique `name` attribute on `s-nav-rail` as the form key, and set the `value` attribute on each `s-nav-rail-item` as its submitted value.  

```html preview block
<form method="get" action="http://coolaf.com/tool/params">
  <s-nav-rail name="navigation" value="a1,a2" defaultValue="a1,a2" multiple> <!-- [!code highlight] -->
    <s-nav-rail-item value="a1"> 
      <s-icon slot="icon" name="home"></s-icon>
      <div slot="text"> 首页 </div>
    </s-nav-rail-item>
    <s-nav-rail-item value="a2"> 
      <s-icon slot="icon" name="light_mode"></s-icon>
      <div slot="text"> 发现 </div>
    </s-nav-rail-item>
    <s-nav-rail-item value="a3"> 
      <s-icon slot="icon" name="favorite"></s-icon>
      <div slot="text"> 我的 </div>
    </s-nav-rail-item>
  </s-nav-rail>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交 </s-button>
</form>
```

---

## Properties

| Name                   | Type                      | Default                 | Sync | Description                                                                       |
| ---------------------- | ------------------------- | ----------------------- | ---- | --------------------------------------------------------------------------------- |
| name                   | string                    |                         | ×    | The `name` attribute used when submitting the form                                |
| value                  | string                    |                         | ×    | The selected value (separate multiple values with `,` in multiple mode)           |
| defaultValue           | string                    |                         | ×    | The default selected value (only applied on form reset; same as the `value` attribute) |
| multiple               | boolean                   | false                   | √    | Whether multiple selection is enabled                                             |
| selectable             | boolean                   | true                    | √    | Whether items are selectable; when disabled, clicking will not select              |
| mode                   | auto, collapsed, expanded | auto                    | ×    | Mode; auto=automatic, collapsed=collapsed, expanded=expanded                       |
| media                  | string                    | (orientation: portrait) | ×    | Media query. When the screen is in portrait, this controls when `mode` switches    |
| items `readonly`           | NavigationRail[]          | []                      |      | All child items                                                                    |
| selectedItems `readonly`   | NavigationRail[]          | []                      |      | The selected child items                                                           |
| selectedIndex `readonly`   | number                    | -1                      |      | The index of the currently selected item                                           |
| selectedIndexes `readonly` | number[]                  | []                      |      | The indexes of the currently selected items in multiple-selection mode             |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                    |
| ------ | --------- | ------ | ---------- | ------------------------------ |
| change | Event     | ×      | ×          | Emitted when the selection changes |

## Slots

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| Anonymous | Place NavigationRailItem child items here; other content can also be placed |
| start     | The start position                                                    |
| end       | The end position                                                      |

## HTML Tag Attributes

| Name      | Description                          |
| --------- | ------------------------------------ |
| collapsed | Set when collapsed                   |

---

## NavRailItem

This component is only used as a child of `NavRail`; on its own it is just a plain container.

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

| Name        | Description                          |
| ----------- | ------------------------------------ |
| Anonymous   | Supports s-badge, s-tooltip, and so on |
| icon        | The icon                             |
| text        | The text                             |
| action      | The action (supports checkbox, radio) |
| toggle-icon | The collapse toggle button icon      |

---

## Keyboard shortcuts

Use the `Tab` key to move focus, and use the `Space` or `Enter` key to trigger a click event.

## Dependencies

- [Ripple](./ripple.md)
