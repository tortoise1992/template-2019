## 说明文档

### 项目介绍

技术栈：React+Umi+Ant Design+axios
特别说明，没有redux。正如redux的作者所说的，如果你不知道你为什么要用redux，那么请不要使用。从本人多年的工作经验来看，大多数的中小型项目，基本是可以忽略redux的。

### 目录/文件说明
1. `/mock`用于存放本地开发时候的mock文件，该文件夹下面的全部js（包括多级文件夹），只要有`export default`，都能被自动模拟接口，具体用法可参见项目代码；
2. `/src/assets`静态资源；
3. `/src/components`公共组件；
4. `/src/config`自定义的配置文件；
5. `/src/layouts`布局组件，主要有空白布局和基础布局，分别适用于登录页面和系统内页，可自行添加；
6. `/src/pages`页面组件存放位置。特别说明：本项目使用的约定式路由，即在pages下面建立了子文件夹，对应的文件夹路径就会自动映射为前端路由。举例：`/pages/home/index.js`，这个组件就会生成`/home`的路由。如果不想home下面的其他js文件也被映射路由怎么办？那么写在components文件夹下面，就会被过滤掉。更多用法，请参考Umi的官方文档。
7. `/routes`前端登录权限判断；
8. `axios.js`axios的一些封装方法；
9. `global.css`全局样式；
10. `.umirc.js`Umi的配置，大部分已加了注释，具体扩展可以参考官方文档；

> 其他的就是一些环境配置，大同小异，就不一一说明了，基本也无需自定义。

### 使用方法
1. 安装依赖 `npm install`或者`cnpm install`
2. 运行 `npm start`
3. 打包 `npm run build`