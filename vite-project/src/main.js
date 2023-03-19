import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')


// 默认采用的是 es6 原生的模块  (import 语法 在es6 中默认会发送一个请求)
// 默认会给vue的模块增加一个前缀 /@modules
// 把.vue文件在后端给解析成 一个对象了 （唯一就是编译了.vue文件）

// node Koa 快速搭建http服务