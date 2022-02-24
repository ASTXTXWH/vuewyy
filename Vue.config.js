module.exports = {
    publicPath:'./',
    
    // // 开启代理服务器
    devServer: {
        // open: true,
        // host: 'localhost',
        // port: 8080,
        // https: false,
        proxy: {
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{'^/api':''},
                ws: true,
                changeOrigin: true
            }
        }
    }
  }