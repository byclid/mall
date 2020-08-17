const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('views',resolve('src/views'))
      .set('img',resolve('src/assets/img'))
      .set('network',resolve('src/network'))
  }
}

