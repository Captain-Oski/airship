There are 3 kinds of buttons described in Airship: `Base`, `Primary` and `Secondary`.

Each button has two size modifiers:

- `.as-btn--s`: Makes the button small
- `.as-btn--l`: Makes the button large


## Base

```html
showSource: true
---
<button class="as-btn"> I'm a regular button</button>
```

```html
showSource: true
---
<button class="as-btn as-btn--s"> I'm a small button</button>
```

```html
showSource: true
---
<button class="as-btn as-btn--l"> I'm a large button</button>
```

## Primary

```html
showSource: true
---
<button class="as-btn as-btn--primary"> I'm a regular button</button>
```

```html
showSource: true
---
<button class="as-btn as-btn--primary as-btn--s"> I'm a small button</button>
```

```html
showSource: true
---
<button class="as-btn as-btn--primary as-btn--l"> I'm a large button</button>
```


## Secondary

```html
showSource: true
---
<button class="as-btn as-btn--secondary"> I'm a regular button</button>
```

```html
showSource: true
---
<button class="as-btn as-btn--secondary as-btn--s"> I'm a small button</button>
```

```html
showSource: true
---
<button class="as-btn as-btn--secondary as-btn--l"> I'm a large button</button>
```

## Disabled

```html
showSource: true
---
<button disabled class="as-btn"> I'm a disabled base button</button>
```

```html
showSource: true
---
<button disabled class="as-btn as-btn--primary"> I'm a disabled primary button</button>
```

```html
showSource: true
---
<button disabled class="as-btn as-btn--secondary"> I'm a disabled secondary button</button>
```

## Icons + Buttons


```html
showSource: true
---
<button class="as-btn as-btn--primary">
  <i aria-hidden class="as-icon as-icon-plus"></i>
  <p>Icon button</p>
</button>
```

```html
showSource: true
---
<button class="as-btn as-btn--secondary">
  <p>Icon button</p>
  <i aria-hidden class="as-icon as-icon-twitter"></i>
</button>
```

### Button groups

Use the `as-button-group` class to create a button group.


```html
showSource: true
---
<div class="as-button-group" role="group">
  <button aria-label="twitter" class="as-btn as-btn--secondary">
    <i aria-hidden class="as-icon as-icon-twitter"></i>
  </button>
  <button aria-label="facebook" class="as-btn as-btn--secondary">
    <i aria-hidden class="as-icon as-icon-facebook"></i>
  </button>
  <button aria-label="home" class="as-btn as-btn--secondary">
    <i aria-hidden class="as-icon as-icon-home"></i>
  </button>
</div>
```

## HTMLElements

The `as-btn` class can be used on the following Html Elements:

- [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [input type="button"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)
- [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

```html
showSource: true
---
<h1 class="as-title">Link</h1>
<a href="#" class="as-btn"> Link button </a>
<a href="#" class="as-btn as-btn--primary "> Link button primary </a>
<a href="#" class="as-btn as-btn--secondary "> Link button secondary </a>
<h1 class="as-title">Input</h1>
<input type="button" value="Input button" class="as-btn"/>
<input type="button" value="Input button primary" class="as-btn as-btn--primary"/>
<input type="button" value="Input button secondary" class="as-btn as-btn--secondary"/>
```

## CSS Variables

### Buttons

```
.as-btn {
  --as--btn--opacity--disabled
  // Default
  --as--btn--type-color--default
  --as--btn--ui-color--default--hover
  --as--btn--ui-color--default--active
  --as--btn--ui-color--default
  // Primary
  --as--btn--type-color--primary
  --as--btn--ui-color--primary
  --as--btn--ui-color--primary--hover
  --as--btn--ui-color--primary--active
  // Secondary
  --as--btn--type-color--secondary
  --as--btn--ui-color--secondary
  --as--btn--ui-color--secondary--hover
  --as--btn--ui-color--secondary--active
  // Complementary
  --as--btn--type-color--complementary
  --as--btn--ui-color--complementary
  --as--btn--ui-color--complementary--hover
  --as--btn--ui-color--complementary--active
}
```

### Button Groups

```
.as-button-group {
  --as--button-group--type-color--default
}
```
