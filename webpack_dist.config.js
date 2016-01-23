var webpack = require('webpack');

module.exports = {
  entry: ['./src/App.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'app.min.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css-loader'
    }, {
      test: /\.scss$/,
      loader: 'style!css?sourceMap!sass?sourceMap'
    }, {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel-loader']
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js'],
    modulesDirectories: ['node_modules']
  }

};
