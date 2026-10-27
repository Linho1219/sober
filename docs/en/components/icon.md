# Icon

The component itself has no built-in icons. Using it directly renders an empty `<s-icon></s-icon>`; its purpose is to host an `svg` icon or act as a container for font icons.

```html preview
<s-icon></s-icon>
<s-icon>
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-icon>
<s-icon src="/images/search.svg"></s-icon>
```

## Icon library

If you prefer not to use raw `svg`, we recommend the [**ms-icon**](/resources/ms-icon) icon library.

```vue preview
<script>
import 'ms-icon/home'
import 'ms-icon/home-fill'
import 'ms-icon/add'
</script>
<template>
  <ms-icon name="home" />
  <ms-icon name="home-fill" />
  <s-icon-button variant="outlined">
    <ms-icon name="add"></ms-icon>
  </s-icon-button>
</template>
```

## Custom styles

Set the color and size.

```html preview
<s-icon name="home" style="color: #336699; width: 48px;">
  <svg viewBox="0 -960 960 960">
    <path d="M480-440Zm346-240q0-78-54-132t-132-54v-54q100 0 170 70t70 170h-54Zm-106 0q0-33-23.5-56.5T640-760v-54q55 0 93.5 39t40.5 95h-54ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240v80H395l-73 80H160v480h640v-440h80v440q0 33-23.5 56.5T800-120H160Zm320-140q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"></path>
  </svg>
</s-icon>
```

## Properties

| Name | Type     | Default | Sync | Description                                              |
| ---- | -------- | ------- | ---- | -------------------------------------------------------- |
| src  | `string` | `''`    | ×    | Icon path; note that SVG cannot be loaded cross-origin  |

## Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| Anonymous | `svg` icon or font icon text     |
