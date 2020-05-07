const path = require("path");

module.exports = {
  // runtimeCompiler: true,
  // publicPath: '/', // 设置打包文件相对路径
  // devServer: {
  //   // open: process.platform === 'darwin',
  //   // host: 'localhost',
  //   port: 8071,
  //   // open: true, //配置自动启动浏览器
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.1.203:8001/', //对应自己的接口
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api/gateway': ''
  //       }
  //     }
  //   }
  //  },
  configureWebpack: config => {
    console.log(config);
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      // 只修改开发环境配置，打包会出现找不到定义的别名的错误
      // return {
      //     resolve: {
      //         alias: {
      //             '@c': path.resolve(__dirname, './src/components/'),
      //             '@css': path.resolve(__dirname, './src/assets/css'),
      //             '@img': path.resolve(__dirname, './src/assets/img'),
      //             '@js': path.resolve(__dirname, './src/assets/js'),
      //         }
      //     }
      // }
    }
    return {
      resolve: {
        alias: {
          "@css": path.resolve(__dirname, "./src/assets/css"),
          "@img": path.resolve(__dirname, "./src/assets/img"),
          "@js": path.resolve(__dirname, "./src/assets/js"),
          "@c": path.resolve(__dirname, "./src/components")
        }
      }
    };
  }
};
