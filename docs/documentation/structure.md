
# Structure

In order to organize the presentation structure, eWizardjs introduces concepts of [slides](#slides) and [chapters](#chapters). Presentation may be composed of  slides and chapters. Overall structure of presentations` is defined in *structure.json* file which consist of the following objects:
- `slides`
- `chapters`
- `storyboard`

## Slides

Slide is a single page of presentation and separates content structurally. You can manage slides with `wiz slide  [slideName]` command or edit *structure.json* manualy. `Slides` object contains list of the presentation all slides. Each key in `slides` object is unique ID of the slide. Each slide has such properties:
 
 - `name` - the slide readable name;
 - `template` - a reference to vue component associated with the slide.

Let's consider the example:
 ```js{2,6,10}
    "slides": {
        "vanilaCookie": {
            "name": "Vanilla Cookies",
            "template": "slides/vanilaCookie/index.vue"
        },
        "chocolateCookie": {
            "name": "Chocolate Cookies",
            "template": "slides/chocolateCookie/index.vue"
        }
        "biscuit": {
            "name": "Chocolate Cookies",
            "template": "slides/biscuit/index.vue"
        }
    }
```
Here, keys `vanilaCookie`, `chocolateCookie` and `biscuit` specifies the ID of the slides, each object has `name` property wich will be displayed as slide name in eWizard editor, and `template` with the path to vue component that represents a presentation page.

::: tip
If there is need to create several slides with use of same vue component, they should have different IDs, but same `template` value.
:::


## Chapters

In eWizardjs presentation you can group slides logically by chapters. Each key in `chapters` object is unique ID of the chapter. Each chapter has the following properties:

- `name` - the chapter readable name;
- `content` - array with the slides` IDs which are included into the chapter.

Let`s take a look on example

```js{2,9}
"chapters": {
   "favorite": {
      "name": "Favorite Cookies",
      "content": [
         "vanilaCookie",
         "chocolateCookie"
      ]
   },
   "other": {
      "name": "Other Cookies",
      "content": [
         "biscuit"
      ]
   }
```
 
In the example above are defined two chapters with IDs `favorite` and `other`. First `favorite` chapter contains two slides with IDs `vanilaCookie` and `chocolateCookie` and the second one includes slide with ID `biscuit`. Each chapter contains `name` field which will be displayed as a chapter name in eWizard editor.

## Storyboard

`Storyboard` is an array which defines chapters available for view during the presentation and their order. Only chapters listed in `storyboard` will be shown in presentation.

**Example**

``` js
"storyboard": [
   "favorite",
   "other"
]
```

::: tip
eWizardjs counts chapters that are not included into `storyboard` as a hidden. It is not possible open such chapters swiping the presentation as usually. Chapter can be accesssd only with use of direct navigation to its slides. However, you can swipe in between the slides within the hidden chapter.
::: 


### Disabled slides and chapters.

Slides and chapters can be skiped during viewing a presentation. To mark the slide or chapter as disabled, inside the chaptrs' <code>content</code> (to disable the slide) or `storyboard` (to disable the chapter) add the `!` symbol in front of desirable item.

*Example*

```js{7,18}
{
...
    "chapters": {
    "favorite": {
        "name": "Favorite Cookies",
        "content": [
            "!vanilaCookie",
            "chocolateCookie"
        ],
        "other": {
        "name": "Other Cookies",
        "content": [
            "biscuit"
        ]
    },
    "storyboard": [
    "favorite",
    "!other"
    ]
}

```

In the example above `vanilaCookie` slide and chapter `other` marked as  disabled, and will be skiped by engine while viewng the presentation.

Disabling the chapters or slides can be useful if you are going remove them temporary from the presentation flow whithout modifying the acualt order of slides demonstration. In this case you can easly recover them in future, by removing `!` symbol.