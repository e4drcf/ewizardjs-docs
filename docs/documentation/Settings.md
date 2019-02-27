# :wrench: Settings

After creating a new template by eWizard CLI you have a possibility to view its basic settings. There are four types of templates which you can create using the **wiz init** command.

``` {2}
? Choose template you want to use: (Use arrow keys)
   > email
     edetailer
     survey
     component
```

To view the file with settings, open the *settings.json* file.

## Email settings


After initialization of the email template, open the current folder with your email project and find the .json file with described settings.
``` json
{
  "name": "myEmail",
	"id": "81ta-KDyV-v811-HT3t",
	"localization": {
		"current": "en",
		"original": "",
		"langs": [
			"en"
		],
		"country": ""
	},
	"app": "./App.vue",
	"targetClm": "irep"
}
```
This table displays the information for every field in the *settings.json* file.

| Field name   | Сontent                                                                             |
|:-------------|:------------------------------------------------------------------------------------| 
|    name      | the name of the email template                                                      |
|      id      | the unique id of the created email                                                  |   
| localization | information about current localization, languages and country of the email template |
| app          | the main root file, where a general logic is described                              |
| targetClm    | the name of the clm for which the email template was created                            |
   
## Edetailer settings

``` json
{
  "name": "testEdetailer",
  "id": "81ta-KDyV-v811-HT3t",
  "localization": {
    "current": "en",
    "original": "",
    "langs": ["en"],
    "country": ""
  },
  "app": "./App.vue",
  "crossChapterSwipe": true,
  "targetClm": "irep",
  "orientation": "landscape",
  "browserslist": ["last 2 ios version", "last 2 android version"],
  "navigation": {
    "swipe": {
      "slide": {
        "direction": "horizontal",
        "touchesCount": 1,
        "enabled": true
      },
      "chapter": {
        "direction": "horizontal",
        "touchesCount": 1,
        "enabled": false
      }
    }
  }
}
```
This code shows the default setting for created edetailer template. 

| Field name       | Сontent                                                                                 |
|:-----------------|:----------------------------------------------------------------------------------------| 
| name             | the name of the edetailer template                                                      |
| id               | the unique id of the created edetailer                                                  |   
| localization     | information about current localization, languages and country of the edetailer template |
| app              | the main root file, where a general logic is described                                  |
| crossChapterSwip | boolean value which allows swiping between chapters                                     |
| targetClm        | the name of the clm for which the edetailer template was created                            |
| orientation      | the current format of the orientation                                                   |   
| browserslist     | ...                                                                                     |
| navigation       | the navigation actions through the slides and chapters                                  |


## Survey settings

``` json
{
  "name": "testSurveyTemplate",
  "id": "81ta-KDyV-v811-HT3t",
  "localization": {
    "current": "en",
    "original": "",
    "langs": [
      "en"
    ]
  },
  "app": "./App.vue",
  "crossChapterSwipe": true,
  "targetClm": "irep",
  "navigation": {
    "swipe": {
      "slide": {
        "direction": "horizontal",
        "touchesCount": 1,
        "enabled": true
      },
      "chapter": {
        "direction": "horizontal",
        "touchesCount": 1,
        "enabled": false
      }
    }
  }
}
```
The survey's settings are similar to edetailer settings, so there is no reason to describe them.  



