module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': '/docs/zh'
  //     }
  //   }
  // },
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/assets/img/int_logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  plugins: [],
  title: 'INT开发在线文档',
  description: 'INT. Software Group. Markdown Docs System with vuepress.',
  /*locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'INT在线文档',
      description: 'INT. Software Group. Markdown Docs System with vuepress.'
    }
  },*/
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '技术文档', link: '/zh/guide/' },
      {text: 'ChangeLog', link: '/zh/changeLog/' },
      {text: 'INT官网', link: 'http://www.nj-int.com.cn'}
    ],
    sidebar: [
      '/',
      '/zh/guide/',
      '/zh/java/ems/INT-eEMS架构设计文档',
      '/zh/changeLog/'
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    /*locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
        ],
        sidebar: {
          '/': [/!* ... *!/],
          '/nested/': [/!* ... *!/]
        }
      },
      '/zh/': {
        //logo: '/assets/img/int_logo.jpg',  // 左上角logo
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav:[ // 导航栏配置
          {text: '首页', link: '/zh/' },
          {text: '技术文档', link: '/zh/guide/' },
          {text: 'ChangeLog', link: '/zh/guide/ChangeLog' },
          {text: 'INT官网', link: 'http://www.nj-int.com.cn'}
        ],
        sidebar: {
          '/ems': [
            {
              title: '新能源管理系统架构设计文档',
              collapsable: false
            }
          ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
      }
    }*/
  }
}
