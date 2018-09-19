# Folder structure

After initialization of the email template project in the directory which stores your project will be created a basic set of folders and files for developing an email template. 

| Name            | Type            | Description |
| --------------- |:---------------:|:-----|
| .ewizard        | folder          | Stores the settings file where is described a path to the all used                                                                                        components and files for building an email template |
| build           | folder          | Contains the main file where is described all logic for building an email  |
| common          | folder          | Stores all common components, styles, localization and blocks  |
| modules         | folder          |  |
| node_modules    | folder          |  Contains components for developing an email template  |
| public          | folder          |  Stores all used images in used blocks, modules and components |
| typings         | folder          |  |
| .gitignore      | file            | Contains a list of files which will be ignored by GIT. |
| App.vue         | Vue.js file     | The root file where described the main logic and structure of an email template |
| icon.png        | image           | Default icon of email template in your eWizard account |
| index.html      | HTML5 file      | Collects and renders all written code from an app.vue file |
| index.js        | JavaScript file | Imports and registers all used components                                                                     and blocks. This file is used for uploading an email to your eWizard                                          account |
| index.server.js | JavaScript file |  Contains the same information as the index.js file, but it is used for                                        local email build |
| package.json    | Json file       | Stores general information and settings of a created email template                                           together with a component dependencies  |
| preview.jpg     | image           | Preview of a created email template   |
| settings.json   | Json file       | Initial settings for the created email template.   |