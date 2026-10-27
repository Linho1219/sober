# Theme

**Sober** uses CSS variables to implement theming. All CSS variables are attached to the [s-page](../components/page.md) component.

By modifying the CSS variables of the [`<s-page>`](../components/page.md) component, you can switch themes. We recommend using the following approach to implement theme switching.

---

## Theme generator

You can use the [theme generator](https://soberjs.com/theme-generator) to generate a theme. After saving your `.css` theme file, simply import that stylesheet.

```js
import './my-theme.css'
```

If you are not using a build tool, use the `<link>` tag to import the stylesheet.

```html
<link rel="stylesheet" href="./my-theme.css">
```

## Dynamic theme

If you want to generate themes dynamically at runtime, you can import `sober/theme` to create them.

```js
import { createScheme } from 'sober/theme'

const page = document.querySelector('s-page')

//1.提供一个目标颜色来生成配色
createScheme('#009688').apply(page)

//2.使用 File 从图形文件来生成配色。
const input = document.querySelector('input[type="file"]')
input.onchange = () => createScheme(input.files[0]).apply(page)

//3.提供一个 <img> 元素来生成配色（请确保图形已加载成功）。
const img = document.querySelector('img')
createScheme(img).apply(page)
```

If you are not using a build tool, use the `<script>` tag to import the theme generator.

```html
<script src="https://unpkg.com/sober/dist/theme.min.js"></script>
<script>
  const { createScheme } = sober.theme
</script>
```

`createScheme(source, customColors)` generates a color scheme.

- `source`: `string | number | File | HTMLImageElement` resource, which can be a hex color string (`#000000`), a color value, a file, or an image element.
- `customColors`: `CustomColor[]` optional, custom extended colors.
- `return`: `Promise<Scheme>` returns an instance of the Scheme class.

To learn more, please refer to the type definitions or view the source code on [github](https://github.com/soberjs/sober/blob/main/src/theme.ts).
