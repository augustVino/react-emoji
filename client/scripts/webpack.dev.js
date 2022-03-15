const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const { PROJECT_PATH, SERVER_HOST, SERVER_PORT } = require('./constant');

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
  // 配置 browserslist 字段会导致 webpack-dev-server 的热更新功能直接失效，为了避免这种情况需要给 webpack 配上 target 属性
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(PROJECT_PATH, './dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    // 设为true表示启用gzip压缩，加快网站打开速度
    compress: true,
    // 设为true表示第一次启动项目时自动打开默认浏览器
    open: true,
    // 设为true表示启用服务热替换配置
    hot: true,
    historyApiFallback: {
      index: path.join(PROJECT_PATH, './public/index.html'),
    },
  },
  plugins: [
    // 实际上只开启 hot: true 就会自动识别有无声明该插件，没有则自动引入，但是怕有隐藏问题这里还是手动加上了
    new webpack.HotModuleReplacementPlugin(),
  ],
});
