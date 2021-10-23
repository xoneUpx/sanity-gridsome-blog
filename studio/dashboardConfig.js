export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61744c62387f63f94705700a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-gh8hv819',
                  apiId: 'f921b02a-c8c6-4bd6-a910-f5f83ae0cfd0'
                },
                {
                  buildHookId: '61744c62eba7b51809aae27a',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-wixawvsp',
                  apiId: '0f0eb7e8-4e90-4c03-bfac-49f686a9d5cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xoneUpx/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-wixawvsp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
