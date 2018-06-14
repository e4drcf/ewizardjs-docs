# Creating a presentation

So how to create a presentation using Cobalt engine? 

In this tutorial you will learn how to:

- create simple presentations

- gathers KPI from slides

- run presentations in browsers.

- add special components to your slides

Also you will understand how to create and delete slides, how to add styles or localization to slide and many useful things.

## Project initializing

First of all, you need to create folder for your presentation.

Open your command line in this folder and run following command:

	co init

You will be asked some additional questions about settings of your presentation: `project name`, `default language`, `target clm` and so on.

After answering the questions you will have presentation with one chapter - `main` and one slide - `cobalt`.

Also you will be available to open your project in any editor and get familiar with it structure. It must look like this:

![alt text](http://static.cobalt-engine.com/documentation/img/engine-wiki/file-structure-new.PNG)

### Version control

You can use Git to control the versions of your presentation. It's pretty simple to do.

First of all, you need to create a git repository on https://github.com. Then initialize one in folder with presentation and set a connection between them.

After that you will be able to use git command to push or pull changes in presentation.

Note, that presentation components are gitignore files. And if you want to restore them after pulling a presentation, use `co module install` command in command prompt of presentation folder. 

## Running the presentation

Now you can run presentation - just run following command. 

	co debug --live

It will build your presentation, start a local server and will also look after changes in presentation files and reload browser tab when they change. 

As a result, in terminal you will see line with link to your local host:

	Server started http://127.0.0.1:3000 

You can open this link in browser and if everything goes OK you should see the Cobalt slide with greetings.

## Adding slides

To add a slide to the presentation just use following command:

	co slide %slide-name%

This command does the following:

1. Adds description of the slide to `structure.json` file.
2. Creates slides HTML file named as the slide itself.
3. Creates localization file for the slide.

Then you just need add slide id to one of the chapters in `structure.json` file.

#### Example

Regarding to the `Project initialiaztion` chapter after `co init` command your `structure.json` file looks like this:

	{
		"slides": {
			"cobalt": {
				"name": "Cobalt",
				"template": "cobalt.html"
			}
		},
		"chapters": {
			"main": {
				"name": "Main chapter",
				"content": ["cobalt"]
			}
		},
		"storyboard": ["main"]
	}

As we see, it describes only slide `Cobalt` and chapter `Main`. 
Slide `Cobalt` is described as object, accessible by it's id `cobalt` as property of `slides` object.

The slide description object has field `name` with readable slide name and field `template` where we can assign HTML file for the slide.
In Cobalt you can group your slides in chapters how it's done in `structure.json` file.

Now there is only one chapter with id `main`. It's described by field `name` with it's readable name and by field `content`. 

`content` is the array with ids of slides, which we want to add to the chapter.

The array `storyboard` allows us to determine the order of the chapters in presentation.

Let's add some awesomeness to our presentation!

Open your terminal. If `co debug --live` command is still working, press `ctrl + C` to stop it.

Now we can use `co slide` command:

	co slide awesome-slide

If command is successfully executed, you would see that structure.json was changed. Now it contains description of the new slide. 
Let's add its id to the `content` array of `main` chapter(file `structure.json`):

	"main": {
		"name": "Main chapter",
		"content": [
			"cobalt",
			"awesome-slide"
		]
	}

Now after running the presentation we will be able to swap between those slides.

## Removing slides

If you want to remove slide from presentation, just delete its id from the chapter in which you are using it.

Also you are able to remove slides by executing following command:

	co slide %slide-id% -fd

This command will delete slide from structure and also remove slide files (`.html`, `.css` and `localization files`).  

#### Example

Let's delete the `Cobalt` slide. 
We can do this by removing its id from `content` array of `main` chapter and we will never see this slide again.

Chapter `main` after removing `cobalt` slide:

    "main": {
		"name": "Main chapter",
		"content": [
			"awesome-slide"
		]
	}

## Styling

Let's look at the `styles` folder.

Style pages for each slide are stored directly in `styles` folder. Note, that style page will be automatically created and included inside the slide HTML file. 

Common for all slides styles are stored in `styles/common` folder and included in `imports.css`. By default, in `imports.css` included three files: `fonts.css`,`theme.css`,`main.css`. 

#### Example

Lets add another slide with `co slide` command:

	co slide first

Then we want to add it to the `main` chapter:

	"main": {
		"name": "Main chapter",
		"content": [
			"first",
			"awesome-slide"
		]
	}

Now lets run our presentation with `co debug --live` so we can instantly see all the changes we are making.

Now let's change the background and padding of all slides placing following code in `main.css`:

	.slide {
		padding: 50px;
		background-color: mintcream; 
	}

As we can see, it worked for both `first` and `awesome-slide` slides.

We can redefine common styles on each particular slide by changing its style page.

Let's change the background of `awesome-slide` by placing following code in `awesome-slide.css`:

	.slide {
	 	background-color: whitesmoke;
	}

## Displaying in browser

If you look at the code of Cobalt presentation in browser, you will see, that each slide is represented as separate `<iframe>` element. It means that all slides have their own `<body>` element. 

But according to Cobalt guidelines you should place all slide content in `<article>` element. 
It has class `slide` by default (that's why css code from previous example works). 

#### Example

Let's add header to the `first` slide by adding `<header>` element into `<article>`:

	<article class="slide">
		<header>This is the first slide of presentation</header>
	</article>

## Localization

You can easily localize your presentation.

For doing this, you should move all texts you want to localize to localization file according to slide id. 

Those files are created automatically with creating of slide. They are placed in `i18n/language` folder where 'language' stands for the language of presentation. 

The language of presentation is defined in `settings/app.json`. It's set to `en` by default.

#### Example

Let's move text from the `first` slide to its localization file (`i18n/en/first.json`):

	{
		"header" : "This is the first slide of presentation"
	}

Then we can place this text in markup using `rv-html` binder:

	<h1 rv-html="t.header"></h1>

### Adding localization language

To add localization language do the following:

1. Create folder in `i18n` named according to localization language. 
2. Create there localization files for each slide
3. Add translations to those files
4. Set `lang` field in `settings/app.json` 

#### Example

Let's localize our presentation to German language.

First we create 'de' folder in `i18n` and copy all the .json's from `en` folder to `de` (so we don't have to create each of them separately).

Then we should translate text in copied .json's.

After doing those steps we can easily switch between localizations by changing `lang` field in `settings/app.json`:

	"lang": "de"

## MVC architecture

For implementing MVC Cobalt uses Rivets.js library.

Behavior of slide is defined by controller. 

In Cobalt, controller is separate `.js` file which defines a function which will be executed on slide activating. 

	module.exports = function(scope){
		// Write your awesome code here...
	};

Function receives one argument `scope`. It's an object where all public variables of the slide are stored.

In controller you can:

- add properties to the scope to use them later on the slide
- add event listeners to the scope and assign them to the elements of the slide
- store any information you need
- do many other things

Use `co controller %controller-name%` command for creating controllers.

#### Example

Let's create a controller for the `first` slide. Controller will count user clicks on the slide.

First, use a `co controller` command:

	co controller click-count

Then add some properties to the scope inside our controller (`controllers/click-count.js`):

	module.exports = function(scope){
		scope.clicks = 0;
		scope.registerClick = function () {
			scope.clicks++;
		}
	};

The first one holds clicks count.

The second – is function, that fires on click.

Then let's use Rivets binders for binding controller and properties from scope to our slide.
We can assign (bind) controller to our slide using `rv-controller` binder:

	<article class="slide" rv-controller="click-count">
		<h1 rv-html="t.header"></h1>
	</article>

Now we can bind other properties from scope to the HTML:

	<article class="slide" rv-controller="click-count">
		<h1 rv-html="t.header"></h1>


		<div rv-html="clicks"></div>
		<button rv-on-tap="registerClick">Click me!</button>
	</article>

It's recommended to use `rv-html` binder for text output and `rv-on-tap` for registering touchscreen taps. 

## Using Cobalt modules

In your presentation you can minify manual work by using Cobalt modules. 
You can find all of them here <a href="https://cobalt-engine.com/documentation" target="_blank">Cobalt documentation</a>. 
There is a complete documentation for each module, that explains how to use each of them.

All of the installed modules are stored in `node_modules` folder.

Basic algorithm of adding module to the slide looks like this:

- Install module
- Put link to the module in the `components` section of the slide's html
- Copy example markup from module's documentation to test if everything works
- Redefine default styles in slide's css to your needs
- Change the example markup to your needs

#### Example

Let's add slider to our slide.
For doing this we can open documentation for this module and follow the instructions.
Installing module from terminal:

    co module install --save cobalt/co-slider 

Including component in html

	<!-- components -->
	<link rv-import="co-slider">
	<rv-template name="common-components"></rv-template>
 	<!-- /components -->

	<!-- styles -->
	<link rel="stylesheet" href="styles/awesome-slide.css">
	<!-- /styles →

Creating model for the slider in (file `app/data/models/slide-id.json`):

    {
       "cookiesCountSlider": {
            "value": 20,
            "min": 10,
            "max": 50,
            "step": 1
        }
    }

Adding some example markup from documentation:

	<article class="slide">
		<co-slider class="default" model="m.cookiesCountSlider">
           <output rv-html="m.cookiesCountSlider.value"></output>
        </co-slider>
	</article>

### Restricting component's editing

All presentations created in Cobalt can be edited in eWizard afterwards. However, in some cases it might be necessary to restrict editing of the slide elements or disable editing at all. This can be achieved by adding Cobalt-specific attributes to slide markup.

#### Hiding elements

If you don’t want certain element to appear in the eWizard Components tree, add attribute sealed to it:

```HTMLg
<co-slider value="m.mySliderModel.value" sealed></co-slider>
```

#### Disable editing feature

By adding fixed attribute you will disable element resizing.
You can gain even more control by adding the following options:

- `position` - disables position change
- `size` - disables resizing
- `monitoring` - disables monitoring editing
- `action` - disables actions (like navigation or open pdf) editing
- `removing` - disables removal
- `animation` - disables animation editing

You can add multiple options at once by separating them with `","`:

```HTML
<co-slider value="m.mySliderModel.value" fixed="position, animation, action, monitoring"></co-slider>
```

#### Restrict size editing

You can also use min, max-width, or height CSS properties to restrict editing size of the inner elements. In the example below we are setting min-width and max-width to the same value, which disables width editing in eWizard:

```CSS
co-slider.input {
  min-width: 100%;
  max-width: 100%;
}
```
```HTML
<co-slider class="input" value="m.mySliderModel.value" fixed="position, animation, action, monitoring"></co-slider>
```



