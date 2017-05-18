var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}
// exports.cssLoaders = function (options) {
//     options = options || {};
//     // generate loader string to be used with extract text plugin
//     function generateLoaders(loaders) {
//         var sourceLoader = loaders.map(function (loader) {
//             var extraParamChar;
//             if (/\?/.test(loader)) {
//                 loader = loader.replace(/\?/, '-loader?');
//                 extraParamChar = '&';
//             }
//             else {
//                 loader = loader + '-loader';
//                 extraParamChar = '?';
//             }
//             return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
//         }).join('!');
//
//         // Extract CSS when that option is specified
//         // (which is the case during production build)
//         if (options.extract) {
//             return ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: sourceLoader })
//             // return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
//         }
//         else {
//             return ['vue-style-loader', sourceLoader].join('!');
//         }
//     }
//
//     // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
//     return {
//         css: generateLoaders(['css']),
//         postcss: generateLoaders(['css']),
//         less: generateLoaders(['css', 'less']),
//         sass: generateLoaders(['css', 'sass?indentedSyntax']),
//         scss: generateLoaders(['css', 'sass']),
//         stylus: generateLoaders(['css', 'stylus']),
//         styl: generateLoaders(['css', 'stylus'])
//     };
// };
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}
// 自动生成html
exports.generatHtml = function (options, isDev) {
    var baseWebpackConfig = options.baseWebpackConfig;
    var entries = baseWebpackConfig.entry;
    var ret = [];
    //console.log(entries)
    for (var entry in entries) {
        var entryValue = entries[entry];

        if(isDev){
          if (Array.isArray(entryValue)) {
            entryValue = entryValue.filter(function (v) {
              return v.indexOf('/src/parts/') > -1;
            })[0];
          }
          if (entryValue&&entryValue.indexOf('/common/common') === -1) {
            ret.push(new HtmlWebpackPlugin({
              filename: path.resolve(__dirname, '..', 'dist', 'parts', entry + '.html'),
              template: path.resolve(__dirname, '..', entryValue + '.html'),
              chunks: isDev ? ['common','vendor', entry] : ['common','vendor', entry],
              chunksSortMode: 'auto',
              minify:{    //压缩HTML文件
                                removeComments:true,    //移除HTML中的注释
                              collapseWhitespace:false    //删除空白符与换行符
                     }
            }));
          }
        }else {
          if (entryValue&&!Array.isArray(entryValue)&&entryValue.indexOf('/common/common') === -1) {
            ret.push(new HtmlWebpackPlugin({
              filename: path.resolve(__dirname, '..', 'dist', 'parts', entry + '.html'),
              template: path.resolve(__dirname, '..', entryValue + '.html'),
              chunks: isDev ? ['common','vendor', entry] : ['common','vendor', entry],
              chunksSortMode: 'auto'
            }));
          }
        }

    }
    return ret;
};
