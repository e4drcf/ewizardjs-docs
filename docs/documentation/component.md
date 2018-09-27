# Component development

## Component folder structure

```bash
	|_ package.json  #npm manifest
	|_ index.vue  #component code should be here
	|_ demo/  #demo presentation folder
	|_ media/  #media folder
		|_ images
		|_ video
    |_ fonts
    
```

## Component development guidelines

0. Follow **official** Vue [guidelines](https://ru.vuejs.org/v2/guide/components.html)
1. Add `wiz-component-name` class to the root element of component
2. Define props according to ewizardjs guidelines

## Component Template repository

Copy this [repository](https://git.qapint.com/ewizardjs/edetailer/components/template) to create new component.

## Component Development process

Follow this [process](https://doc.mps-cg.com/display/CCD/Process+of+development+wiz+components) for component development.

## Interactive Components

In the case when a component changes its own state it should notify external world about those updates.

It makes it possible to subscribe in a parent component for child's component data changes.

Vue defines a special mechnism for it via modifier .sync.

[Read here about its usage.](https://ru.vuejs.org/v2/guide/components-custom-events.html#%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80-sync)

This means that every component that modifies its data **must emit event `update`** in such format:

    this.$emit('update:prop', newProp)


## Component properties standard

Props object should look like this:

    props: {
      stringType: {
        type: String,
        default: '"Open Sans", sans-serif', // actualType == type by default
      },
      textType: {
        type: String,
        label: 'Text',
        actualType: PropType.Text,
        disabledActions: [Action.Text.bold],
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
