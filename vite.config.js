import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
  // ,devServer: {
  //   port: 8000,
  //   proxy: {
  //     '/api': {
  //       target: 'http://baidu.com/',  		//要请求的域名
  //       pathRewrite:{'^/api':''},			//通过pathRewrite重写地址，将前缀/api转为/
  //       ws: false,							// 是否启用websockets
  //       changeOrigin: true					//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //     }
  //   }
  // }
})
