### Ahuife进销存管理系统

#### 目录结构
- `/build`项目打包输出目录。
- `/public`项目静态文件目录。
- `/src`本地开发目录（主要代码）。
- `/config-overrides.js`覆盖`create-react-app`默认的webpack配置，支持自定义插件和antd的自定义主题配置。
- `/src/components`项目中复用的公共组件，诸如Loading和404之类的。
- `/src/config`项目的一些配置文件，方便快速修改项目的通用设置变量。
- `/src/data`项目本地开发的时候模拟的json接口文件，调用的时候使用require的形式：`const res=require('@/data/authorize/login.json')`，实际开发联调的时候只要后端数据格式和json文件定义一致即可。
- `/src/layout`布局模块，利用`props.children`作为插槽方便嵌入各种大布局的模板。
- `/src/libs`封装的类库或者第三方的依赖包。
- `/src/pages`主要的页面模块文件，默认和路由定义的层级结构互相对应，便于查找。模块内部贯彻文件下钻的思想，抛弃被人津津乐道的Redux。因为，对于我们一般的常规项目而言，本地存储已经完全够用了。
- `/route`前端路由权限集中配置
- `axios.js`统一封装的请求文件
- `index.js`项目的入口文件
- `reset.less`css样式重置

#### 项目模块
- [ ] 我的桌面
- [ ] 资料管理
    - [ ] 基础资料
        - [ ] 客户管理
        - [ ] 供应商管理
        - [ ] 仓库管理
        - [ ] 商品管理
        - [ ] 账户管理
        - [ ] 职员管理
        - [ ] 权限管理
        - [ ] 结账与反结账
        - [ ] 操作日志
    - [ ] 辅助资料
        - [ ] 客户类别
        - [ ] 供应商类别
        - [ ] 商品类别
        - [ ] 支出类别
        - [ ] 收入类别
        - [ ] 计量单位
        - [ ] 结算方式
        - [ ] 税率
        - [ ] 单据编码规则
- [ ] 购货管理
    - [ ] 采购信息
    - [ ] 采购报表
- [ ] 销货管理
    - [ ] 销货信息
    - [ ] 销货报表
- [ ] 仓库管理
    - [ ] 存货信息
    - [ ] 存货报表
- [ ] 资金管理
    - [ ] 资金单据
    - [ ] 资金报表
#### 常见问题

