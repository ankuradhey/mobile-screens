const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'main': './src/input.css'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/dialerpad.html'
  }),
  new HtmlWebpackPlugin({
    filename: 'sms.html',
    template: 'src/sms.html'
  }),
  new HtmlWebpackPlugin({
    filename: 'sidebar.html',
    template: 'src/sidebar.html'
  })
 ]
};