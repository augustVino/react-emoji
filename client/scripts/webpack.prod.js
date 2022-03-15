const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');
const { PROJECT_PATH } = require('./constant');

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
  // 配置 browserslist 字段会导致 webpack-dev-server 的热更新功能直接失效，为了避免这种情况需要给 webpack 配上 target 属性
  target: 'browserslist',
  mode: 'production',
  devtool: false,
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(PROJECT_PATH, './dist'),
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]',
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin()],
    // splitChunks：代码分割相关配置
    // splitChunks.chunks：选择哪些内容进行优化，如果为 all 时表示即使同步和异步的代码也可以共享thunk
    // minSize：生成chunk的最小大小（以字节为单位）
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new TerserWebpackPlugin({
      extractComments: false,
      terserOptions: {
        compress: { pure_funcs: ['console.log'] },
      },
    }),
  ],
});
