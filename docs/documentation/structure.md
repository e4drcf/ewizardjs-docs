
# Structure

In order to organize the presentation structure, eWizardjs introduces concepts of [slides](#slides) and [chapters](#chapters). The presentation may be composed of slides and chapters. The overall structure of presentations` is defined in *structure.json* file which consists of the following objects:
- `slides`
- `chapters`
- `storyboard`

## Slides

The slide is a single page of presentation and separates content structurally. You can manage slides with `wiz slide [slideName]` command or edit *structure.json* manually. `Slides` object contains a list of all presentation slides. Each key in `slides` object is a unique ID of the slide. Each slide has the following properties:
 
 - `name` - the slide readable name;
 - `template` - a reference to Vue component associated with the slide.

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
Here, keys `vanilaCookie`, `chocolateCookie` and `biscuit` specifies the ID of the slides, each object has `name` property which will be displayed as slide name in eWizard editor, and `template` with the path to vue component that represents a presentation page.

::: tip
If there is a need to create several slides with use of same vue component, they should have different IDs, but same `template` value.
:::


## Chapters

In eWizardjs presentation, you can group slides logically by chapters. Each key in `chapters` object is a unique ID of the chapter. Each chapter has the following properties:

- `name` - the chapter readable name;
- `content` - array with the slides` IDs which are included in the chapter.

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
 
In the example above are defined two chapters with IDs `favorite` and `other`. First `favorite` chapter contains two slides with IDs `vanilaCookie` and `chocolateCookie` and the second one includes a slide with ID `biscuit`. Each chapter contains `name` field which will be displayed as a chapter name in eWizard editor.

## Storyboard

`Storyboard` is an array which defines chapters available for view during the presentation and their order. Only chapters listed in `storyboard` will be shown in the presentation.

*Example*

``` js
"storyboard": [
   "favorite",
   "other"
]
```

::: tip
eWizardjs counts chapters that are not included in `storyboard` as a hidden. It is not possible to open such chapters by swiping the presentation as usual. The chapter can be accessed only with the use of direct navigation to its slides. However, you can swipe in between the slides within the hidden chapter.
::: 


### Disabled slides and chapters.

Slides and chapters can be skipped during viewing a presentation. To mark the slide or chapter as disabled, inside the chapters' <code>content</code> (to disable the slide) or `storyboard` (to disable the chapter) add the `!` symbol in front of desirable item.

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

In the example above `vanilaCookie` slide and chapter `other` marked as disabled, and will be skipped by the engine while viewing the presentation.

Disabling the chapters or slides can be useful if you are going to remove them temporarily from the presentation flow without modifying the actual order of slides demonstration. In this case, you can easily recover them in the future, by removing `!` symbol.
