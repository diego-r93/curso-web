const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')



module.exports = {
   mode: modoDev ? 'development' : 'production',
   entry: './src/principal.js',
   output: {
      filename: 'principal.js',
      path: __dirname + '/public'
   },
   devServer: {
      static: {
         directory: "./public",
      },
      compress: true,
      port: 9000,
   },
   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin({
            parallel: true,
            terserOptions: {
               ecma: 6,
            }
         }),
         new CssMinimizerPlugin({})
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'estilo.css'
      })
   ],
   module: {
      rules: [{
         test: /\.s?[ac]ss$/,
         use: [
            MiniCssExtractPlugin.loader,
            // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
            'css-loader', // interpreta @import, url()...
            'sass-loader',
         ]
      }]
   }
}