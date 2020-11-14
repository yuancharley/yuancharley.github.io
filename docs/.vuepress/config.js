module.exports = {
  title: 'INT在线文档',
  description: 'INT. Software Group. Markdown Docs System with vuepress.',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/assets/img/int_logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/assets/img/int_logo.jpg',  // 左上角logo
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '技术文档', link: '/tech/interview/' },
      {text: 'ChangeLog', link: '/tech/interview/' },
      {text: 'INT官网', link: 'http://www.nj-int.com.cn'}
    ],
    sidebar: 'auto', // 侧边栏配置
    //lastUpdated: 'Last Updated',
  }
}
