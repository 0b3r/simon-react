const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    app: ['./src/index']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.html$/, 
        loader: 'raw', exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css'
      },
      {
        test: /\.scss?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css!sass'
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'file?name=images/[name].[ext]' 
      },
    ]
  }
}







