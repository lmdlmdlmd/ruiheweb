
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler: true,
  lintOnSave: false,
  // 跨域
  // devServer: {
  //   open: false,
  //   port: 80,
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   },
  //   // 接口转发
  //   proxy: {
  //     '/api': {
  //       target: '',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/dev': ''
  //       }
  //     }
  //   }
  // }
}