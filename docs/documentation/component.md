# Component development

<style>
  .container__scrollable {
    max-height: 600px;
    overflow-y: auto;
  }
</style>

## Component folder structure

```bash
.
└─
  └─.ewizard
  |  └─ settings.json #contains the project settings and plugins configuration
  ├─ package.json # npm manifest
  ├─ index.vue # component code should be here
  ├─ demo/ # demo presentation folder
  └─ media/ # media folder
    ├─ images/
    ├─ video/
    └─ fonts/
```

## Component development guidelines

1. Follow **official** Vue [guidelines](https://ru.vuejs.org/v2/guide/components.html)
2. Add `wiz-component-name` class to the root element of component
3. Define props according to ewizardjs guidelines

## Creating a component

Run `wiz init` command and pick the component from the given preset.
```bash
$ wiz init
? Choose template you want to use: (Use arrow keys)
  email
  edetailer
  survey
> component
```

## Component Development process

Follow this [process](https://confluence.viseven.com/display/CCD/Process+of+development+wiz+components) for component development.

## Interactive Components

In the case when a component changes its own state it should notify external world about those updates.

It makes it possible to subscribe in a parent component for child's component data changes.

Vue defines a special mechanism for it via modifier .sync.

[Read here about its usage.](https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier)

This means that every component that modifies its data **must emit event `update`** in such format:
```js
    this.$emit('update:prop', newProp);
```

## Component properties standard

Vue allows to define component [Props](https://vuejs.org/v2/guide/components-props.html) in a several ways. As a standard ewizardjs use component Props defined as object.

Props object should look like this:

<div class="container__scrollable">

```js
    props: {
      stringType: {
        type: String,
        default: '"Open Sans", sans-serif', // actualType == type by default
      },
      textType: {
        type: String,
        label: 'Text',
        actualType: PropType.Text,
        default: 'Some Text',
      },
      booleanType: {
        type: Boolean,
        label: 'Boolean',
        default: true,
      },
      numberType: {
        type: Number,
        label: 'Number',
        default: 1,
      },
      urlType: {
        type: String,
        label: 'Url',
        actualType: PropType.Url,
        default: 'https://viseven.com',
      },
      colorType: {
        type: String,
        label: 'Color',
        actualType: PropType.Color,
        default: '#ffffff',
      },
      enumType: {
        type: String,
        label: 'Enum',
        actualType: PropType.Enum,
        options: [
          {
            value: 'value 1',
            label: 'Label 1'
          },
          {
            value: 'value 2',
            label: 'Label 2'
          },
        ],
        default: 'value 1',
      },
      fileType: {
        type: String,
        label: 'Audio',
        actualType: PropType.File,
        subtype: FileType.Audio,
        default: './path/to/audio.mp3',
      },
      objectType: {
        type: Object,
        label: 'Object',
        actualType: {
          type: PropType.Object,
          subtype: {  
            prop1: String,
            prop2: {
              type: String,
              actualType: PropType.Text,
            },
            prop3: {
              type: String,
              label: 'Audio',
              actualType: PropType.File,
              subtype: FileType.Audio,
            },
          },
        },
        default: () => {
          return {
            prop1: 'String',
            prop2: 'Text',
            prop3: './path/to/audio.mp3',
          }
        },
      },
      arrayType: {
        type: Array,
        label: 'Array',
        defaultLabel: 'Item label',
        actualType: PropType.Array,
        subtype: {
          prop1: String,
          prop2: {
            type: String,
            actualType: PropType.Text,
          },
          prop3: {
            type: String,
            label: 'Audio',
            actualType: PropType.File,
            subtype: FileType.Audio,
          },
        },
        default: () => {
          return [
            {
              __label: 'Item label',
              prop1: 'String',
              prop2: 'Text',
              prop3: './path/to/audio.mp3',
            },
          ]
        },
      },
    }
```
</div>

Aside to well known vue properties for [type check](https://vuejs.org/v2/guide/components-props.html#Type-Checks) or [validation](https://vuejs.org/v2/guide/components-props.html#Prop-Validation) etc, ewizardjs use additional fields for Props declaration, to fit them for editing in eWizard.

According to the preceding example, the component Prop may be described with the following fields:
- `label` - specifies the label of component in ewizardjs editor
- `type` - contains the type of Prop according to the javascript native data types
- `actualType` - specifies the type of Prop according to the [PropType](#component-types-prop-types) list
- `subtype` - specifies the of Prop subtype in case of the usage more complex actual types such as `File`and `Array`. When use  `File`as `actualType`, subtype can be set to one of [FileType](#component-types-prop-types) values. In case of usage [Array]() as actual type, `subtype` contains the object with a description of each Prop to be passed like array.
 - `options` - contains a list of available options that may be selected as value of the Prop. Each option nested in the `options` is displayed in eWizard editor in drop down list.
 - `default` - specifies default value of the Prop if the value wasn't passed

### Component types

The possible component `actualType` and `subtype` values are defined in `component-types` package as `PropType` and `FileType`. Add it as npm package into the component project:

```bash
npm i --save git@git.qapint.com:ewizardjs/core/component-types.git
```
To use `component-types` in Props declarations import it

```js
import { PropType, FileType } from 'component-types';
```
### Component types: Prop types

`component-types` package contains the following values of `actualtype` as a part of `PropType` object:

  - **`Array`** stands for `'array'`
  - **`Boolean`** stands for `'boolean'`
  - **`Color`** stands for `'color'`
  - **`Enum`** stands for `'enum'`
  - **`File`** stands for `'file'`
  - **`Number`** stands for `number'`
  - **`Object`** stands for `'object`
  - **`String`** stands for `'string'`
  - **`Text`** stands for `'text'`
  - **`Url`** stands for `'url'`

### Component types: File types

The supplemental values of `subtype` in case of use `File` as a `actualtype` are available in `FileType` object:
  - **`Audio`** stands for `'audio'`
  - **`Image`** stands for `'image'`
  - **`Video`** stands for `'video'`

