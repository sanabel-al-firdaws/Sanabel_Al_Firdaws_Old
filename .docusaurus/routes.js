import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Sanabel_Al_Firdaws/blog',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog', '0b3'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/archive',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/archive', '3e7'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/first-blog-post',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/first-blog-post', 'd80'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/long-blog-post',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/long-blog-post', 'ebb'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/mdx-blog-post',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/mdx-blog-post', 'a99'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/tags',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/tags', 'd02'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/tags/docusaurus',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/tags/docusaurus', '2dc'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/tags/facebook',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/tags/facebook', '228'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/tags/hello',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/tags/hello', 'f1c'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/tags/hola',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/tags/hola', '0ed'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/blog/welcome',
    component: ComponentCreator('/Sanabel_Al_Firdaws/blog/welcome', '8af'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/markdown-page',
    component: ComponentCreator('/Sanabel_Al_Firdaws/markdown-page', '413'),
    exact: true
  },
  {
    path: '/Sanabel_Al_Firdaws/docs',
    component: ComponentCreator('/Sanabel_Al_Firdaws/docs', 'd4c'),
    routes: [
      {
        path: '/Sanabel_Al_Firdaws/docs',
        component: ComponentCreator('/Sanabel_Al_Firdaws/docs', '402'),
        routes: [
          {
            path: '/Sanabel_Al_Firdaws/docs',
            component: ComponentCreator('/Sanabel_Al_Firdaws/docs', 'ff4'),
            routes: [
              {
                path: '/Sanabel_Al_Firdaws/docs/category/tutorial---basics',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/category/tutorial---basics', '042'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/category/tutorial---extras',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/category/tutorial---extras', 'e9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/intro',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/intro', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-basics/congratulations', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-basics/create-a-blog-post', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-basics/create-a-document', 'aad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-basics/create-a-page', 'd66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-basics/deploy-your-site', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-basics/markdown-features', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-extras/manage-docs-versions', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sanabel_Al_Firdaws/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Sanabel_Al_Firdaws/docs/tutorial-extras/translate-your-site', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Sanabel_Al_Firdaws/',
    component: ComponentCreator('/Sanabel_Al_Firdaws/', 'ec5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
