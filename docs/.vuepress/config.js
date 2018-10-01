module.exports = {
  title: "eWizard.js",
  description: " eDetailing Development Framework",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/documentation/" }
    ],
    algolia: {
      // DANGER!!! Change to real key when you register at https://community.algolia.com/docsearch/
      apiKey: "85cc3221c9f23bfbaa4e3913dd7625ea", // from Vue site
      indexName: "vuejs" // from Vue site
    },
    lastUpdated: "Last Updated",
    sidebarDepth: 2,
    sidebar: {
      "/documentation/": [
        "",
        "Installation",
        ["Getting-started", "Getting started"],
        "component",
        "attributes",
        ["structure", "Presentation structure"],
        "navigator",
        ["Settings", "Settings"],
        {
          title: "Email Development",
          collapasble: false,
          children: [
            "email-development/getting-started",
            "email-development/folder-structure"
          ]
        }
      ]
    },
    // TODO: Add Github link
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'QAPInt/ewizardjs-docs',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: "QAPInt/ewizardjs-docs",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Help us improve this page!"
  }
};