# vite-tools-study

## 安装vite
```方式一
npm install create-vite-app -g 
create-vite-app projectName

方式二
npm init vite-app projectName
```

- 自己实现一个vite可以从vite-project的package.json文件配置
```
"my-dev": "zf-vite",
```
## 项目搭建
- 1.通过脚手架新建项目 vite-project
- 2.自定义实现vite配置
- 3.新建zf-vite文件夹，通过npm init .初始化项目
- 4.zf-vite根目录下配置"bin"脚本，通过npm link链接到全局
- 5.vite-project项目下终端运行zf-vite,终端显示zf-vite
- vite-project项目下终端运行 npm run my-dev

