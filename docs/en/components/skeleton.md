# skeleton

A skeleton screen. To meet different layout needs, this component provides only a default style; you need to compose it yourself to create your custom layout.

```html preview
<s-skeleton></s-skeleton>
```

---

List item with avatar skeleton screen.

```html preview
<div style="display: flex; align-items: center; gap: 16px;">
  <s-skeleton style="width: 72px; height: 72px"></s-skeleton>
  <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 8px;">
    <s-skeleton></s-skeleton>
    <s-skeleton></s-skeleton>
    <s-skeleton style="width: 80%"></s-skeleton>
  </div>
</div>
```
