
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const sassLoaders = [
  'css',
  'postcss',
  'sass'
]
const loaders = [{
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
const development = {
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'eval-source-map',
  context: __dirname,
  entry: {
    app: process.env.NODE_ENV === 'production' ? ['./src/app/index.js'] : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/app/index.js'
    ]
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? './dist/' : './build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  },
  devServer: {
    contentBase: './build',
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint-loader',
    //     include: path.join(__dirname, 'src')//,
    //     //exclude: /bundle\.js$/
    //   }
    // ],
    loaders: loaders
  },
  sassLoader: {
   includePaths: [path.resolve(__dirname, "./src")],
   indentedSyntax: false
 }
};
const production = {
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'eval-source-map',
  context: __dirname,
  entry: {
    app: process.env.NODE_ENV === 'production' ? ['./src/app/index.js'] : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/app/index.js'
    ]
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? './dist/' : './build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  devServer: {
    contentBase: './build',
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint-loader',
    //     include: path.join(__dirname, 'src')//,
    //     //exclude: /bundle\.js$/
    //   }
    // ],
    loaders: loaders
  }
};
const test = {
  module: {loaders: [
    {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }
  ]},
  output: {
    libraryTarget: 'commonjs2'
  }
}
const configs = { production, test, development }
const build = process.env.NODE_ENV || 'development'

module.exports = configs[build]
