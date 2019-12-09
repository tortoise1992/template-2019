
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // 启用hash路由
  history: 'hash',
  // 兼容性配置
  targets: {
    ie: 9,
  },  
  "disableCSSModules": true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'create',
      dll: true,
      // 打开国际化配置项
      locale: {
        enable: true,
      },
      routes: {
        exclude: [        
          /components\//,
        ],
      },
    }],
  ],
  // 配置antd的主题色
  "theme": {
    "@primary-color": "rgb(223,4,81)"
  }
}
