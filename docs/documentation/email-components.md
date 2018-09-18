# Email components

## wiz-wrapper
 
The basic component to wrap the content of Email Template. The `wiz-wrapper` should be added as the root element of `<template>`. 

Whenever user deletes all content from ET via eWizard `wiz-wrapper` remains the last, and cannot be removed. As result it displays an image **Add content here** and allows to add a new elements.

### Usage
```html
<template>
  <wiz-wrapper class="content-wrapper" align="center" style="background: #ffffff; width: 700px; min-height: 100px;">
  <!-- add your content here -->
  <wiz-wrapper>
</template>
```
::: tip
The width and background colour of root element in ET is displayed and in the `Settings` tab of eWizard editor.
:::

## wiz-block

The `wiz-block` component is used to wrap up the piece of ET markup that represents a predefined editable element (that usually is called as a block) which user can add to the ET from the blocks tab. Usually the `wiz-block` is used to create a blocks such as header, footer, signature etc.

### Usage

Add `wiz-block` to root element of block component in `index.vue` file

```html
<i18n>
{
  "en": {
    "main_text": "<div style='line-height: 20px;text-align: left;'><span style='color:#4d4d4d;font-size: 14px;font-family:arialhelvetica,sans-serif;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque urna.</span></div>"
  }
}
</i18n>

<template>
  <wiz-block class="block content-2w border-collapse m-p-0" style="padding: 0 50px;">
  	<wiz-placeholder class="main-content-wrapper pa-0" style="min-height: 20px; padding: 20px 0;">
  	  <wiz-column :width="100">
  	    <wiz-text class="m-p-lr-20" align="left" :text="$t('main_text')"></wiz-text>
  	  </wiz-column>
  	</wiz-placeholder>
  </wiz-block>
</template>

<script>
	export default {
		name: 'content-2w'
	}
</script>
```

::: warning
Whenever the block is added to ET in eWizard, only the markup from its template will be automatically pasted to ET markup (App.vue), Thus to style the block use classes defined in ET or add styles as inline.
:::

## wiz-placeholder

The `wiz-placeholder` is a basic component that allows to create editable horizontal grid in your block. The `wiz-placeholder` can wrap a multiple amount of [wiz-column](#wiz-column) and renders them as a table in the single row. 

### Usage

```html

```

## wiz-column



## wiz-layout