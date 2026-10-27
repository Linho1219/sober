# NavAdaptive

An adaptive navigation bar that listens to its own width and automatically switches among three modes: full display, icon-only, and collapsed.

```html preview
<s-nav-adaptive>
  <s-nav-adaptive-item selected>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M220-260q-92 0-156-64T0-480q0-92 64-156t156-64q37 0 71 13t61 37l68 62-60 54-62-56q-16-14-36-22t-42-8q-58 0-99 41t-41 99q0 58 41 99t99 41q22 0 42-8t36-22l310-280q27-24 61-37t71-13q92 0 156 64t64 156q0 92-64 156t-156 64q-37 0-71-13t-61-37l-68-62 60-54 62 56q16 14 36 22t42 8q58 0 99-41t41-99q0-58-41-99t-99-41q-22 0-42 8t-36 22L352-310q-27 24-61 37t-71 13Z"></path></svg>
    <div slot="text"> 动态 </div>
    <s-badge></s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z"></path></svg>
    <div slot="text"> 发现 </div>
    <s-badge>3</s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
    <div slot="text"> 帮助 </div>
    <s-badge>99</s-badge>
  </s-nav-adaptive-item>
  <!--自定义按钮-->
  <s-icon-button slot="action">
    <svg viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>
  </s-icon-button>
  <!--切换按钮-->
  <s-icon-button slot="toggle" width="narrow"> 
    <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
</s-nav-adaptive>
```

Text only

```html preview
<s-nav-adaptive>
  <s-nav-adaptive-item selected>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <div slot="text"> 动态 </div>
    <s-badge></s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <div slot="text"> 发现 </div>
    <s-badge>3</s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <div slot="text"> 帮助 </div>
    <s-badge>99</s-badge>
  </s-nav-adaptive-item>
  <!--切换按钮-->
  <s-icon-button slot="toggle" width="narrow"> 
    <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
</s-nav-adaptive>
```

Icons only with tooltips

```html preview
<s-nav-adaptive>
  <s-nav-adaptive-item selected>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    <s-tooltip> 首页 </s-tooltip>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M220-260q-92 0-156-64T0-480q0-92 64-156t156-64q37 0 71 13t61 37l68 62-60 54-62-56q-16-14-36-22t-42-8q-58 0-99 41t-41 99q0 58 41 99t99 41q22 0 42-8t36-22l310-280q27-24 61-37t71-13q92 0 156 64t64 156q0 92-64 156t-156 64q-37 0-71-13t-61-37l-68-62 60-54 62 56q16 14 36 22t42 8q58 0 99-41t41-99q0-58-41-99t-99-41q-22 0-42 8t-36 22L352-310q-27 24-61 37t-71 13Z"></path></svg>
    <s-tooltip> 动态 </s-tooltip>
    <s-badge></s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z"></path></svg>
    <s-tooltip> 发现 </s-tooltip>
    <s-badge>3</s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
    <s-tooltip> 帮助 </s-tooltip>
    <s-badge>99</s-badge>
  </s-nav-adaptive-item>
  <!--切换按钮-->
  <s-icon-button slot="toggle" width="narrow"> 
    <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
</s-nav-adaptive>
```

Used within the [AppBar](./app-bar.md) component.

```html preview
<s-app-bar>
  <s-icon-button slot="nav">
    <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
  </s-icon-button>
  <span slot="title"> Material Sober </span>
  <s-nav-adaptive>
    <s-nav-adaptive-item selected>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 首页 </div>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M220-260q-92 0-156-64T0-480q0-92 64-156t156-64q37 0 71 13t61 37l68 62-60 54-62-56q-16-14-36-22t-42-8q-58 0-99 41t-41 99q0 58 41 99t99 41q22 0 42-8t36-22l310-280q27-24 61-37t71-13q92 0 156 64t64 156q0 92-64 156t-156 64q-37 0-71-13t-61-37l-68-62 60-54 62 56q16 14 36 22t42 8q58 0 99-41t41-99q0-58-41-99t-99-41q-22 0-42 8t-36 22L352-310q-27 24-61 37t-71 13Z"></path></svg>
      <div slot="text"> 动态 </div>
      <s-badge></s-badge>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z"></path></svg>
      <div slot="text"> 发现 </div>
      <s-badge>3</s-badge>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
      <div slot="text"> 帮助 </div>
      <s-badge>99</s-badge>
    </s-nav-adaptive-item>
    <!--自定义按钮-->
    <s-icon-button slot="action">
      <svg viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>
    </s-icon-button>
    <!--切换按钮-->
    <s-icon-button slot="toggle" width="narrow"> 
      <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
      <s-tooltip> 更多 </s-tooltip>
    </s-icon-button>
  </s-nav-adaptive>
</s-app-bar>
```

## Selecting an item

You can set the selected item in either of the following two ways.

Set the `selected` attribute on `s-nav-adaptive-item` to select an item.  

```html preview
<s-nav-adaptive>
  <s-icon-button slot="toggle" width="narrow"> 
    <s-icon></s-icon>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
  <s-nav-adaptive-item>
    <s-icon slot="icon"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item selected> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <s-icon slot="icon"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-adaptive-item>
</s-nav-adaptive>
```

Set the `value` attribute on `s-nav-adaptive`, and then set the same `value` on `s-nav-adaptive-item` to select an item.

```html preview
<s-nav-adaptive value="a2"> <!-- [!code highlight] -->
  <s-icon-button slot="toggle" width="narrow"> 
    <s-icon></s-icon>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
  <s-nav-adaptive-item value="a1">
    <s-icon slot="icon"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a3">
    <s-icon slot="icon"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-adaptive-item>
</s-nav-adaptive>
```

## Multiple selection

Set the `multiple` attribute to enable multiple selection.  
If you set `value` on `s-nav-adaptive` to select items, separate multiple values with `,`.  
You can get the indexes of the currently selected items via `.selectedIndexes`, and the selected elements via `.selectedItems`.

```html preview
<s-nav-adaptive multiple value="a1,a2" onchange="console.log('selected', this.selectedIndexes)"> <!-- [!code highlight] -->
  <s-icon-button slot="toggle" width="narrow"> 
    <s-icon></s-icon>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
  <s-nav-adaptive-item value="a1"> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a3">
    <s-icon slot="icon"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-adaptive-item>
</s-nav-adaptive>
```

## Form support

This component supports forms. Set a unique `name` attribute on `s-nav-adaptive` as the form key, and set the `value` attribute on each `s-nav-adaptive-item` as its submitted value.  

```html preview
<form method="get" action="http://coolaf.com/tool/params">
  <s-nav-adaptive name="navigation" value="a1,a2" defaultValue="a1,a2" multiple> <!-- [!code highlight] -->
    <s-icon-button slot="toggle" width="narrow"> 
      <s-icon></s-icon>
      <s-tooltip> 更多 </s-tooltip>
    </s-icon-button>
    <s-nav-adaptive-item value="a1"> 
      <s-icon slot="icon"></s-icon>
      <div slot="text"> 首页 </div>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item value="a2"> 
      <s-icon slot="icon"></s-icon>
      <div slot="text"> 发现 </div>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item value="a3"> 
      <s-icon slot="icon"></s-icon>
      <div slot="text"> 我的 </div>
    </s-nav-adaptive-item>
  </s-nav-adaptive>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交 </s-button>
</form>
```

---

## Properties

| Name                   | Type                       | Default | Sync | Description                                                              |
| ---------------------- | -------------------------- | ------- | ---- | ------------------------------------------------------------------------ |
| name                   | string                     | ""      | ×    | The `name` attribute used when submitting the form                       |
| value                  | string                     | ""      | ×    | The selected value (separate multiple values with `,` in multiple mode)  |
| defaultValue           | string                     | ""      | ×    | The default selected value (only applied on form reset; same as `value`) |
| multiple               | boolean                    | false   | √    | Whether multiple selection is enabled                                    |
| selectable             | boolean                    | true    | √    | Whether items are selectable; when disabled, clicking will not select    |
| items `readonly`       | NavigationResponsiveItem[] | []      |      | All child items                                                          |
| selectedItems `readonly` | NavigationResponsiveItem[] | []      |      | The selected child items                                                  |
| selectedIndex `readonly`  | number                     | -1      |      | The index of the currently selected item                                  |
| selectedIndexes `readonly` | number[]                   | []      |      | The indexes of the currently selected items in multiple-selection mode    |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                    |
| ------ | --------- | ------ | ---------- | ------------------------------ |
| change | Event     | ×      | ×          | Emitted when the selection changes |

## Slots

| Name      | Description                          |
| --------- | ------------------------------------ |
| Anonymous | `s-nav-adaptive-item` child items    |
| toggle    | The toggle button slot                |
| action    | The action button slot                |

## HTML Tag Attributes

| Name      | Description                          |
| --------- | ------------------------------------ |
| icon-only | Set when only icons are displayed    |
| collapsed | Set when collapsed                   |

---

## NavAdaptiveItem

This component is only used as a child of `NavAdaptive`; on its own it is just a plain container.

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
