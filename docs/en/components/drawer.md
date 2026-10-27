# Drawer

A drawer. This component provides left and right drawers along with a central main view.

```html preview block
<s-drawer style="height: 500px" endOpen="false">
  <s-nav-rail slot="start" mode="expanded">
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 首页 </div>
    </s-nav-rail-item>
    <s-nav-rail-item selected>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge></s-badge>
      <div slot="text"> 发现 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>3</s-badge>
      <div slot="text"> 我的 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>99</s-badge>
      <div slot="text"> 帮助 </div>
    </s-nav-rail-item>
    <s-divider></s-divider>
    <label>其他</label>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>99</s-badge>
      <div slot="text"> 帮助 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 协议 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 关于 </div>
    </s-nav-rail-item>
  </s-nav-rail>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"></div>
</s-drawer>
```

## Modes

Set the `mode` property to fix the drawer display mode. It defaults to `auto`, which automatically switches between the two modes below.

Standard:

```html preview block
<s-drawer style="height: 500px" mode="standard" endOpen="false">
  <div slot="start"> </div>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"> </div>
</s-drawer>
```

Modal:

```html preview block
<s-drawer style="height: 500px" mode="modal" endModalOpen>
  <div slot="start"> </div>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"> </div>
</s-drawer>
```

## Media query

By default (`mode=auto`), the component automatically switches between `standard` and `modal`. You can customize this behavior by setting your own `media` value.

```html preview block
<s-drawer style="height: 500px" endOpen="false" media="(max-width: 1024px)">
  <s-nav-rail slot="start" style="width: auto">
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-tooltip placement="right"> 首页 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item selected>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path></svg>
      <s-badge></s-badge>
      <s-tooltip placement="right"> 发现 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"></path></svg>
      <s-badge>3</s-badge>
      <s-tooltip placement="right"> 我的 </s-tooltip>
    </s-nav-rail-item>
    <s-divider></s-divider>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>99</s-badge>
      <s-tooltip placement="right"> 帮助 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-tooltip placement="right"> 协议 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-tooltip placement="right"> 帮助 </s-tooltip>
    </s-nav-rail-item>
  </s-nav-rail>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"> </div>
</s-drawer>
```

---

## Properties

| Name           | Type                        | Default                  | Sync | Description                                                                      |
| -------------- | --------------------------- | ------------------------ | ---- | -------------------------------------------------------------------------------- |
| mode           | `auto`, `standard`, `modal` | `auto`                   | ×    | Mode. auto = automatic, standard = standard, modal = modal                       |
| startOpen      | `boolean`                   | `true`                   | √    | Whether the standard start drawer is expanded                                    |
| endOpen        | `boolean`                   | `true`                   | √    | Whether the standard end drawer is expanded                                      |
| startModalOpen | `boolean`                   | `false`                  | √    | Whether the modal start drawer is expanded                                       |
| endModalOpen   | `boolean`                   | `false`                  | √    | Whether the modal end drawer is expanded                                         |
| media          | `string`                    | `(orientation: portrait)` | ×  | Media query. When the screen is in portrait orientation, set this property to control when `mode` switches |

## Slots

| Name      | Description |
| --------- | ----------- |
| Anonymous | Main view   |
| start     | Left drawer |
| end       | Right drawer |

## HTML Tag Attributes

| Name  | Description              |
| ----- | ------------------------ |
| modal | Set when in modal mode   |

## Methods

`.toggle(slot, mode): void` — Toggles the drawer. Use this method to toggle the drawer between expanded and closed states.

- `slot`: The drawer to toggle, `'start' | 'end'`.
- `mode`: Optional. `'auto' | 'standard' | 'modal'`. Defaults to `auto`.

`.getMode(): 'standard' | 'modal'` — Returns the current mode.
