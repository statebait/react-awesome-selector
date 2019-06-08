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
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
