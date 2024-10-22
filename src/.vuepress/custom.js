/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "astering",
    repo: "Issue-Blog",
    clientId: "Ov23liXxJt9R7qNYIywE",
    clientSecret: "ebaf8f4c1ee9ca498206c8114642704114c7f4c0"
  },

  repoConfig: {
    owner: "astering",
    repo: "Issue-Blog",
    pushBranch: "pages",
    email: "131938961+astering@users.noreply.github.com",
    filterUsers: ['astering']
  },

  title: "Astering's Blog",
  description: "You are not alone.",
  customDomain: "",
  base: "/Issue-Blog/",

  slogan: {
    main: "胜地不常，",
    sub: "盛筵难再。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/Issue-Blog"
      },
      {
        name: "Github",
        link: "https://github.com/astering"
      },
      {
        name: "Source",
        link: "https://github.com/astering/Issue-Blog"
      },
      {
        name: "Docs",
        link: "https://astering.github.io/docsify"
      },
      {
        name: "CV",
        link: "/Issue-Blog/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "estertion",
        link: "https://estertion.win/"
      },
      {
        name: "subbers",
        link: "https://subbers.org/subtitles/"
      }
    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "并没有备案",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://tiebapic.baidu.com/favicon.ico"
      }
    ]
  ]
}

module.exports = mainConfig
