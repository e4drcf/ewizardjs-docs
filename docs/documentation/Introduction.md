## General information

eWizard CLI is an automated HTML5 framework for creative agencies and developers' teams, which lies on the background of eWizard content management platform, empowering Digital Content Factory. The technology and platform are already adopted by over 20 pharmaceutical companies and global creative agencies.

Combination of eWizard CLI and eWizard platform reduces content management efforts, facilitates agency-customer communication and collaboration, providing reusable components, automated development process, transparent review with direct connection to major CLM and DAM systems, as well as rapid content localization and updates.

eWizard CLI empowers flexible and universal eDetailing development from scratch and makes content 100% editable and reusable. Presentations developed with this technology can be easily built for multiple CLM/CRM systems and devices. Using eWizard CLI as a standard for HTML5 development ensures more productivity, agility and scalability.

## What is the eWizard presentation?

The eWizard presentation is an HTML project just like any other website. The only difference is that the eWizard presentation has a file structure compatible with eWizard builds, therefore it can be built by them for all supported platforms. The eWizard presentation is an HTML project which uses component approach to simplify a development process. The big advantage of using components is that you can add a new functionality to the presentation by installing them. The Component is a ready-for-use unit which you can integrate to the presentation. Components are developed independently from the projects where they are used. This means, that all fixes and improvements in components can be brought to your project only by updating components (normally, it's done with one console command). Since browsers don't support the component approach, at first the presentation needs to be built.

## What is a build

A build is a part of the eWizard CLI technology which transforms presentation source files to make them compatible with a destination platform.

## The Develop build

During the presentation development you will use the develop build. This is the fastest build and it's used to preview the presentation in browser. The develop build is part of eWizard CLI and is done locally on your machine. To run the develop build we use the `wiz dev` command.

You can read more about develop build commands in section `CLI commands`.

## The Production build

The Production build transforms the presentation for the CLM of your choice and is done on a server. A built presentation can be downloaded from your eWizard account (click on details of your presentation and download an appropriative build). Also, you can download a build via eWizard CLI - just run the '' command to get the list of recent builds, then find the ID of the build you want to download and run ''. A downloaded archive can be uploaded to the CLM afterwards. eWizard provides integration with some CLMs which make it possible to publish the presentation to the CLM directly.

Read more about production build commands in section `CLI commands`.

## Presentation development tools

eWizard CLI are used for an automatic content creation, also you can choose any IDE for editing files created with eWizard CLI. For editing the presentation visually use convenient eWizard CLI editor.

## Approximate workflow
Creating the presentation with eWizard CLI.
Creating the presentation structure (add slides and chapters) filling slides with the content using your IDE.
Uploading presentation to eWizard platform and make some changes there.
Exporting presentation from eWizard and continuing development by usage of eWizard CLI and IDE.
Building your presentation, which is ready for production, on eWizard server using the eWizard CLI command or do it from eWizard platform.