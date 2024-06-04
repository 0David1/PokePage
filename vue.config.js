const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
})

const path = require('path');

module.exports = {
  // Otras opciones de configuración...
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args[0].push({
          from: path.resolve(__dirname, '_redirects'),
          to: path.resolve(__dirname, 'dist'),
          toType: 'dir'
        });
        return args;
      });
  }
};