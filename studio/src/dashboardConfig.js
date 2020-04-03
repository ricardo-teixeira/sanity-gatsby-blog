export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e878a5558403affd27c4d61',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-em2cumz2',
                  apiId: '403f6dc9-722c-46c7-a6a3-a7aea5a15493'
                },
                {
                  buildHookId: '5e878a55fc9ecb0f7d9b95e1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xavoftdp',
                  apiId: 'd6746ee1-8ff6-43bf-b823-d0b83908f85a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ricardo-teixeira/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xavoftdp.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
