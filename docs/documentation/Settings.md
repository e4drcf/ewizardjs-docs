# :wrench: Settings

After creating a new template by ewizard CLI you have a possibility to view its basic settings. There are four types of templates which you can create using the **wiz init** command.

``` {2}
? Choose template you want to use: (Use arrow keys)
   > email
     edetailer
     survey
     component
```

To view the file with settings go to the *template folder/.ewizard/settings.json* file.

## General settings

Every template's settings have the **_'content'_** object which stores the following fields:

* The **_'type'_** field contains an unique type for every template. By default, it is the name of the current template. 
* The **_'subtype'_** field is used only for email template. 

::: tip Note
In **survey** template are described only general settings.
:::

## Email template's settings

This is the basic settings after initialization of the **email** template. 

``` json
{
  "content": {
    "type": "email",
    "subtype": "layout"
  },
  "path": {
    "blocks": "common/blocks-library", 
    "localBlocks": "common/blocks", 
    "localComponents": "common/components",
    "bundle": "build/dev/app.js", 
    "rootComponent": "App.vue",
    "slides": "slides",
    "themes": "themes"
  }
}
```

In addition to the **_'content'_** object there is a **_'path'_** object, which contains the next fields:

* The **blocks** - describes the way to the blocks (fragments) library which can be added on the email;
* The **localBlocks** - stores the way to the blocks that are currently used on the email;
* The **localComponents** - contains the location way to the local components which can be used on the email template;
* The **bundle** - 
* The **rootComponent** - defines the main root file, where is described a general logic;
* The **slides** - the folder with slides of the content;
* The **themes** - the folder with email's themes.


## Component and Edetailer templates' settings

Settings.json file of the **component** and **edetailer** templates in addititon to the **_'content'_** object has the **_'plugin'_** object which stores only one field: 

* **eslint** - contains a boolean value which enable or disable an utility for finding a problematic patterns or code that doesn’t adhere to the main style guidelines.

``` json
{
  "content": {
    "type": "component",
    "subtype": ""
  },
  "plugins": {
    "eslint": true
  }
}
```
