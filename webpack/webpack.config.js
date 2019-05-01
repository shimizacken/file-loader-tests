const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./webpack.loaders.js');
const PRODUCTION = 'production';

module.exports = env => {
  
  isProductionEnv = (env === PRODUCTION);

  return {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
      filename: '[name].js',
      path: path.resolve('./build')
    },
    module: {
      rules: loaders(env)
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        files: {
            css: ['style.css'],
            js: ['bundle.js'],
      }
    }),
      isProductionEnv && new CleanWebpackPlugin({verbose: true})
    ].filter(Boolean),
    devServer: {
      port: 5050
    }
  };
};
