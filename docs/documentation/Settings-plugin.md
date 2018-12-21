## Settings module

*Settings* provides an API to get the eDetailer settings values. The *Settings* module exposes it's methods via the `$settings` object of a slide instance:

```js
mounted(){ 
    this.$settings 
} 
```

## API

Here are the list of all the available settings methods:

- *`vm.$settings.getRaw()`* – returns an object with eDetailer settings which are stored in the settings.json file. In case if some settings are missing, the returned object will be supplemented with default values. 

- *`vm.$settings.get()`* – returns an object with interpolated eDetailer settings. That’s mean that all the tokens (settings, structure) will be replaced with actual values. The assetFileNameTemplate field is interpolated for the current slide where the settings method is invoked.

- *`vm.$settings.getByPath(clmName)`* – returns an object with a settings of specific Clm. 
  - `clmName`_(String)_ – stands for name of CLM 

```js
mounted(){ 
    let irepSettings = this.$settings.getClmSettings("irep") 
}
```

- *`vm.$settings.getClmSettings(keypath, options, defaultValue)`* – returns an object (string) with a specific settings which are stored by defined keypath. The parameters options and defaultValue are optional.
  - `keypath`_(String)_ – determines a path to the desired settings;

  - `options`_(Object)_ – specify the id of the slide and chapter which settings should be interpolated. Usually is used to interpolate the assetFileNameTemplate value;

  - `defaultValue`_(Any)_ – in case if there is no such setting by the given keypath, will be returned the value defined in defaultValue parameter.

```js
const options = {
  chapter: { 
    id: 'home', 
    name: 'Home'
  }, 
  slide: { 
    id: 'custom', 
    name: 'Canvas', 
    template: 'slides/custom/index.vue' 
  } 
}; 

const defaultValue ="default-presentation_custom"; 
this.$settings.getByPath("clms.irep.assetFileNameTemplate", options, defaultValue);
```
