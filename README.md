##这是一个简历静态页面生成器。

* 从`resume.js`文件中取出数据，自动填充数据并排版
* 使用`React`和`Sass`制作，`Webpack`作为自动化工具
* 可以一行命令部署到page服务器

## A generator of static resume page 
* Retrieves data from `resume.js` to build an exactly beautiful Web page
* Built with `React`, `Sass` and `Webpack` 
* Deploy to `GitHub-page` just one command line

##环境要求

1. [node.js >=4.4](https://nodejs.org/en/)
2. [Ruby编程语言](https://www.ruby-lang.org/zh_cn/)
3. 若要自动部署到page服务器得先存到自己的github上，并且开启SSH Keys

##Requirements
1. [node.js >=4.4](https://nodejs.org/en/)
2. [Ruby lang](https://www.ruby-lang.org/)
3. For deploying, you should fork the repo to your GitHub and it depends on SSH Keys.  

##安装与部署

1. 点击`fork`之后在自己的仓库`git clone`到本地
2. 在Teminal执行`npm install`
3. 再执行`npm start`可以启动热加载服务器，
进入[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)可以预览内容
4. 修改根目录下的`resume.js`文件
5. 执行`npm run prod`生成静态文件到根目录下的`build`文件夹中
6. 执行`npm run deploy`可push到当前仓库的`gh-page`的branch

##Quick Start

1. After `fork` go to your Github `git clone` to your workspace
2. Run `npm install` on Terminal
3. Use `npm start` you can setup hot-load server for page,then you can check[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) 
4. Modify `resume.js` found from the root directory.
5. Run `npm run prod` will quickly generate a static HTML file to `build` directory
6. Run `npm run deploy` will push into recent repo's `gh-page` branch

##反馈

 若使用中有任何问题，欢迎反馈，可以在DEMO中找到我的联系方式

##Feedback

 Welcome feedback if you have any problems and the demo has all my contact  

