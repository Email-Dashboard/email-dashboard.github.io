module.exports = {
  dest: 'docs',
  title: 'Email Dashboard',
  description: '📪 An interactive emailing management service with scheduling, templating, tracking...',
  base: '',
  // head: [
  //   ['link', { rel: 'icon', href: `/img/logo.png` }],
  //   ['link', { rel: 'manifest', href: '/manifest.json' }],
  //   ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  //   ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  //   ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  //   ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
  //   ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
  //   ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
  //   ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  // ],
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/Email-Dashboard/Email-Dashboard' },
      { text: 'Demo', link: 'http://email-dashboard.svteknoloji.com' }
    ],
    sidebar: [
      ['/guide/', 'Home'],
      '/guide/deployment',
      '/guide/development',
      '/guide/usage'
    ]
  },
  serviceWorker: true,
  port: 8000
}
