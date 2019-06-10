const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: 'Selector.js',
    libraryTarget: 'commonjs2',
  },
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
}
