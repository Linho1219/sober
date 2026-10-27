# Overview

**Sober** ([How to pronounce?](/audio/sober.mp3)) is a [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components) UI component library based on the [Material 3 Expressive](https://m3.material.io) design system, suitable for websites that need to adapt to three platforms simultaneously (desktop, tablet, and mobile).

- **Adaptive**: No configuration required; all components automatically respond to desktop, tablet, mobile, and other devices.
- **Framework-agnostic**: Compatible with all frontend frameworks or server-side rendering.
- **Zero dependencies**: Does not rely on any third-party libraries; extremely small bundle size.
- **TypeScript**: Provides complete type definition files.
- **Use alongside other libraries**: Non-intrusive design, can be used with any UI library.
- **Customizable styles**: All components support fully customized styles.

## NPM Installation

If you are using build tools such as **Webpack** or **Vite**, we recommend installing via the **npm** package, or using **pnpm** and similar package managers.

```shell
npm i sober@alpha
```

### Full import

```js
import 'sober'
```

### On-demand import example

```js
import 'sober/button'
import 'sober/checkbox'
```

> If you want on-demand imports, please check the detailed [On-demand import](/overview/on-demand-import.md) documentation.

## Usage in browser

This approach imports all bundled and minified components and creates a global variable `sober` that can be called.

```html
<script src="https://unpkg.com/sober/dist/sober.min.js"></script>
```

Alternatively, you can import using the browser **ES Module** approach, which works the same way as the **npm** usage.

```html
<script type="module">
  import 'https://unpkg.com/sober/dist/main.js'
</script>
```

<s-button v-on:click="$router.push('/components')">Installation complete, get started</s-button>

---

## Compatibility

**Sober** has been tested in Chromium, Gecko, and Webkit browsers. If you find any compatibility issues, please file an [issue](https://github.com/miralm-ltd/sober/issues/new?template=%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E6%8A%A5%E5%91%8A.md).

| Browser           | Support |
| ----------------- | ------- |
| Chromium (Chrome) | 88+     |
| Gecko (Firefox)   | 78+     |
| Webkit (Safari)   | 15.4+   |

### Community

- QQ group [315014446](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FnDFafEZBleaRTVni5WW428we-q6P038&authKey=j6gtmWnQqNLd%2FonmfMhRG99Zk9Dy1yfOrYe7Ln7rDLdx5Y0%2FgP5ERhLgSbrxU07I&noverify=0&group_code=315014446)

### License

**Sober** is released under the [MIT license](https://github.com/miralm-ltd/sober/blob/main/LICENSE).
