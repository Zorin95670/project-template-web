/* eslint-disable */
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './build'),
  devServer: {
    proxy: {
      '/TEMPLATE_WEB': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
