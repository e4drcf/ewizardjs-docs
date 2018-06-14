# Create your first presentation

In this tutorial, you’ll learn how to create presentations using Co CLI. You'll create a simple presentation with three slides. Also you will get acquainted with some Cobalt components and binders.

This project introduces you to most of the key concepts in working with Cobalt.

Don't worry if you don't understand everything. Each of the concepts presented here is described in detail in the Cobalt documentation.

## Want to just see the source?

It's available on github(link).

## Project initializing

First of all, you need to create a folder for your presentation.

Open command line in folder which you want the presentation to be and run following command:

    co init

You will be asked some additional questions about settings of your presentation: `project name`, `default language`, `target clm` and so on.

As this is your first educational presentation, you can skip the questions just by clicking on the `Enter` button, but note, that those setting could be very useful in further presentations.

In result, you will get a presentation with one chapter - `Main` and one slide `Cobalt`.

To see how it looks like run `co debug --live` in console.

It will build your presentation, start a local server and will also look after changes in presentation files and reload browser tab when they change.

If everything worked well, in terminal you will see the line with link to your local host:

Server started `http://127.0.0.1:3000`

You can open this link in browser and if everything goes ok, you should see Cobalt slide with greetings.

If everything looks good, move on to the next chapter.

## Folder structure

After initializing a presentation you can get familiar with folder structure:

![alt text](http://static.cobalt-engine.com/documentation/img/engine-wiki/file-structure-bright.PNG)

As you see, command `co init` created `app` folder, `structure.json` and some other important files.

- `structure.json` file for configuring presentation structure

- `app folder` - content for slides is stored here

Folder app also contains an HTML file for each slide in presentation.

Other files are equally important but they will be described further.

## Adding slides and chapters

Since we've created a presentation, we have only one chapter and one slide, so, let's add some new ones.

Stop the local server in your command prompt by pressing Ctrl+С twice and run following commands, or open a new window and run them:

    `co chapter second`

    `co chapter final`

    `co slide second --chapter second`

    `co slide final --chapter final`

As you may guess, we've created two chapters and added a slide in each one.

 Syntax of such actions is pretty simple:

    co chapter [chapter-name]

    co slide [slide-name] --chapter[chapter-with-created-slide]

You can read more about creating slides and chapters [here](in `Creating presentation commands` section)

Also, you can see some changes in folder structure - second.html and final.html files were added to the app folder.

Now let's enable swiping between chapters. Open `app\settings\app.json`, find a field isCrossChapterSwipe and set it to `true`.

To see the result of your action, run `co debug --live` and refresh a browser tab with local server on it, then swipe to the right - if you done everything well, the slides must changed.

So, try to swipe left and right to ensure that everything works fine.

## Adding components and binders

### How to add components to the slides?

The main thing which does presentations so cool is using components. It's a custom HTML-elements which includes set of HTML-markup, CSS-styles and Javascript code that specifies themselves.

In command prompt run following commands to add components to your presentation:

`co module install cobalt/co-chapter-menu`

`co module install cobalt/co-image`

You've added `co-chapter-menu` - component for quick navigation to different chapters and co-image - component for wrapping images, to your presentation.

It's time to add them on a slide.

Open `app\cobalt.html`. 

HTML markup of the Cobalt slide is storing in this file. 

Copy following HTML markup and paste it between `article` tag:

    <article class="slide">
            <co-chapter-menu class="default" model="m.myChapterMenu"></co-chapter-menu>
            <h1 class="greeting" rv-html="t.greeting"></h1>
            <co-image model="m.myImage" rv-animate="m.coolAnimation"></co-image>
    </article>

As you see, we added two tags with attributes, so, let's consider it's more detailed.

Tag `co-chapter-menu` represents component with the same name, class `default` defines styling of the component and finally model attribute defines a properties of the component, they will be described a little bit later.

Next component is `co-image` - it is used for wrapping different images and easier location on the slide.

Now, let's add model files.

Open `app\data\models\cobalt.json` and insert following json code between `{}`:
    
    "myChapterMenu": {
            "orientation": "horizontal",
            "itemTemplate": "text",
            "default": false,
            "chapters": []
        },
        "myImage": {
            "src": "http://www.fluenceportland.com/wp-content/uploads/2012/03/communication-doctor-patient-300x284.jpg",
            "size": "cover",
            "position": "center center"
        }

In `models` folder there are `json` files in which stores models for components.

As you can see, each model has different properties, for instance, myChapterMenu has property `orientation`, depending on which changing orientation of co-chapter-menu, it has value `horizontal` or `vertical.`

Note, that instead of using url, like in `src` property of `myImage` model, you can use path to the image, which should be like this `media/images/slide-id/image-name`.

More detailed about properties of model you can read in [here](link).

Now, let's add styles and functionality of the components to the slide.

Add this line of code in <!--styles></styles--> section:

	<link rel="stylesheet" href="components/co-chapter-menu/dist/css/chapter-menu.css"/>
	<link rel="stylesheet" href="components/co-image/dist/css/image.css"/>

And this lines in <!--component--><!--/components--> section:

	<link rv-component="components/co-chapter-menu">
	<link rv-component="components/co-image">

By now, you are available to watch the full awesomeness of components. 

Run `co debug --live` in console to see the result in browser. You have to see chapter menu on the top of the page and an image of patient on the left side of the page.

As you see, navigation by `co-chapter-menu` available only on cobalt slide, but it has no sense, so let's add this component on other slides to have possibility of navigation through other chapters.

As in cobalt slide, add:

    <link rel="stylesheet" href="components/co-chapter-menu/dist/css/chapter-menu.css"/>
    <link rv-component="components/co-chapter-menu">

to the <!--styles></styles--> section and <!--component--><!--/components--> section of `second` and `final` slides.
Then add

    `<co-chapter-menu class="default" model="m.myChapterMenu"></co-chapter-menu>`

 before `<h1></h1>` tag in both slides.

And finally, add models. Open `data/models/final.json` and `data/models/second.json` and paste the following code into them:

    "myChapterMenu": {
            "orientation": "horizontal",
            "itemTemplate": "text",
            "default": false,
            "chapters": []
        }

Now, run `co debug --live` and open a browser to see the result. There must be a menu for navigation through chapters in each slide.

### CSS styles

As you may notice slides doesn't look quite well, and we are going to fix it by adding some custom CSS.

First of all you need to create a CSS file for the Cobalt slide, CSS files for other slide were created automatically.

So, open `styles` folder and create cobalt.css file. Then copy and paste following CSS code:
    
    p.custom{
        font-weight: bold;
        font-size:20px;
    }

    h1{
        margin-top:6%;
        margin-left: 2%;
    }
    .image{
        margin-left: 1%;
    }
    co-image div{
        margin-left: 4%;
    }

Then, add these ones to `second.css` and `final.css` files:

    h1{
        margin-top:6%;
        margin-left: 2%;
    }

Now, as we need to connect Cobalt CSS file to our slides, copy and paste following code to the bottom of <!--styles></styles--> section of cobalt slide. It's required to set it in the bottom, because we will be available to write CSS rules which will have the biggest priority.

    <link rel="stylesheet" href="styles/cobalt.css">

Note, that CSS files for other slides were added automatically.

To see the result, run `co debug --live` and open browser, as usual.

I think, now is the time to add some animation, so, don't waste a minute and move on to the next chapter.

## Animation and localization

It's time to turn our boring starting presentation in real awesome one. We are going to add some animation on the slides.

Open cobalt.html and change the markup to the listed below one:

    <article class="slide">
            <co-chapter-menu class="default" model="m.myChapterMenu"></co-chapter-menu>
            <h1 class="greeting" rv-html="t.greeting" rv-animate="m.textAnimation"></h1>
            <co-image model="m.myImage" rv-animate="m.coolAnimation"></co-image>
    </article>

Also, let's change markup of the `second.html` and `final.html files` - just replace

    `<h1 rv-html="t.greeting"></h1>` 
    
with
    
     `<h1 rv-html="t.greeting" rv-animate="m.textAnimation"></h1>`

As you see, we added an animation model for the `co-image` component and `h1` tag in cobalt.html file, and animation for `h1` tag in two other files.

So, now, we should add model for those animation.

Open `data/model/cobalt.json` and change it in a way listed below:

{
    "myChapterMenu": {
        "orientation": "horizontal",
        "itemTemplate": "text",
        "default": false,
        "chapters": []
    },
    "myImage": {
        "src": "http://www.fluenceportland.com/wp-content/uploads/2012/03/communication-doctor-patient-300x284.jpg",
        "size": "cover",
        "position": "center center"
    },
    "coolAnimation": {
        "name": "fadeInLeft",
        "duration": 1,
        "initVisibility": false
    },
     "textAnimation":{
        "name": "fadeInLeft",
        "duration": 1,
        "initVisibility": false
    }
}

Then open `second.json` and `final.json` in the same folder and change them like this:

{
    "myChapterMenu": {
        "orientation": "horizontal",
        "itemTemplate": "text",
        "default": false,
        "chapters": []
    },
    "textAnimation":{
        "name": "zoomIn",
        "duration": 1.5,
        "initVisibility": false
    }
}

To see the result, run `co debug --live` and open a browser on appropriate page.

You have to see the animation of image and text. Also you are available to swipe and watch the animation on other slides.

Besides that, you can change `name` property of animation model to any available in [CSS3 library](`https://daneden.github.io/animate.css/`) and see the result in browser.

#### Localization

The last but not the least feature for this tutorial - localization of the presentation. 

You can localize any string of the presentation which you like. So, for example, you want to change the greeting on the `Cobalt` slide.

Open `i18n/en/cobalt.json` file and change the file like this:

{
	"greeting": "There is an image of patient."
}

You can open Cobalt slide in browser to see that greeting text has changed.

At this point, let's end development of the presentation and move to deployment of our presentation to eWizard or an other CLM.


## Uploading to different CLM and eWizard

So, since you are come this far, it's time to tell you about uploading presentations to eWizard and built to different CLM's.

Run a following command in the folder with your presentation:

    co ewizard login

Enter required instance of eWiazrd and your credentials. Then run:

    co ewizard push

After executing the command, your presentation will be uploaded to it.

In eWizard you are available either edit styles or add components to the slide.

Also, you can built your presentation to some CLM's using eWizard or do it with Cobalt from command line.

For example if you run `co build --clm viseven` in console, you will receive a built of Viseven CLM  of your presentation on your account in https://cobalt-engine.com/.

More detailed about uploading to different CLM's you can read [here](link).

I hope you've enjoy this tutorial. Have a nice day and explore Cobalt!


