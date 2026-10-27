# tooltip

A tooltip shows a message on hover with a mouse, or on long press on touch devices.

```html preview
<s-button>
  text
  <s-tooltip> 测试文本 </s-tooltip>
</s-button>
```

## Placement

By default, the component chooses a suitable position to display, so you don't need to worry about where it appears.  
You can still set the default position via the `placement` attribute. It only affects the position when there is enough space; if space is insufficient, the position is adjusted automatically.  
Possible values: `auto`, `top`, `bottom`, `left`, `right`. When set to `auto`, it uses `top` on touch devices (to avoid being covered by a finger), and `bottom` otherwise.

```html preview
<s-button>
  top
  <s-tooltip placement="top"> <!-- [!code highlight] -->
    测试文本 测试文本<br>测试文本 测试文本<br>测试文本 测试文本
  </s-tooltip>
</s-button>
<s-button>
  bottom
  <s-tooltip placement="bottom"> <!-- [!code highlight] -->
    测试文本 测试文本<br>测试文本 测试文本<br>测试文本 测试文本
  </s-tooltip>
</s-button>
<s-button>
  left
  <s-tooltip placement="left"> <!-- [!code highlight] -->
    测试文本 测试文本<br>测试文本 测试文本<br>测试文本 测试文本
  </s-tooltip>
</s-button>
<s-button>
  right
  <s-tooltip placement="right"> <!-- [!code highlight] -->
    测试文本 测试文本<br>测试文本 测试文本<br>测试文本 测试文本
  </s-tooltip>
</s-button>
```

Custom styles

```html preview
<s-button>
  text
  <s-tooltip style="background: #184591; color: #fff; border: solid 2px #269c17; padding: 8px 12px; border-radius: 20px"> 测试文本 </s-tooltip>
</s-button>
```

## Using inside other components

If you use the tooltip inside another component's slot, set the `parentDepth` attribute to specify the ancestor depth at which the tooltip is triggered.

```html preview
<s-alert collapsed>
  <div slot="title"> 遣悲怀三首·其二 </div>
  昔日戏言身后意，今朝都到眼前来
  <!--设置插槽和层级-->
  <svg viewBox="0 -960 960 960" slot="toggle-icon"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"></path></svg>
  <s-tooltip slot="toggle-icon" parentDepth="1"> <!-- [!code highlight] -->
    提示信息
  </s-tooltip>
</s-alert>
```

---

## Properties

| Name        | Type                            | Default | Sync | Description                                                                                                          |
| ----------- | ------------------------------- | ------- | ---- | -------------------------------------------------------------------------------------------------------------------- |
| disabled    | boolean                         | false   | √    | Disabled. When set, the tooltip is no longer shown automatically.                                                   |
| parentDepth | number                          | -1      | ×    | Parent depth. This sets **which level of ancestor** triggers the tooltip. If the component is inserted as a slot into another component, it looks for ancestors within the slot. |
| placement   | auto, top, bottom,  left, right | auto    | √    | Display position. This only affects the default position; if it cannot be fully displayed on screen, the direction is adjusted automatically. |

---

## Events

| Name              | Parameter | Bubble | Cancelable | Description                                                                                                            |
| ----------------- | --------- | ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| open              | Event     | ×      | ×          | Fired when opened                                                                                                      |
| close             | Event     | ×      | ×          | Fired when closed                                                                                                      |
| opened            | Event     | ×      | ×          | Fired when the opening animation finishes                                                                              |
| closed            | Event     | ×      | ×          | Fired when the closing animation finishes                                                                             |
| s-top-layer-open  | Event     | √      | ×          | Fired when opened. If you want your custom element to stay on the top layer, you can rely on this event bubbling to set it. |
| s-top-layer-close | Event     | √      | ×          | Fired when closed. If you want your custom element to stay on the top layer, you can rely on this event bubbling to set it. |

---

## CSS Variables

| Name                  | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| --s-tooltip-disabled  | This CSS variable mirrors the `disabled` attribute, but takes higher precedence.  |
| --s-tooltip-placement | This CSS variable mirrors the `placement` attribute, but takes higher precedence. |
