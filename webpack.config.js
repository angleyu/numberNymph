const  TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  mode: "none",
  output: {
    filename: '[name].js',
    library: 'largeNumber',
    libraryTarget: 'umd', // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    libraryExport: 'default', // 对外暴露default属性，就可以直接调用default里的属性
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /.\min\.js$/
      })
    ]
  }
}
// TerserPlugin 压缩es6
