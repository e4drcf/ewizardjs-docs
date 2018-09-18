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
          'component',
          'email-components'
        ],
        '/release-notes/': [
          '',
          'create',
          'install',
          'publish'
        ]
      },
      // TODO: Add Github link
      // Assumes GitHub. Can also be a full GitLab url.
      // repo: 'QAPInt/ewizardjs-docs',
      // Optional options for generating "Edit this page" link
      // if your docs are in a different repo from your main project:
      docsRepo: 'QAPInt/ewizardjs-docs',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: 'Help us improve this page!'
    } 
  }