const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //  关闭语法检查
  lintOnSave: false,

  // pages: {
  //   index: {
  //     // 入口 要么写，要么就 index 也不要写
  //     entry: "24-src-求和案例-vuex版/main.js"
  //   }
  // }

  // 开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  // 开启代理服务器（方式二）
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000',
  //       // 用于支持 websocket
  //       ws: true,
  //       // 用于控制请求头中的 host 值
  //       changeOrigin: true,
  //       // 路径重写
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     },
  //     '/hello': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: {
  //         '^/hello': ''
  //       }
  //     }
  //   }
  // }
})