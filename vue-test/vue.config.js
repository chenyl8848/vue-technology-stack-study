const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //  关闭语法检查
  lintOnSave: false,
  
  // pages: {
  //   index: {
  //     // 入口 要么写，要么就 index 也不要写
  //     entry: "src/peiqi.js"
  //   }
  // }
})
