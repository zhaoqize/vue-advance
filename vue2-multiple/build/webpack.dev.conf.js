var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new HtmlWebpackPlugin({
      filename:'./pages/boys/index.html',
      template:'./src/pages/boys/index.html',
      inject: true,
      chunks:['pages/boys/index']
    }),
    new HtmlWebpackPlugin({
      filename:'./pages/goods/index.html',
      template:'./src/pages/goods/index.html',
      inject: true,
      chunks:['pages/goods/index']
    }),
    new HtmlWebpackPlugin({
      filename:'./pages/index/index.html',
      template:'./src/pages/index/index.html',
      inject: true,
      chunks:['pages/index/index']
    }),
    new HtmlWebpackPlugin({
      filename:'./pages/sotho/index.html',
      template:'./src/pages/sotho/index.html',
      inject: true,
      chunks:['pages/sotho/index']
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new FriendlyErrorsPlugin()
  ]
})
