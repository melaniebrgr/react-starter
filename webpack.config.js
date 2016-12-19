var HTMLWebpackPlugin = require('html-webpack-plugin'); //generate HTML file that includes webpack bundle(s) 
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //extract CSS

module.exports = {
  entry: [
    __dirname + '/app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass") 
      }
    ]
  },  
  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + '/app/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin("styles.css")
  ]
};