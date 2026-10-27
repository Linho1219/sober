# Page-View

If you have used Android's `ViewPager` component or Flutter's `PageView` component, the `Page-View` component should feel familiar.  

```html preview
<s-page-view loop>
  <div style="background:rgb(73, 80, 87)">1</div>
  <div style="background:rgb(150, 97, 97)">2</div>
  <div style="background:rgb(54, 111, 32)">3</div>
  <div style="background:rgb(101, 71, 132)">4</div>
</s-page-view>
```

```html preview
<s-page-view onscrollchange="console.log(event)">
  <div style="background:rgb(73, 80, 87)">1</div>
  <div style="background:rgb(150, 97, 97)">2</div>
</s-page-view>
```
