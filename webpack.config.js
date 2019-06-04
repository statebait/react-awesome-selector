const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: 'Selector.js',
    libraryTarget: 'commonjs2'
  },
  entry: './src/components/Selector.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
