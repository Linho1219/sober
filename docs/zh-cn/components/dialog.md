# Dialog

对话框。

```html preview
<s-button>
  对话框
  <s-dialog>
    <div slot="title">标题</div>
    <div slot="text">
      问人生、头白京国，算来何事消得。不如罨画清溪上，蓑笠扁舟一只。人不识，且笑煮、鲈鱼趁著莼丝碧。无端酸鼻，向岐路消魂，征轮驿骑，断雁西风急。 英雄辈，事业东西南北。临风因甚泣。酬知有愿频挥手，零雨凄其此日。休太息，须信道、诸公衮衮皆虚掷。年来踪迹。有多少雄心，几翻恶梦，泪点霜华织。
      <a href="/">link</a>
    </div>
    <s-button slot="action" variant="text">取消</s-button>
    <s-button slot="action" variant="text">确定</s-button>
  </s-dialog>
 </s-button>
```

---

## 属性

| 名称     | 类型                | 默认值 | 同步 | 说明   |
| -------- | ------------------- | ------ | ---- | ------ |
| disabled | boolean             | false  | √    | 禁用的 |
| opened   | boolean             | false  | √    | 打开的 |
| attached | boolean             | false  | √    | 依附的 |
| gravity  | center, top, bottom | center | √    | 位置   |

## 事件

| 名称   | 参数                             | 冒泡 | 可取消 | 说明                          |
| ------ | -------------------------------- | ---- | ------ | ----------------------------- |
| open   | Event                            | ×    | √      | 打开时触发                    |
| close  | CustomEvent<{ source: 0\|1\|2 }> | ×    | √      | 关闭时触发，source=关闭的方式 |
| opened | Event                            | ×    | ×      | 打开完成时触发                |
| closed | Event                            | ×    | ×      | 关闭完成时触发                |

## 插槽

| 名称   | 说明                         |
| ------ | ---------------------------- |
| 匿名   | 任意布局                     |
| title  | 标题                         |
| text   | 文本内容，会自动设置样式间距 |
| action | 操作按钮                     |

---

## HTML 属性

| 名称          | 说明                         |
| ------------- | ---------------------------- |
| dialog-opened | 在打开时设置（在容器上设置） |

---

## 键盘快捷键

使用 `Escape` 关闭对话框。
