# Installation

## Presetting

For successful eWizard CLI installation, you should have the Node.js platform installed on your local PC. Visit the [official website](https://nodejs.org/en/) to download the latest version. 
::: warning Note!
We strongly recommend to use the LTS version, as any other version may cause errors while working with eWizard CLI.
:::

Also, verify the availability of the Git system. To download it, click [here](https://git-scm.com/).

## Installing 

### Installation for cutstomers

To download the eWizard CLI, use the command prompt as administrator and run the following command: 
```
npm install -g ewizard-cli
```
This command will download all required modules and install them globally on your local PC.

### Installation for internal users

To install eWizard CLI you should perform the following commands in some empty folder:

* git clone git@git.qapint.com:ewizardjs/ewizard-cli.git
* cd ewizard-cli
* git checkout [branch you need] (develop || master)
* npm i
* npm link

After all these steps eWizard CLI will be successfully installed on your PC.

## Starting

After installing the eWizard CLI you have to authorize. For this, use the command below:

```
wiz login
```

It will open the page in your default browser where you have to enter your login and password.
After successful authorization, you will see the next page.

![There are some problems with downloading of this image.](../media/images/ewizard_login.png)

