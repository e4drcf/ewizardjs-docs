# Directives

## Open pdf directive

This directive uses navigator's method [openPdf()](./navigator.html#open-pdf-method) to open the pdf in CLM compatible format.

**Installation**

To install the directive, open the command prompt and run the following command:

```bash
wiz install --save wiz-open-pdf
```

To specify the dependency for the component open the package.json and add:

```bash
"wiz-open-pdf": git+https://git.qapint.com/ewizardjs/edetailer/components/wiz-open-pdf.git#VERSION
``` 

**Registration**

After installing the directive, you have to registrate it. For this, add the code below to the `app.js` file:

```js
import openPDF from 'wiz-open-pdf';
Vue.directive('open-pdf', openPDF);

```

**Usage**

```html
<template>
    <wiz-button v-open-pdf="somePDF"></wiz-button>
</template>
```

```html
<script>
import somePDF from './common/media/pdfs/some.pdf';
    export default {
    data() {
        return {
        somePDF
        }
    }
}
</script>

```