<style>
pre .comment {
    color: #b3b3b3;
}

figure {
    margin:0;
}

figure:before{
    content:"Shell";
    position: absolute;
    top: 0;
    right: 0;
    color: #ccc;
    text-align: right;
    font-size: 0.75em;
    padding: 5px 10px 0;
    line-height: 15px;
    height: 15px;
    font-weight: 600;
}

.highlight {
    background-color: #f8f8f8;
}

tr:nth-child(2n){
    background-color:white;
}

</style>

# eWizard CLI commands

eWizard CLI provides a CLI interface for simplifying content creation and working with eWizard platform.
With the use of some simple CLI commands you can initialize the eDetailer, export it to appropriate CLM, push to eWizard platform or implement appropriate functionality.

eWizard CLI commands could be divided into a few groups depending on their purpose:

* Authentification
* Scaffolding
* Development
* Export

## Authentification commands

These commands will help you to log in and logout from the platform. Since eWizard platform and eWizard CLI are strongly connected, you can log in through CLI and then proceed working in eWizard platform without any extra efforts for log in.

<figure class="highlight bash">
    <pre class="code">$ wiz login [options]</pre>
</figure>

|               Parameters                              | Explanation 
|-------------------------------------------------------|-------------------------------------------------------------------
|   -i, --instance <`instance`>                         | specifies an instance to which you will be logged in  
|   -u, --user <`user`>                                 | specifies a login for authentification 
|   -p, --password <`password`>                         | specifies a password 
|   -h, --help                                          | outputs information about the command and available parameters

This command is dedicated for login to the system. As a result, after executing this command eWizard's Login page will be opened in your default browser while the console is switched to the waiting mode. In case it is not possible to open a browser from the console, you need to do it manually - an appropriate URL will be outputted in the console. After successful login, you can close a browser and continue working with eWizard CLI.

-------------------------------------
  <figure class="highlight bash">
    <pre class="code">$ wiz logout</pre>
</figure>

This command does not have any additional parameters.

This command is dedicated for log out of the system. The next time, when you will try to perform any operations, you will be warned that you are not logged in.

## eDetailing development commands

The following commands are dedicated to ease the actual development of any eDetailing content (e-mails, presentations, survey, etc). They provide possibilities for automation content creation.

-------------------------------------
  <figure class="highlight bash">
    <pre class="code">$ wiz init</pre>
</figure>

|         Parameters       | Explanation 
|--------------------------|-------------------------------------------------------------------
|     -h, --help           | outputs information about the command and available parameters

This command will initialize the structure for some eDetailer. After running the command, you will be prompted about some project settings like `type`, `description`, `name`, etc. When the command will be executed, you will be able to check the initial structure of your eDetailer.

-------------------------------------
<figure class="highlight bash">
    <pre class="code">$ wiz dev</pre>
</figure>

|         Parameters       | Explanation 
|--------------------------|-------------------------------------------------------------------
|     -w, --watch          | will continuously build presentation source files, so after making changes in IDE, they will be instantly reflected in the browser

This command will run a develop build, so you will be able to check how the project is looking in the browser.

-------------------------------------
<figure class="highlight bash">
    <pre class="code">$ wiz install &lt;component-name&gt;</pre>
</figure>

|         Parameters       | Explanation 
|--------------------------|-------------------------------------------------------------------
|     -h, --help           | outputs information about the command and available parameters
 
 This command will install eWizard component into your eDetailer, so you will be able to add it on the markup or use component API if any exists.

-------------------------------------
<figure class="highlight bash">
    <pre class="code">$ wiz slide &lt;slideId&gt;</pre>
</figure>

|         Parameters       | Explanation 
|--------------------------|-------------------------------------------------------------------
|  --chapter <`chapterID`> | specifies the chapterID to which slide should be added 

This command will create a slide with specified slideID. All additional .html, .css will be also created.

-------------------------------------
<figure class="highlight bash">
    <pre class="code">$ wiz config</pre>
</figure>

|         Parameters          | Explanation 
|-----------------------------|------------------------------------------------------------------
|  -w, --ewizard  <`eWizard`> | set eWizard authorization server, by default starts with https://
|  -r, --reset [key]          | reset configuration
|  -h, --help  <`eWizard`>    | outputs information about the command and available parameters

This command will help you to change some of your account configurations.

-------------------------------------
<figure class="highlight bash">
    <pre class="code">$ wiz archive</pre>
</figure>

This command does not have any additional parameters. It will create a zip-archive of your eDetailer.