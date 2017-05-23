var fs = require('fs');
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var projectRoot = path.resolve(__dirname, '../');
var srcRoot = path.resolve(projectRoot, 'src');
var partsPath = path.resolve(srcRoot, 'parts');
var parts = fs.readdirSync(partsPath).filter(function (part) {
  return part.indexOf('.') !== 0;
});
// var commonPath = path.resolve(projectRoot, '../common/');
var vueLoaderConfig = require('./vue-loader.conf');
var LessPluginFunction = require('less-plugin-functions');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack=require('webpack')
var entry={};
function getpagespath(pagePath,part,relativpath) {
  var pages = fs.readdirSync(path.resolve(partsPath, part)).filter(function (page) {
    return page.indexOf('.') !== 0;
  });

  pages.forEach(function (page) {
    let name=['.', relativpath, page, page].join('/');
    entry[part+"/"+page+"/"+page] =name ;
  });

}
parts.forEach(function (part,i) {
  getpagespath(partsPath, part,'src/parts/'+part);
})

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
 entry['vendor']=['jquery','materialjs']
module.exports = {
  entry: entry,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'router': resolve('src/router'),
      'muse-components': 'muse-ui/src',
      'mock': resolve('src/mock'),
      'materialjs':resolve('src/assets/js/material.min.js'),
      'acejs':resolve('src/assets/ace-builds/src-noconflict/ace.js'),
      'ace':resolve('src/assets/ace-builds/src-noconflict'),
      'monokai':resolve('src/assets/ace-builds/src-noconflict/theme-monokai.js'),
      'c_cpp':resolve('src/assets/ace-builds/src-noconflict/mode-c_cpp.js')
      // 'jquery':'jquery/dist/jquery.min.js'

    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
       options: vueLoaderConfig
       //  options: {
       //    loaders: {
       //      css: ExtractTextPlugin.extract({
       //        use:[{loader: 'css-loader'},{
       //          loader: "style-loader"
       //        },{
       //          loader: "less-loader"
       //        }],
       //
       //        fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
       //      }),
       //      // less:ExtractTextPlugin.extract({
       //      //   loader:"less-loader",
       //      //   fallbackLoader:'vue-style-loader'
       //      // })
       //    },
       //    postcss: [
       //      require('autoprefixer')({
       //        browsers: ['last 2 versions']
       //      })
       //    ]
       //  }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel-loader',
      },
        // {
        //     test: /\.css$/,
        //     loader:  ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader"})
        // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
    plugins: [
      // new ExtractTextPlugin("style[name].css"),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //
        //     lessLoader: {
        //         lessPlugins: [
        //             new LessPluginFunction()
        //         ]
        //     },
        //         // vue: {
        //         //     // loaders: utils.cssLoaders()
        //         //     // loaders: {
        //         //     //     less: ExtractTextPlugin.extract({ fallback:'vue-style-loader', use:'css!less'})
        //         //     // }
        //         // }
        //     }
        // }),
        // new ExtractTextPlugin({ filename:'../static/css/color.css', disable: false, allChunks: true }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           "window.jQuery": "jquery"
        }),
       //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ],

}
//console.log(utils.cssLoaders())
