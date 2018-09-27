# Attributes

These are helper attributes needed only during the editing or build process. Each attribute has unique
value which identifies the component.

 * `key` - native [Vue.js attribute](https://vuejs.org/v2/api/#key). It is 
  added to every element/component in editable template (DSL) by 
  [cobalt-editor](https://git.qapint.com/cobalt-dev/cobalt-editor). In editor's context it is needed
  to force replacement of an element/component in DOM
  instead of reusing it. Reusing of components while moving them may cause undesirable behavior
  such as not triggered lifecycle hooks which added by editor and should be called after each 
  change of the component.
    
Example (DSL):
```html
<div key="1">
  <wiz-text key="2"></wiz-text>
</div>
```
 * `data-id` - custom attribute added by [cobalt-editor](https://git.qapint.com/cobalt-dev/cobalt-editor) 
  to each element/component in editable template (DSL). It is required to map DOM elements to their
  representation in DSL. cobalt-editor uses `data-id` attribute retrieved from DOM element
  to look up for its representation in DSL and performs editing on DSL.
  
DSL:
```html	
<div data-id="1">
  <wiz-text data-id="2"></wiz-text>
</div>
```
DOM:
```html
<div data-id="1">
  <div data-id="2">
    <div>Text</div>
  </div>
</div>
```
 * `data-component` - custom attribute added only for components during their rendering. It is 
  required only by email templates and only for prod builds. Since all email prod builds use
  server side rendering this attribute is added in respective entry point for SSR
  [index.server.js](https://git.qapint.com/ewizardjs/templates/email/blob/master/template/index.server.js)
  It uniquely identifies each component's parent element in rendered HTML. 
  Later on, these ids are used as keys in metadata object - mapping which contain certain styles for
  each component which are required for fixing issues in some mail clients.
  
DSL:
```html
<div>
  <wiz-text></wiz-text>
  <p>Some paragraph</p>
  <wiz-image></wiz-image>
</div>
```	
After rendering
```html
<div>
  <div data-component="1">
    <div>Text</div>
  </div>
  <p>Some paragraph</p>
  <div data-component="2">
    <img src="default.jpg" />
  </div>
</div>
```