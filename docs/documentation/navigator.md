## Navigator

For navigation in the eWizardjs presentation is responsible Navigator module. Navigator is part of the eWizardjs engine and is added to the presentations and surveys by default. Navigator uses [structure.json]() file which denotes standard slide demonstration flow. Having said that you can still create the new demonstration [flow](#flow) dynamically while viewing a presentation.

**Usage**

The Navigator instance is assigned as a property to the **Vue** instance, so you have access to the Navigator instance as `$navigator`. You can therefore call its methods using `this` keyword:

```js
this.$navigator
```

## Navigator Settings

To set up the Navigator module use presentation [settings.json]() file, that stores navigation gesture settings.

### Cross chapter swipe

By default the transition between the chapters by navigation gestures is disabled. To enable it set `crossChapterSwipe` as `true`.

`settings.json` file:
```js
"crossChapterSwipe": true
```

### Swiping configuration

Navigator allows to configure swipe for the slides and chapters. To do so, define the following settings for swipe in `navigation.swipe` object:

- `slide` _(Object)_ - contains the settings for navigation by slides
- `chapter` _(Object)_ - contains the settings for navigation by chapters
  - `direction` _(String)_ - specifies the swipe direction (`horizontal` or `vertical`). Defaults to `horizontal`
  - `touchesCount` _(Number)_ - specifies the touches count for swipe. Defaults to `1`
  - `enabled` _(Boolean)_ - defines if navigation by slides/chapters is enabled/disabled. Defaults to `true`

You can redefine any option in `navigation` object of `settings.json` file. Undefined options will be taken from default settings.

**Example**

`settings.json` file:

```js
	"navigation": {
		"swipe": {
            "slide": {
                "direction": "horizontal",
                "touchesCount": 1,
                "enabled": true,
            },
			"chapter": {
				"direction": "vertical",
				"touchesCount": 1,
				"enabled": true
			}
		}
	}
```

In the example above is defined horizontal navigation by slides (performed on _swipe-left/swipe-right_ gestures) and vertical navigation by chapters(performed on _swipe-down/swipe-up_ gestures)

## Navigator' events subscribers

- **`onenter(handler)`** - register subscriber function which is executed each time when `slideenter` event occurs. The `slideenter` published right after user opens a slide, and DOM is being updated by the browser.

- **`onleave(handler)`** - register subscriber function which is executed each time when `slideleave` event occurs. The `slideleave` published when user leaves the current slide, before slide leaving animation is executed.

Note that Navigator events are programmatic and cannot be subscribed using addEventListener method. Behind the scene, Navigator adds the event handlers to the array, and whenever the some state occurs(which considered as event), Navigator runs all handlers from the arrays.

**Arguments**

Each method accepts as an argument `handler` function.

- **`handler`** _(Function)_ - the function to be executed after event publication. As an argument `handler` receives the object with properties `slide` and `chapter` that contains the `id` of current slide and chapter respectively.

**Example:**

```js
mounted(){
    this.$navigator.onenter(navigation =>
        console.log(navigation) // result {slide: "slider1", chapter: "potential"};
    );
    this.$navigator.onleave(previousNavigation =>
        console.log(previousNavigation) // result {slide: "slider1", chapter: "potential"};
    );
}
```

Note that `onenter` and `onleave` will register your handlers globally, that's mean that handlers will be invoked on each slide.

## Programmatic navigation

Aside from default navigation which is executed via swipe gestures, **Navigator**`s instance provides the set of methods for navigation.

- **`goTo(options, force)`** - executes the navigation to the slide defined in the `options`
- **`goToNextSlide(force)`** - executes the navigation to the next slide
- **`goToPrevSlide(force)`** - executes the navigation to the previous slide
- **`goToNextChapter(force)`** - executes the navigation to the next chapter
- **`goToPrevChapter(force)`** - executes the navigation to the previous chapter

**Arguments**

The `goTo` method accepts as an argument the `options`, its fields denotes the target slide to navigate

- **`options`** _(Object)_
  - `slide` _(String)_ - specifies id of the slide's to navigate
  - `chapter` _(String)_ - specifies id of the chapter's which slide belong to
  - `animation` _(Boolean)_ - defines if animation of slide's transition should be played during the navigation (**true**) or disabled (**false**). Defaults to **true**

---

Either of `gotTo*` methods accepts as an argument the `force` value:

- **`force`** _(Boolean)_ - specifies if the navigation lock should be ignored. Defaults to **false**

The force option can be useful if the navigation to neighboring slide is [locked](#locking-the-navigation) (or cross chapter swipe is not allowed), but you still need to execute navigation to this slide.

**Example:**

```html
<template>
    <div>
        <button @click="goToFistSlide">Go to the first slide</button>
        <button @click="goToPrevChapter">Go to the first slide</button>
    </div>
<template>
```

```js
methods:{
    goToFistSlide(){
        const options = {
            slide: "slider2",
            chapter: "potential",
            animation: false
        };

        this.$navigator.goTo(options)
    },
    goToPrevChapter(){
        this.$navigator.goToPrevChapter(true)
    }
}
```

## Locking the navigation

Navigator provides the set of methods which allows you to restrict the navigation from the current slide. The locking methods deny the navigation by the navigation gestures, as well as programmatic navigation. That said, you can still go to locked slide' by forcing [goTo](#programmatic-navigation).

- **`lockNext()`** - lock the navigation to the **next** slide
- **`lockPrev()`** - lock the navigation to the **previous** slide
- **`lock()`** - lock the navigation to the **next** and **previous** slides

## Unlocking the navigation

Aside of locking methods, Navigator provides the methods to enable the navigation to the locked slides:

- **`unlockNext()`** - unlock the navigation to the **next** slide
- **`unlockPrev()`** - unlock the navigation to the **previous** slide
- **`unlock()`** - unlock the navigation to the **next** and **previous** slides

## Navigation Status

To help user find out the information about the navigation status on the current slide, Navigator provides the following methods:

- **`getNavigationStatus()`** - used to get information whether the navigation to previous or next slide is allowed or denied.

**Returns** an object with status values:

`prevNavigationLocked` _(Boolean)_ - indicates if navigation to the previous slide is locked
`nextNavigationLocked` _(Boolean)_- indicates if navigation to the next slide is locked

**Example:**

```js
mounted(){
    this.$navigator.lockNext();
    const status = this.$navigator.getNavigationStatus();
    console.log(status); //result: {prevNavigationLocked: false, nextNavigationLocked: true}
}
```

---

- **`getCurrentSlide()`** - returns object with id of the current slide and id of the chapter which it belongs
- **`getNextSlide()`** - returns object with id of the next slide and id of the chapter which it belongs
- **`getPreviousSlide()`** - returns object with id of the previous slide and id of the chapter which it belongs

**Returns** an object with ids:

- `slide` _(String)_ - slide's id
- `chapter` _(String)_ - chapter's id

**Example:**

```js
mounted(){
    const next = this.$navigator.getNextSlide(); // {slide: "flip", chapter: "argumentation"}
    const current = this.$navigator.getCurrentSlide(); // {chapter: "problems", slide: "img1"}
    const prev = this.$navigator.getPreviousSlide(); // {slide: "imgtxt3", chapter: "problems"}
}
```

## Flow

The presentation structure can not be modified whenever user view the slide. So to change the slide`s ordering in presentation can be used custom flow. Custom flow allows to create new demonstration flow dynamically by reusing the existing slides. That's mean during the presentation will be available only the slides from the new flow.

Navigator provides the set of methods to work with flows such as:

- **`setFlow(structureFlow, goToOptions)`** - creates a new presentation flow and set it as a current one

**Arguments**

  - `structureFlow`_(Array)_ - the collection of slides to form the new presentation flow. Each slide in the array is represented as an object with following fields:
      - `slide` _(String)_ - slide's id
      - `chapter` _(String)_ - chapter's id
  - `goToOptions` _(Object)_ - defines the slide to which you will be navigated to after creating of the new flow, object itself has the same fields as options for [goTo](#programmatic-navigation) method

---

- **`resetFlow()`** - removes the current flow and defines the previous one as a current. If the previous flow do not exist, will be used structure.json file
- **`reset()`** - removes the current flow and defines the presentation structure as a current flow

Note that you can create the flow within already created one and fill it with another slides. In this case you can back the previous flow by using `resetFlow` method.

**Example**

```html
<template>
    <div class="layout">
        <button @click="createFlow">Create Flow</button>
        <button @click="resetFlow">Reset Flow</button>
    </div>
</template>
```

```js
  methods: {
    createFlow() {
      const structureFlow = [
        { slide: "custom", chapter: "home" },
        { slide: "slider1", chapter: "potential" },
        { slide: "img1", chapter: "problematics" }
      ];
      const goToOptions = { slide: "custom", chapter: "home" };
      this.$navigator.setFlow(structureFlow, goToOptions);
    },
    resetFlow() {
      this.$navigator.reset();
    }
  }
```
