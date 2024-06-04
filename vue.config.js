const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
})

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Otras opciones de configuración...
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: '_redirects', // Ruta del archivo _redirects en el directorio raíz del proyecto
            to: '', // Ruta de destino en el directorio de salida (por defecto es el directorio raíz)
            toType: 'dir', // Tipo de destino (directorio)
          },
        ],
      }),
    ],
  },
};