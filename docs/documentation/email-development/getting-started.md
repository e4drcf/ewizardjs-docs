# :email: Getting started

## Preconditions

Before starting the development be sure that you have installed the latest version of eWizard CLI. More detailed information about eWizard CLI installation you can find [here](../Installation.html). 

## Beginning of work

Firstly, create the folder which will store your email's content. After that open a command prompt in the root of the created folder and run the following command: 
```bash
wiz init
```
This command will initialize a template you choose. For the email template development, you have to choose an email from the suggested menu. 
```bash{2}
? Choose template you want to use: (Use arrow keys)
   > email
     edetailer
     survey
     component
```
Also, you will be asked questions about the directory where your project will be generated, description, name and author of the created email template. After successful initialization, your project structure should have the same view as on the image below: 

<img src="../../media/images/folderStructure.png" alt="folderStructure" style="display: block; margin: 0 auto;">

## How to see the results?

Use the **wiz dev** command to run the development build and check the created email template. Open index.html file in any browser to see the result.

<img src="../../media/images/emailResult.png" alt="emailResult" style="display: block; margin: 0 auto;">

By following these steps, you have created your basic email template. You can continue the work and fill with content you want by using different ewizardjs-components.

## Usage of blocks and components 

While developing an email template you can use predefined parts of an email. They are divided into two types:

* [blocks](/documentation/email-development/blocks.html)
* components

Blocks or fragments are already made sections of HTML page layout such as header, footer, etc. If you wondering how to add the block to email template check out to the [blocks documentation here](/documentation/email-development/blocks.html#adding-block-to-et). All installed blocks are described in *common/blocks-library/blocks.json* file.

<img src="../../media/images/blockExample.png" alt="blockExample" style="display: block; margin: 0 auto;">

Email template components are simple elements with commonly used pieces of email's markup.For example, it can be a button, text, or a card with text. The look of email component can be configured via it `props`. These elements are also used in blocks. 

The list of installed components which are available to add from eWizard editor sidebar is described in *common/components/components.json* file.
For clarity, open your eWizard account, go to the Email Templates tab and open any of an email template in edit mode. There you can see two tabs with components and blocks.

<img src="../../media/images/editMode.png" alt="editMode " style="display: block; margin: 0 auto;">

More detailed information about components is described in Email components article.

## Basic styling

The main file with common styles is located in *common/styles/main.css* file. There you can also stylize some blocks or components. In addition, you can create your own .css file and import them as it is shown in the example below.

```html{2}
<style>
  @import "common/styles/main.css";
</style>
```

Another way to [style blocks](./blocks.html#block-styling) - do it directly in the code of the specific added block. For this, paste a **style** tag in the index.vue file of that block and write a css code inside of it. Use the **scoped** attribute for applying the CSS to elements of the current block only.


## Conditional comments

Microsoft’s Outlook desktop email clients support [conditional comments](https://www.sitepoint.com/internet-explorer-conditional-comments/) that are used to display specific HTML in target client version. By default, *vue-loader* strip out all HTML comments from the *vue* components. In order to preserve comments after the ET compilation it is required to add [`comments`](https://github.com/vuejs/vue-loader/pull/897) attribute to the component `template` tag.

*Example:*

```html{1}
<template comments>
	<wiz-layout class="content-wrapper" style="border-spacing: 0; background: #ffffff; table-layout: auto" align="center">
		<div>
		<!--[if gte mso 15]>
		/* YOUR CODE HERE */
		<![endif]-->	
		</div>
	</wiz-layout>
</template>
```
*Result:*

<img src="../../media/images/condtional-comments-result.jpg" alt="editMode " style="display: block; margin: 0 auto;">




