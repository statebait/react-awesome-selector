const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: 'Selector.js',
    libraryTarget: 'commonjs2',
  },
  entry: './src/index.jsx',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  externals: [
    {
      react: 'react',
      'react-dom': 'react-dom',
      'prop-types': 'prop-types',
    },
  ],
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
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
}
