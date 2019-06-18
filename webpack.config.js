const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist' ),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(pdf)$/,
            use: 'file-loader?name=[path][name].[ext]'
          },
          {
            test: /\.(jpg|png|svg|gif|mp4)$/,
            loader: 'url-loader',
          },
          {
            test: /\.js$/, 
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            })
        }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
  };
};

