# 通用属性方法

所有组件均集成自 `HTMLElement`，因此它们都拥有 `HTMLElement` 的所有属性和方法，除此之外，组件还拥有以下属性和方法；

- `static define<T extends string>(name: T): T`

注册组件，参数为组件名，返回组件名。  
> 请注意，请勿直接调用该方法重新定义组件，浏览器规范不允许重复定义相同组件，你可以通过继承来定义新的别名组件。

```js
import { Button } from 'sober'

class MyButton extends Button {}

MyButton.define('my-button')
```

- `static addStyle(style: string): number`

设置组件样式，可调用该方法添加组件样式，以下例子为所有 [Button](../components/button.md) 组件添加一个黑色默认样式。

```js
import { Button } from 'sober'

const blackIndex = Button.addStyle(`
  :host(:not([variant])) {
    background-color: #000;
    color: #fff;
  }
`)
```

- `static removeStyle(index?: number): void`

移除组件样式，可调用该方法移除组件样式，如果 `index` 为空，则移除所有样式。

- `static connectedNodes: HTMLElement[]`

组件的连接节点，该属性为只读属性，返回一个包含所有连接到页面上节点的数组。
