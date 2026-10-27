# base-slider

This is one of the most powerful components in v2. It lets you build all kinds of sliders, such as volume, progress bar, tone, brightness, timeline, and more. We also recommend using this component to wrap your own custom sliders.  
If you are developing a component library, you can also import this component on demand to build your own sliders.

```html preview
<s-base-slider></s-base-slider>
```

## Modes

Set the `mode` attribute to choose different slider types: `reversed` for a reversed slider, and `range` for a range slider.

```html preview
<s-base-slider mode="reversed"></s-base-slider>
<s-base-slider mode="range"></s-base-slider>
```

## Variants

Set the `variant` attribute to `segmented` to define the segmented variant.

```html preview
<s-base-slider variant="segmented"></s-base-slider>
<s-base-slider variant="segmented" mode="reversed"></s-base-slider>
<s-base-slider variant="segmented" mode="range"></s-base-slider>
```

## Vertical

Set the `orientation` attribute to `vertical` to define a vertical slider. The slider becomes an inline-block element (it no longer takes up a full row).

```html preview
<s-base-slider orientation="vertical"></s-base-slider>
<s-base-slider orientation="vertical" mode="reversed" ></s-base-slider>
<s-base-slider orientation="vertical" mode="range"></s-base-slider>
```

## Step

Set the `step` attribute to define the slider's step, or use the `stepMarks` attribute to define the step values (which takes higher priority).

```html preview
<s-base-slider step="10" end="50" min="20" max="200"></s-base-slider>
<s-base-slider stepMarks="50,60,70,80,90" end="50"></s-base-slider>
```

## Sliding mode

Set the `slidingMode` attribute to `all` or `all-cumulative` so that clicking anywhere on the slider triggers sliding.

```html preview
<s-base-slider slidingMode="all"></s-base-slider>
<s-base-slider slidingMode="all-cumulative"></s-base-slider>
```

After setting the `slidingMode` attribute, you can also enable the `touchScrollPriority` attribute. On touch devices, scrolling takes priority (vertical swipes will not trigger sliding).

```html preview
<s-base-slider touchScrollPriority slidingMode="all"></s-base-slider>
```

## Custom styles

Using the component's slots and CSS styles, you can build custom sliders with very little code. Here are some examples.

### Volume control slider

```vue preview
<style scoped>
  .volume-slider{
    height: 150px;
    width: 64px;
    border-radius: 32px;
    overflow: hidden;
    position: relative;
    --s-base-slider-thumb-size: 0px;
  }
  .volume-slider::part(track-end),
  .volume-slider::part(track-fill){
    width: 100%;
    border-radius: 0;
  }
  .volume-slider:focus-visible{
    outline-offset: 2px;
    outline: 3px solid var(--s-color-primary);
  }
  .volume-slider:focus-visible::part(thumb-end){
    outline: none;
  }
  .light-icon{
    width: 24px;
    height: 24px;
    fill: currentColor;
    position: absolute;
    bottom: 20px;
    color: var(--s-color-on-primary);
  }
</style>
<template>
  <!--亮度操作滑块-->
  <s-base-slider class="volume-slider" orientation="vertical" slidingMode="all-cumulative" style="color: #009688">
    <s-icon name="light_mode" class="light-icon"></s-icon>
  </s-base-slider>
  <!--音量操作滑块-->
  <s-base-slider class="volume-slider" orientation="vertical" slidingMode="all-cumulative" end="70">
    <svg viewBox="0 -960 960 960" class="light-icon">
      <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"></path>
    </svg>
  </s-base-slider>
</template>
```

### Music player progress bar

```vue preview
<style scoped>
  .player-slider{
    --s-base-slider-thumb-size: 14px;
  }
  .player-slider>.time{
    position: absolute;
    bottom: 24px;
    font-size: 12px;
    padding: 6px 8px;
    font-family: system-ui;
    border-radius: 16px;
    font-weight: 600;
    transform: scale(.5);
    line-height: 1;
    opacity: 0;
    transform-origin: bottom;
    transition-property: transform, opacity;
    transition-duration: var(--s-motion-duration-short4);
    background: var(--s-color-inverse-surface);
    color: var(--s-color-inverse-on-surface);
  }
  .player-slider[sliding]>.time{
    transform: scale(1);
    opacity: 1;
  }
</style>
<template>
  <s-base-slider class="player-slider" slidingMode="all-cumulative" end="60" max="180" oninput="this.querySelector('.time').innerText = `${Math.floor(this.end/60).toString().padStart(2,'0')}:${(this.end%60).toString().padStart(2,'0')}`">
    <!--时间-->
    <div class="time" slot="thumb-end">01:00</div>
  </s-base-slider>
</template>
```

## Form support

This component can be used as a form element.

```html preview
<form action="http://coolaf.com/tool/params" method="get">
  选择标签：
  <s-base-slider name="tag" defaultEnd="50"></s-base-slider>
  <hr>
  <s-button type="reset" variant="outlined"> 重置表单 </s-button>
  <s-button type="submit"> 提交结果 </s-button>
</form>
```

---

## Properties

| Name                | Type                       | Default     | Sync | Description                                                                                              |
| ------------------- | -------------------------- | ----------- | ---- | -------------------------------------------------------------------------------------------------------- |
| mode                | single, reversed, range    | single      | √    | Mode. single = single value selection, reversed = reversed single selection, range = range selection      |
| slidingMode         | thumb, all, all-cumulative | thumb       | √    | Sliding mode. thumb = only the thumb slides, all = slide anywhere, all-cumulative = slide anywhere with cumulative values |
| variant             | standard, segmented        | standard    | √    | Variant                                                                                                  |
| orientation         | horizontal, vertical       | horizontal  | √    | Orientation                                                                                              |
| touchScrollPriority | boolean                    | false       | √    | Touch scroll priority. When enabled, scrolling takes priority on touch devices                            |
| stepMarks           | string                     | ''          | ×    | Step marks, separated by `,`, e.g. `20,30,50` (no need to provide min/max). The slider only snaps to the marks. |
| name                | string                     | ''          | √    | Name. The `key` used when the form is submitted.                                                         |
| step                | number                     | 1           | ×    | Step. Ensure it is evenly divisible by (max - min).                                                      |
| min                 | number                     | 0           | ×    | Minimum value                                                                                            |
| max                 | number                     | 100         | ×    | Maximum value                                                                                            |
| start               | number                     | 0           | ×    | Start value (only effective in range mode)                                                               |
| end                 | number                     | 50          | ×    | End value. In single or reversed mode, this sets the progress.                                           |
| defaultStart        | number                     | 0           | ×    | Default start value. Used as the default when the form resets; only effective on form reset.             |
| defaultEnd          | number                     | 0           | ×    | Default end value. Used as the default when the form resets; only effective on form reset.               |

## Events

| Name       | Parameter                              | Bubble | Cancelable | Description                                  |
| ---------- | -------------------------------------- | ------ | ---------- | -------------------------------------------- |
| input      | Event                                  | ×      | ×          | Fired after the value changes                |
| change     | Event                                  | ×      | ×          | Fired on release after the value changes     |
| pressstart | CustomEvent<{ name: 'start' \| 'end' } | ×      | ×          | Fired when a thumb is pressed                |
| pressend   | CustomEvent<{ name: 'start' \| 'end' } | ×      | ×          | Fired when a thumb is released               |
| hoverstart | CustomEvent<{ name: 'start' \| 'end' } | ×      | ×          | Fired when the pointer enters a thumb        |
| hoverend   | CustomEvent<{ name: 'start' \| 'end' } | ×      | ×          | Fired when the pointer leaves a thumb        |

## Slots

| Name        | Description                                          |
| ----------- | --------------------------------------------------- |
| Anonymous   | Custom content, floating on the top layer           |
| middle      | Middle layer (above the track, below the thumb)     |
| low         | Bottom layer (below the track)                      |
| track-start | Track start                                         |
| track-end   | Track end                                           |
| track-fill  | Track fill                                          |
| thumb-start | Thumb start                                         |
| thumb-end   | Thumb end                                           |

## Methods

`.keydown(key)` dispatches a keyboard key.

- `key`: `string`. The key pressed on the keyboard.
- `return`: `boolean`. Returns true if the slider value was changed successfully, otherwise false.

## CSS Custom Properties

| Name                                  | Description                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| --s-base-slider-gap                   | Gap (only effective when the variant is `segmented`)                                         |
| --s-base-slider-track-edge-offset     | Track edge offset. Set this to control the offset from the track edges.                       |
| --s-base-slider-thumb-size            | Thumb size                                                                                    |
| --s-base-slider-thumb-width           | Thumb width                                                                                   |
| --s-base-slider-thumb-height          | Thumb height                                                                                  |
| --s-base-slider-thumb-start-width     | thumb-start thumb width                                                                       |
| --s-base-slider-thumb-start-height    | thumb-start thumb height                                                                      |
| --s-base-slider-thumb-end-width       | thumb-end thumb width                                                                         |
| --s-base-slider-thumb-end-height      | thumb-end thumb height                                                                        |
| --s-base-slider-sliding-mode         | Same as the `slidingMode` attribute, but this CSS variable has higher priority.               |
| --s-base-slider-touch-scroll-priority | Same as the `touchScrollPriority` attribute, but this CSS variable has higher priority.       |

> Note: CSS variables are involved in size calculations. You should prefer using CSS variables to adjust the component's styles. If you directly use ::part() selectors to adjust sizes, you may get incorrect size calculations unless you know exactly what you are doing.

## HTML Tag Attributes

| Name          | Description                          |
| ------------- | ----------------------------------- |
| pressed       | Set when pressed                    |
| hover         | Set on pointer enter                 |
| sliding       | Set while sliding                   |
| start-pressed | Set when the start thumb is pressed |
| end-pressed   | Set when the end thumb is pressed   |
| start-hover   | Set on pointer enter of the start thumb |
| end-hover     | Set on pointer enter of the end thumb   |

## Keyboard shortcuts

Use `Tab` to move focus, and the `⬆️⬇️⬅️➡️` arrow keys to adjust the value.
