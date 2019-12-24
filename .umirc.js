let routeconfig =require('./routeconfig.json')
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  treeShaking: true,
  disableCSSModules:true,
  routes:routeconfig,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'create',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  proxy:{
    '/cms':{
      target:'http://mock.ahuife.com/mock/21',
      pathRewrite: { '^/cms': '/cms' },
      changeOrigin: true
    }
  }
}
