
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler: true,
  lintOnSave: false,
  // 跨域
  devServer: {
    open: false,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    // 接口转发
    proxy: {
      '/api': {
        target: 'http://bushishan.com:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}