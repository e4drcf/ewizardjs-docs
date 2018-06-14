module.exports = {
    title: 'eWizard.js',
    description: ' eDetailing Development Framework',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Documentation', link: '/documentation/' },
        { text: 'Release Notes', link: '/release-notes/' },
        { text: 'Components', link: 'https://components.cobalt-engine.com/' },
      ],
      algolia: {
        // DANGER!!! Change to real key when you register at https://community.algolia.com/docsearch/
        apiKey: '85cc3221c9f23bfbaa4e3913dd7625ea', // from Vue site
        indexName: 'vuejs' // from Vue site
      },
      lastUpdated: 'Last Updated',
      sidebarDepth: 2,
      sidebar: {
        '/guide/': [
          '',
          'start-tutorial'
        ],
        '/documentation/': [
          '',
          'attributes',
          'component'
        ],
        '/release-notes/': [
          '',
          'create',
          'install',
          'publish'
        ],
        '/': [
          '',
          'contact',
          'about'
        ]
      },
      // TODO: Add Github link
      // Assumes GitHub. Can also be a full GitLab url.
      repo: 'QAPInt/ewizardjs-docs',
      // Customising the header label
      // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
      repoLabel: 'Contribute!',

      // Optional options for generating "Edit this page" link

      // if your docs are in a different repo from your main project:
      docsRepo: 'QAPInt/ewizardjs-docs',
      // if your docs are not at the root of the repo:
      docsDir: 'docs',
      // if your docs are in a specific branch (defaults to 'master'):
      docsBranch: 'master',
      // defaults to false, set to true to enable
      editLinks: true,
      // custom text for edit link. Defaults to "Edit this page"
      editLinkText: 'Help us improve this page!'
    }
  }