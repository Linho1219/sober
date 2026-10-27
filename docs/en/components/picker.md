# Picker

A picker box used for single or multiple selection over large datasets.

```html preview
<s-picker label="地区">
  <s-picker-item text="北京市">北京</s-picker-item>
  <s-picker-item text="上海市">上海</s-picker-item>
  <s-picker-item text="广州市">广州</s-picker-item>
  <s-picker-item text="深圳市">深圳</s-picker-item>
  <s-picker-item text="成都市">成都</s-picker-item>
  <s-picker-item text="重庆市">重庆</s-picker-item>
  <s-picker-item text="杭州市">杭州</s-picker-item>
  <s-picker-item text="南京市">南京</s-picker-item>
</s-picker>
```

## Variants

Set `variant` to configure different variants: `outlined`, `text`.

```html preview
<s-picker label="地区" variant="text">
  <s-picker-item text="北京市">北京</s-picker-item>
  <s-picker-item text="上海市">上海</s-picker-item>
  <s-picker-item text="广州市">广州</s-picker-item>
  <s-picker-item text="深圳市">深圳</s-picker-item>
  <s-picker-item text="成都市">成都</s-picker-item>
  <s-picker-item text="重庆市">重庆</s-picker-item>
  <s-picker-item text="杭州市">杭州</s-picker-item>
  <s-picker-item text="南京市">南京</s-picker-item>
</s-picker>
```

## Using slots

You can use the `start` and `end` slots to add arbitrary content (note that the `end` slot overrides the default icon), and you can also use the `start` and `end` slots on `s-picker-item` to add arbitrary content.

```html preview
<s-picker label="地区">
  <svg viewBox="0 -960 960 960" slot="start"><path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm376.5-291.5Q580-543 580-560t-11.5-28.5Q557-600 540-600t-28.5 11.5Q500-577 500-560t11.5 28.5Q523-520 540-520t28.5-11.5Zm80-80Q660-623 660-640t-11.5-28.5Q637-680 620-680t-28.5 11.5Q580-657 580-640t11.5 28.5Q603-600 620-600t28.5-11.5Zm0 160Q660-463 660-480t-11.5-28.5Q637-520 620-520t-28.5 11.5Q580-497 580-480t11.5 28.5Q603-440 620-440t28.5-11.5Zm80-80Q740-543 740-560t-11.5-28.5Q717-600 700-600t-28.5 11.5Q660-577 660-560t11.5 28.5Q683-520 700-520t28.5-11.5Zm-367 63Q370-477 370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460q13 0 21.5-8.5ZM480-480Z"></path></svg>
  <svg viewBox="0 -960 960 960" slot="end"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path></svg>
  <s-picker-item text="北京市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    北京
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
  <s-picker-item text="上海市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    上海
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
  <s-picker-item text="广州市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    广州
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
  <s-picker-item text="深圳市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    深圳
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
  <s-picker-item text="成都市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    成都
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
  <s-picker-item text="重庆市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    重庆
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
  <s-picker-item text="杭州市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    杭州
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
  <s-picker-item text="南京市">
    <svg viewBox="0 -960 960 960" slot="start"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
    南京
    <svg viewBox="0 -960 960 960" slot="end"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"></path></svg>
  </s-picker-item>
</s-picker>
```

## Multiple selection

Set the `multiple` attribute to enable multiple selection.

```html preview
<s-picker label="地区" multiple>
  <s-picker-item text="北京">北京</s-picker-item>
  <s-picker-item text="上海">上海</s-picker-item>
  <s-picker-item text="广州">广州</s-picker-item>
  <s-picker-item text="深圳">深圳</s-picker-item>
  <s-picker-item text="成都">成都</s-picker-item>
  <s-picker-item text="重庆">重庆</s-picker-item>
  <s-picker-item text="杭州">杭州</s-picker-item>
  <s-picker-item text="南京">南京</s-picker-item>
  <s-picker-item text="武汉">武汉</s-picker-item>
  <s-picker-item text="西安">西安</s-picker-item>
  <s-picker-item text="贵阳">贵阳</s-picker-item>
  <s-picker-item text="昆明">昆明</s-picker-item>
  <s-picker-item text="南宁">南宁</s-picker-item>
  <s-picker-item text="长沙">长沙</s-picker-item>
  <s-picker-item text="郑州">郑州</s-picker-item>
  <s-picker-item text="济南">济南</s-picker-item>
  <s-picker-item text="青岛">青岛</s-picker-item>
  <s-picker-item text="大连">大连</s-picker-item>
  <s-picker-item text="厦门">厦门</s-picker-item>
  <s-picker-item text="福州">福州</s-picker-item>
  <s-picker-item text="合肥">合肥</s-picker-item>
  <s-picker-item text="南昌">南昌</s-picker-item>
  <s-picker-item text="太原">太原</s-picker-item>
  <s-picker-item text="沈阳">沈阳</s-picker-item>
  <s-picker-item text="长春">长春</s-picker-item>
  <s-picker-item text="兰州">兰州</s-picker-item>
  <s-picker-item text="海口">海口</s-picker-item>
  <s-picker-item text="苏州">苏州</s-picker-item>
  <s-picker-item text="无锡">无锡</s-picker-item>
  <s-picker-item text="宁波">宁波</s-picker-item>
</s-picker>
```

## Searchable

Set `searchable` to enable search; when searching, matching child items are prioritized in sorting.

```html preview
<s-picker label="地区" multiple searchable searchPlaceholder="搜索...">
  <s-picker-item text="北京">北京</s-picker-item>
  <s-picker-item text="上海">上海</s-picker-item>
  <s-picker-item text="广州">广州</s-picker-item>
  <s-picker-item text="深圳">深圳</s-picker-item>
  <s-picker-item text="成都">成都</s-picker-item>
  <s-picker-item text="重庆">重庆</s-picker-item>
  <s-picker-item text="杭州">杭州</s-picker-item>
  <s-picker-item text="南京">南京</s-picker-item>
  <s-picker-item text="武汉">武汉</s-picker-item>
  <s-picker-item text="西安">西安</s-picker-item>
  <s-picker-item text="贵阳">贵阳</s-picker-item>
  <s-picker-item text="昆明">昆明</s-picker-item>
  <s-picker-item text="南宁">南宁</s-picker-item>
  <s-picker-item text="长沙">长沙</s-picker-item>
  <s-picker-item text="郑州">郑州</s-picker-item>
  <s-picker-item text="济南">济南</s-picker-item>
  <s-picker-item text="青岛">青岛</s-picker-item>
  <s-picker-item text="大连">大连</s-picker-item>
  <s-picker-item text="厦门">厦门</s-picker-item>
  <s-picker-item text="福州">福州</s-picker-item>
  <s-picker-item text="合肥">合肥</s-picker-item>
  <s-picker-item text="南昌">南昌</s-picker-item>
  <s-picker-item text="太原">太原</s-picker-item>
  <s-picker-item text="沈阳">沈阳</s-picker-item>
  <s-picker-item text="长春">长春</s-picker-item>
  <s-picker-item text="兰州">兰州</s-picker-item>
  <s-picker-item text="海口">海口</s-picker-item>
  <s-picker-item text="苏州">苏州</s-picker-item>
  <s-picker-item text="无锡">无锡</s-picker-item>
  <s-picker-item text="宁波">宁波</s-picker-item>
</s-picker>
```

## Setting the placement

You can use the `placement` attribute to set the direction of the popover layer. Possible values are `top`, `bottom`, `left`, and `right`. This attribute only affects the direction when the screen has enough space to display it fully; when the screen cannot fit it, the direction is automatically flipped or it is overlaid on top of the container.

```html preview
<s-picker label="bottom" placement="bottom">
  <s-picker-item text="北京市">北京</s-picker-item>
  <s-picker-item text="上海市">上海</s-picker-item>
  <s-picker-item text="广州市">广州</s-picker-item>
  <s-picker-item text="深圳市">深圳</s-picker-item>
  <s-picker-item text="成都市">成都</s-picker-item>
</s-picker>

<s-picker label="top" placement="top">
  <s-picker-item text="北京市">北京</s-picker-item>
  <s-picker-item text="上海市">上海</s-picker-item>
  <s-picker-item text="广州市">广州</s-picker-item>
  <s-picker-item text="深圳市">深圳</s-picker-item>
  <s-picker-item text="成都市">成都</s-picker-item>
</s-picker>

<s-picker label="left" placement="left">
  <s-picker-item text="北京市">北京</s-picker-item>
  <s-picker-item text="上海市">上海</s-picker-item>
  <s-picker-item text="广州市">广州</s-picker-item>
  <s-picker-item text="深圳市">深圳</s-picker-item>
  <s-picker-item text="成都市">成都</s-picker-item>
</s-picker>

<s-picker label="right" placement="right">
  <s-picker-item text="北京市">北京</s-picker-item>
  <s-picker-item text="上海市">上海</s-picker-item>
  <s-picker-item text="广州市">广州</s-picker-item>
  <s-picker-item text="深圳市">深圳</s-picker-item>
  <s-picker-item text="成都市">成都</s-picker-item>
</s-picker>
```

## Form support

This component supports forms.

```html preview
<form action="http://coolaf.com/tool/params" method="get"> 
  <s-picker label="城市" name="city">
    <s-picker-item text="北京市" value="beijing">北京</s-picker-item>
    <s-picker-item text="上海市" value="shanghai">上海</s-picker-item>
    <s-picker-item text="广州市" value="guangzhou">广州</s-picker-item>
    <s-picker-item text="深圳市" value="shenzhen">深圳</s-picker-item>
    <s-picker-item text="成都市" value="chengdu">成都</s-picker-item>
  </s-picker>
  <hr>
  <s-button type="reset" variant="outlined">重置</s-button>
  <s-button type="submit">提交</s-button>
</form>
```

---

## Properties

| Name                   | Type                            | Default    | Sync | Description                                                                                |
| ---------------------- | ------------------------------- | ---------- | ---- | ------------------------------------------------------------------------------------------ |
| variant                | `outlined`, `text`             | `outlined` | √    | Variant                                                                                     |
| placement              | `bottom`, `top`, `left`, `right` | `bottom`  | √    | Display position. This only affects the default position; when the screen cannot fully display it, the direction is adjusted automatically |
| searchable             | `boolean`                       | `false`    | √    | Whether search is enabled                                                                   |
| searchPlaceholder      | `string`                        | `'`        | √    | The search placeholder hint                                                                 |
| name                   | `string`                        | `''`       | ×    | The `name` attribute used when submitting the form                                          |
| value                  | `string`                        | `''`       | ×    | The selected value (separate multiple values with `,` in multiple mode). This takes precedence over the child items' `selected` attribute |
| defaultValue           | `string`                        | `''`       | ×    | The default selected value (only applied on form reset; same as the `value` attribute)      |
| multiple               | `boolean`                       | `false`    | √    | Whether multiple selection is enabled                                                       |
| selectable             | `boolean`                       | `true`     | √    | Whether items are selectable; when disabled, clicking will not select                       |
| items `readonly`           | `TabItem[]`                     | `[]`       |      | All child items                                                                             |
| selectedItems `readonly`   | `TabItem[]`                     | `[]`       |      | The selected child items                                                                     |
| selectedIndex `readonly`   | `number`                        | `-1`       |      | The index of the currently selected item                                                     |
| selectedIndexes `readonly` | `number[]`                      | `[]`       |      | The indexes of the currently selected items in multiple-selection mode                       |

## Events

| Name   | Parameter | Bubble | Cancelable | Description                    |
| ------ | --------- | ------ | ---------- | ------------------------------ |
| change | Event     | ×      | ×          | Emitted when the selection changes |

## Slots

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| Anonymous | Place PickerItem child items here; other content can also be placed |

## Keyboard shortcuts

Use the `Tab` key to move focus, and use the `Space` or `Enter` key to trigger a click event.

## Dependencies

- [Ripple](./ripple.md)
