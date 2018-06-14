# Software requirements

1. First, you need to install Node.js platform from [official site](http://nodejs.org/). Due to this program you will be able to install components which are NPM modules represented by Node.js package manager and is installed along with Node.js. It's *strongly recommended* to use Node.js LTS version as we are checking compatibility of Cobalt CLI with later versions of Node.js.

1. Then install the latest version of [Git](http://git-scm.com/).

	<details>Ось
	<summary>Installation for Windows</summary>
	Select option `Use git from the Windows Command Prompt`

	![step 1](http://static.cobalt-engine.com/documentation/img/engine-wiki/install-git-1.png)

	Select option `Use Windows' default console window`	

	![step 1](http://static.cobalt-engine.com/documentation/img/engine-wiki/install-git-2.png)

	</details>

	<details>
	<summary>Installation for Mac OS</summary>
		Visit the <a href = "http://git-scm.com/">Git</a> site and download the last version of it.
	</details>

	<details>
	<summary>Installation for Unix and Linux</summary>
		Commands for installing git on your computer are described <a href = "https://git-scm.com/download/linux">here</a>
	</details>


## Installing Cobalt CLI

Cobalt CLI is an NPM package. To install it, run following command in console:

	npm i -g cobalt-cli --registry http://npm.cobalt-engine.com/

This command also installs some dependencies for the Cobalt CLI, they will be highlighted by yellow color.

You can check whether you have installed the program properly - run Cobalt CLI command, for example - `co -V`. This command will show the current version of Cobalt CLI.
 
 ![alt text](http://static.cobalt-engine.com/documentation/img/engine-wiki/co-cli-image-new.PNG)

## Updating Cobalt CLI

You can update Cobalt CLI by reinstalling it.

Remove Cobalt CLI module:

	npm uninstall -g cobalt-cli
	
Clean NPM cache:

    npm cache clean

Then install it again:

	npm i -g cobalt-cli --registry http://npm.cobalt-engine.com/

## Get help

To get Cobalt CLI help, type the command below

    co --help

Also, you can run the following command in order to get a help about command which creates a build:

    co build -h

## Version

Use the command below to get Cobalt CLI version:

    co --version

or shorthand:

    co -V

## Authorize

Enter the command below to authorize:

	co login

Enter URL of your eWizard instance, email and password.

    Ewizard instance: http://ewizard-instance.com
	Email: your@email.com
    Password: ******

After all these steps, you will see the successful login message:

	Successfully logged in!

## Deauthorize

Enter the command below to deauthorize:

	co logout

Successful logout message should appear:

    Successfully logged out!