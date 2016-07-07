module.exports = {
  title: '姚帆 - 个人简历',
  ga_id: 'UA-80293062-1',
  name: '姚帆',
  repo: 'https://github.com/yoohan-dex/resume.git',
  job_description: ['前端工程师', 'JS工程师'],
  contact: [{
    type: 'email',
    value: 'yao460733480@outlook.com',
  }, {
    type: 'wechat',
    value: 'yoohan-dex',
  }, {
    type: 'github',
    value: 'yoohan-dex',
  }, {
    type: 'blog',
    value: '暂无',
  }, {
    type: 'phone',
    value: '13824829707',
  }, {
    type: 'weibo',
    value: 'yoohan555',
  }],
  education: {
    type: 'undergraduate',
    school: '广东海洋大学',
    major: '计算机科学（本科）',
    start: 2013,
    end: 2017,
    honor: ['2016年大力神杯`嵌入式省赛三等奖`', '2017年度优秀毕业生'],
  },
  language: {
    type: 'english',
    certifications: [{
      type: 'CET-4',
      full: '710',
      score: '580',
    }, {
      type: 'CET-6',
      full: '710',
      score: '480',
    }],
    descriptions: [
      '能 `流畅阅读` 英文专业书籍、文档',
      '可 `无字幕` 观看MOOC课程、开发者大会视频',
      '能够在`Medium`、`Discord`、`github` 等社区正常交流',
    ],
  },
  experience: [{
    place: '腾讯用户研究与体验设计部',
    en: 'Frontend',
    ch: '前端开发',
    start: '2017.06.12',
    end: '2017.012.01',
    descriptions: [
      '使用 `HTML`、`CSS` 快速构建出兼容主流浏览器的页面',
      '进行 `符合W3C标准` 的网站重构',
      '使用`wepback`和`Sass`完成可扩增的`自动化工程部署`',
    ],
  }, {
    place: '广东海洋大学领沃实验室',
    en: 'DeepLearning',
    ch: '深度学习',
    start: '2016.01.1',
    end: '2016.10.01',
    descriptions: [
      '引导新生走进前端的世界',
      '秘密开发足以 `毁灭世界` 的 `人工智能`',
      '负责日常的杀人灭口工作',
    ],
  }],
  projects: [{
    ch: '简历生成器',
    en: 'Resume Generator',
    demo: 'https://yoohan-dex.github.io',
    source: 'https://github.com/yoohan-dex/react-resume',
    descriptions: [
      '这份在线简历的生成器',
      '从 `js文件 ` 中读取数据，使用 `React `生成 `HTML`，`Sass` 生成响应式样式',
      '使用 `Webpack` 编译压缩及管理',
    ],
  }, {
    ch: 'redux单页登录流探索',
    en: 'Redux Loginflow',
    source: 'https://github.com/yoohan-dex/myBlog',
    descriptions: [
      '使用 `Redux` 的所有生态库进行 `前端数据流管理`',
      '使用 `Graphql` 做数据接口, `Express`和`mongodb`后台管理, `Nginx`负载均衡',
      '尝试探索`Progress Web App`',
    ],
  }],
  skills: [{
    ch: '前端开发',
    en: 'frontend',
    items: [{
      brief: ' `HTML` , `CSS` ',
      descriptions: [
        '能够编写语义化的 `HTML`，模块化的 `CSS`，实现较复杂的布局与动画',
        '熟悉已标准化的 `HTML5` / `CSS3` 新特性，实验项目中能尝试使用未广泛实现的新标准',
      ],
    }, {
      brief: '`ECMAScript` ( `JavaScript` )',
      descriptions: [
        '熟练使用` ES6 `, 熟悉JS `函数式编程` ',
        '熟悉 `ECMAScript` 新标准及 `JS处理工具` ',
      ],
    }, {
      brief: '`React` ， `Redux` ， `RxJS`， `Bootstrap` ',
      descriptions: [
        '熟悉`React` 与 `Redux` 及其生态库',
        '熟练使用 `Bootstrap` , `960` 等样式框架',
        '熟练使用 `Sass`，`PostCSS` 等工具',
        '在项目中使用过`RxJS`',
        '掌握基本 `SEO` ，`前端性能优化` ，并能在项目中运用',
      ],
    }],
  }, {
    ch: '后端开发',
    en: 'backend',
    items: [{
      brief: '`node.js` ，`Express` ，`mongodb` ，`Nginx` ，`Docker`',
      descriptions: [
        '熟悉node.js并能用于开发前端工作流',
        '能用 `Express` 和 `mongodb` 开发小型WebAPP',
        '使用过 `Nginx` 和 `Docker` ',
      ],
    }, {
      brief: '`Bash` ，`Git` ，`Markdown`, `VScode` ',
      descriptions: [
        '两年 `Linux` 使用经验，熟悉日常 `Bash` 命令，写 `简单脚本` ，`配置开发环境` 等',
        '熟练使用 `Git` 版本管理工具',
        '使用 `Markdown` 进行日常写作',
        '熟练配置及使用 `VScode `等现代编辑器',
      ],
    }],
  }],
};
