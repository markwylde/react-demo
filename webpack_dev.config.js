var webpack = require('webpack');

module.exports = {
  entry: ['webpack/hot/dev-server', './src/App.js'],
  output: {
    path: __dirname + '/src',
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
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }, {
      test: /\.(png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js'],
    modulesDirectories: ['web_modules', 'node_modules', 'bower_components']
  },
  devServer: {
    contentBase: './src',
    hot: true,
    inline: true,
    port: 3000
  }

};
