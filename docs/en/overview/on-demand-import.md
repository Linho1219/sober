# On-demand import

As **Sober** evolves, the component library may grow larger. If you are highly sensitive to bundle size, we strongly recommend defining on-demand imports for **Sober**.

Here is an example: create a new **sober.js** file and edit the following code to import components as needed.

```js
//sober.js
export * from 'sober/button'
export * from 'sober/checkbox'
```

Then import this file in your entry file to register the components.

```js
//mian.js
import './sober.js'
```

The complete component list is as follows:

```js
export * from 'sober/alert'
export * from 'sober/app-bar'
export * from 'sober/avatar'
export * from 'sober/badge'
export * from 'sober/base-slider'
export * from 'sober/button'
export * from 'sober/button-group'
export * from 'sober/card'
export * from 'sober/checkbox'
export * from 'sober/chip'
export * from 'sober/spinner'
export * from 'sober/dialog'
export * from 'sober/divider'
export * from 'sober/docked-date-picker'
export * from 'sober/docked-time-picker'
export * from 'sober/drawer'
export * from 'sober/empty'
export * from 'sober/field-set'
export * from 'sober/fab'
export * from 'sober/icon'
export * from 'sober/icon-button'
export * from 'sober/loading'
export * from 'sober/nav-bar'
export * from 'sober/nav-rail'
export * from 'sober/nav-adaptive'
export * from 'sober/page'
export * from 'sober/page-view'
export * from 'sober/picker'
export * from 'sober/progress'
export * from 'sober/radio'
export * from 'sober/rating'
export * from 'sober/ripple'
export * from 'sober/search'
export * from 'sober/skeleton'
export * from 'sober/slider'
export * from 'sober/split-button'
export * from 'sober/switch'
export * from 'sober/tab'
export * from 'sober/text-field'
export * from 'sober/tooltip'
```

---

## On-demand import in the browser

If you are not using a build tool and are importing directly in the browser, on-demand imports will issue multiple requests and slow down the initial load, which is not recommended.
If this is not a concern for you, you can still use the following approach to import each component on demand:

```html
<script type="module">
  import 'https://unpkg.com/sober/dist/appbar.js'
</script>
```
