const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const ForkTsWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { PROJECT_PATH } = require('./constant');
const { isProd } = require('./config/env');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, './src/index.tsx'),
  },
  resolve: {
    alias: {
      '@src': path.resolve(PROJECT_PATH, './src'),
      '@components': path.resolve(PROJECT_PATH, './src/components'),
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          isProd
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: true,
                },
              }
            : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.png$/, /\.jpe?g$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\._less$/,
        use: [
          'babel-loader',
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'scoped',
            },
          },
        ],
      },
    ],
  },
  cache: {
    //   cache.type：缓存类型，值为 memory 或 filesystem，分别代表基于内存的临时缓存，以及基于文件系统的持久化缓存
    // cache.buildDependencies：全局缓存失效的一种机制，配置 {config: [__filename]}，表示当配置文件内容或配置文件依赖的模块文件发生变化时，当前的构建缓存即失效`
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: 'public',
          from: '*',
          to: path.resolve(PROJECT_PATH, './dist/public'),
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/index.html'),
    }),

    new WebpackBar({
      name: 'Link Startou!!!',
      color: '#52c42a',
    }),

    new ForkTsWebpackPlugin({
      typescript: {
        configFile: path.resolve(PROJECT_PATH, './tsconfig.json'),
      },
    }),

    new CleanWebpackPlugin(),
  ],
};
