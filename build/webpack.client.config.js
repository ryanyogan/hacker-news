const webpack = require('webpack');
const base = require('./webpack.base.config');
const vueConfig = require('./vue-loader.config');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');

const config = Object.assign({}, base, {
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {
      'create-api': './create-api-client.js',
    }),
  },
  plugins: (base.plugins || []).concat([
    // strip comments in vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(proces.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    // generate output html
    new HTMLPlugin({
      template: 'src/index.template.html',
    }),
  ]),
});

if (process.env.NODE_ENV === 'production') {
  vueConfig.loaders = {
    stylus: ExtractTextPlugin.extract({
      loader: 'css-loader!stylus-loader',
      fallbackLoader: 'vue-style-loader',
    }),
  };

  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),

    new webpack.LoaderOptionsPlugin({
      compress: {
        warnings: false,
      },
    }),

    new SWPrecachePlugin({
      cacheId: 'ryan-hn',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/],
    }),
  );
}

module.exports = config;
