# Working with eWizard

There are some commands which will help you to perform different actions in eWizard via Cobalt CLI:

    co push

This command will archive your presentation and upload it to eWizard instance, you have entered in the `co login` command. Also, if you publish the same presentation again it will be updated.

    co pull

This command will download presentation from eWizard with replacing all the files in the presentation folder where the command was ran.

    co list
    
This command will display a list of presentations available in your eWizard account.

    co clone 

This command will clone a presentation from your eWizard accout by presentation's. You can check the presentation's ID's using command `co list`

