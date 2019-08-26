var path = require('path')
const webpack = require('webpack');

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = { 
  
  devServer: {   
    contentBase: path.join(__dirname, 'client/js'),    
    compress: false,
    port: 9000
  },
  devtool: 'source-map',
  entry: {
    main: './client/js/index.js'    
  },
  plugins:[
    new webpack.LoaderOptionsPlugin({ debug: true  }),
  ],
  output:{    
    filename:  '[name].js',
    path: __dirname + '/static',
    publicPath: '/static/'
   },
   
  module: {
    rules: [
         {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
              },
            // All

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        
        use: {
          loader: "babel-loader",
          query:{
            sourceMap: true
          },
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }, 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  } 
};