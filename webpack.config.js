// via https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/
// This webpack config is basically saying that the entry point of our application is from index.js,
// so pull everything that’s needed by that file, then put the output of the bundling process into the dist directory,
// named bundle.js.
// Oh, if we’re running on webpack-dev-server,
// then tell the server to serve content from contentBase config,
// which is the same directory this config is in.
// For all .js or .jsx files, use babel-loader to transpile all of them.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    port: 5001
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/env",
                "@babel/react",
                "@emotion/babel-preset-css-prop"
              ],
              plugins: [
                "transform-class-properties",
                "@babel/proposal-object-rest-spread",
                "emotion"
              ]
            }
          }
        ]
      },
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 2
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         outputStyle: 'expanded',
      //         sourceMap: true,
      //         sourceMapContents: true
      //       }
      //     }
      //   ]
      // },
      {
        type: 'javascript/auto',
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "./index.html")
    })
  ]
};
