const StaticSitePlugin = require('static-site-generator-webpack-plugin');
const resumeData = require('./resume.js');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_module/,
        query: {
          presets: ['es2016', 'react'],
        },
      }, {
        test: /\.scss$/,
        loaders: ['css-loader?sourceMap=true', 'postcss', 'sass'],
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]',
      },
    ],
  },
  postcss: [
    autoprefixer,
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, './app/sass/utils'),
                  path.resolve(__dirname, './app/sass/components'),
                  path.resolve(__dirname, './app/sass/wheels')],
    outputStyle: 'compressed',
    sourceMap: true,
  },
  resolve: {
    modules: ['app', 'node_module'],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.scss',
    ],
    packageMains: [
      'jsnext:main',
      'main',
    ],
  },
  devtool: 'source-map',
  plugins: [
    new StaticSitePlugin('bundle.js', ['/build', '/'], resumeData),
  ],
};
