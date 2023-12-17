const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.tsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS with Babel
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader'], // Handle CSS files
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'], // Handle image files
      },
    ],
  }
};
