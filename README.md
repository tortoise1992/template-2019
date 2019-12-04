### 后台管理系统

#### 目录结构
- `/build`项目打包输出目录。
- `/public`项目静态文件目录。
- `/src`本地开发目录（主要代码）。
- `/config-overrides.js`覆盖`create-react-app`默认的webpack配置，支持自定义插件和antd的自定义主题配置。
- `/src/components`项目中复用的公共组件，诸如Loading和404之类的。
- `/src/layout`布局模块，利用`props.children`作为插槽方便嵌入各种大布局的模板。
- `/src/libs`封装的类库或者第三方的依赖包。
- `/src/pages`主要的页面模块文件，默认和路由定义的层级结构互相对应，便于查找。模块内部贯彻文件下钻的思想，抛弃被人津津乐道的Redux。因为，对于我们一般的常规项目而言，本地存储已经完全够用了。
- `/route`前端路由权限集中配置
- `axios.js`统一封装的请求文件
- `index.js`项目的入口文件
- `reset.less`css样式重置



#### 常见问题

