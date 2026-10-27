# Dialog

A dialog.

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

## Properties

| Name     | Type                | Default | Sync | Description |
| -------- | ------------------- | ------- | ---- | ----------- |
| disabled | boolean             | false   | √    | Disabled    |
| opened   | boolean             | false   | √    | Opened      |
| attached | boolean             | false   | √    | Attached    |
| gravity  | center, top, bottom | center  | √    | Alignment   |

## Events

| Name   | Parameter                       | Bubble | Cancelable | Description                                              |
| ------ | ------------------------------- | ------ | ---------- | -------------------------------------------------------- |
| open   | Event                           | ×      | √          | Fired when the dialog is opened                          |
| close  | CustomEvent<{ source: 0\|1\|2 }> | ×      | √          | Fired when the dialog is closed; source indicates how it was closed |
| opened | Event                           | ×      | ×          | Fired when opening completes                             |
| closed | Event                           | ×      | ×          | Fired when closing completes                             |

## Slots

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| Anonymous | Arbitrary layout                             |
| title     | Title                                        |
| text      | Text content; spacing is styled automatically |
| action    | Action buttons                               |

---

## HTML Attributes

| Name          | Description                                      |
| ------------- | ------------------------------------------------ |
| dialog-opened | Set when opened (set on the container element)   |

---

## Keyboard shortcuts

Press `Escape` to close the dialog.
