const path = require('path')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    client: { overlay: false },
  },
  entry: {
    main: './src/index',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: './tsconfig.web.json',
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new VanillaExtractPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.js'],
  },
}
