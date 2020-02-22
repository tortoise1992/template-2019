import React, { Component } from 'react';
import { Button, Tree } from 'antd';
// import { getAction, postAction } from 'src/axios'
const TreeNode = Tree.TreeNode;

export default class JueSe extends Component {
    state = {
        menuLists: [],  //菜单列表
        selectedKeys: [],
        halfCheckMenu: []
    }

    componentDidMount(){
        this.getMenuLists();
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            this.getRoleMenuLists()
        }
    }

    getMenuLists(){
        let res = {"success":true,"msg":"成功","obj":[{"id":10,"parentId":-1,"name":"行为画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":10,"tags":null,"subMenus":[{"id":11,"parentId":10,"name":"群体画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":11,"tags":null,"subMenus":[{"id":111,"parentId":11,"name":"整体画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":111,"tags":null,"subMenus":[]},{"id":112,"parentId":11,"name":"学生分布","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":112,"tags":null,"subMenus":[]},{"id":113,"parentId":11,"name":"学业分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":113,"tags":null,"subMenus":[]},{"id":114,"parentId":11,"name":"毕业分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":114,"tags":null,"subMenus":[]},{"id":115,"parentId":11,"name":"消费分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":115,"tags":null,"subMenus":[]},{"id":116,"parentId":11,"name":"上网分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":116,"tags":null,"subMenus":[]},{"id":117,"parentId":11,"name":"上课分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":117,"tags":null,"subMenus":[]},{"id":118,"parentId":11,"name":"图书分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":118,"tags":null,"subMenus":[]}]},{"id":12,"parentId":10,"name":"个人画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":12,"tags":null,"subMenus":[{"id":121,"parentId":12,"name":"学生列表","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":121,"tags":null,"subMenus":[]},{"id":122,"parentId":12,"name":"整体画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":122,"tags":null,"subMenus":[]},{"id":123,"parentId":12,"name":"学业成绩","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":123,"tags":null,"subMenus":[]},{"id":124,"parentId":12,"name":"消费情况","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":124,"tags":null,"subMenus":[]},{"id":125,"parentId":12,"name":"图书借阅","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":125,"tags":null,"subMenus":[]},{"id":126,"parentId":12,"name":"上网情况","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":126,"tags":null,"subMenus":[]}]}]},{"id":20,"parentId":-1,"name":"综合预警","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":20,"tags":null,"subMenus":[]},{"id":30,"parentId":-1,"name":"精准资助","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":30,"tags":null,"subMenus":[{"id":31,"parentId":30,"name":"家庭经济困难学生分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":31,"tags":null,"subMenus":[]},{"id":32,"parentId":30,"name":"家庭经济困难学生查询","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":32,"tags":null,"subMenus":[]},{"id":33,"parentId":30,"name":"异常家庭经济困难学生","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":33,"tags":null,"subMenus":[]},{"id":34,"parentId":30,"name":"建议关爱学生","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":34,"tags":null,"subMenus":[]}]},{"id":40,"parentId":-1,"name":"心理健康","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":40,"tags":null,"subMenus":[{"id":41,"parentId":40,"name":"心理健康分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":41,"tags":null,"subMenus":[]},{"id":42,"parentId":40,"name":"心理健康预警","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":42,"tags":null,"subMenus":[]}]},{"id":50,"parentId":-1,"name":"系统设置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":50,"tags":null,"subMenus":[{"id":51,"parentId":50,"name":"预警设置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":51,"tags":null,"subMenus":[]},{"id":52,"parentId":50,"name":"预警白名单配置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":52,"tags":null,"subMenus":[{"id":521,"parentId":52,"name":"个人白名单","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":521,"tags":null,"subMenus":[]},{"id":522,"parentId":52,"name":"节假日白名单","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":522,"tags":null,"subMenus":[]}]},{"id":53,"parentId":50,"name":"资助达标金额配置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":53,"tags":null,"subMenus":[]},{"id":54,"parentId":50,"name":"预警处理达标配置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":54,"tags":null,"subMenus":[]}]},{"id":60,"parentId":-1,"name":"权限管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":60,"tags":null,"subMenus":[{"id":61,"parentId":60,"name":"账号管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":61,"tags":null,"subMenus":[]},{"id":62,"parentId":60,"name":"角色权限管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":62,"tags":null,"subMenus":[]},{"id":63,"parentId":60,"name":"菜单管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":63,"tags":null,"subMenus":[]}]}],"errorCode":null}
        if (res.success) {
            this.setState({
                menuLists: res.obj || []
            })
        }

        // getAction('/bigdata/system/menu/list').then(res => {
        //     if (res.success) {
        //         this.setState({
        //             menuLists: data || []
        //         })
        //     }
        // })
    }

    //获取角色菜单权限列表
    getRoleMenuLists(){
        let res = {"success":true,"msg":"成功","obj":{"roleId":1,"menu":null,"halfCheckMenu":[40],"allCheckMenu":[10,11,12,20,30,31,32,33,34,41,50,51,52,53,54,60,61,62,63,111,112,113,114,115,116,117,118,121,122,123,124,125,126,521,522],"data":null,"halfCheckData":null,"allCheckData":null},"errorCode":null};
        if (res.success) {
            this.setState({
                selectedKeys: res.obj.allCheckMenu || [],
                halfCheckMenu:res.obj.halfCheckMenu
            })
        }

        // getAction('/bigdata/system/role/res/list', {
        //     roleId: this.props.curRole.id, 
        //     sourceCode: 'pc'
        // }).then(res => {
        //     if (res.success) {
        //         this.setState({
        //             selectedKeys: res.obj.allCheckMenu || [],
        //             halfCheckMenu:res.obj.halfCheckMenu
        //         })
        //     }
        // })
    }

    renderTreeNodes = (data) => {
        return data.map((item) => {
            if (item.subMenus) {
                if (item.id === 60 || item.id === 61 ||item.id === 62 || item.id === 63) {
                    return (
                        <TreeNode disabled={true} title={item.name} key={item.id} dataRef={item}>
                            {this.renderTreeNodes(item.subMenus)}
                        </TreeNode>
                    );
                } else {
                    return (
                        <TreeNode title={item.name} key={item.id} dataRef={item}>
                            {this.renderTreeNodes(item.subMenus)}
                        </TreeNode>
                    );
                }

            }
            return <TreeNode {...item} />;
        });
    }

    //保存
    saveAction = () => {
        // let data = {
        //     roleId: this.props.curRole.id,
        //     allCheckMenu: this.state.selectedKeys.join(','),
        //     halfCheckMenu:this.state.halfCheckMenu.join(',')
        //     sourceCode: 'pc',
        // }
        // postAction('/bigdata/system/role/res/update', data, 0, 1).then(res => {
        //     if (res.success) {
        //         message.success('权限配置成功！');
        //     } else {
        //         message.error(res.obj);
        //     }
        // })
    }

    handleCheckTree = (selectNodes, e) => {
        this.setState({
            selectedKeys: selectNodes,
            halfCheckMenu:e.halfCheckedKeys
        })
    }

    render() {
        const { selectedKeys, menuLists } = this.state
        return (
            <div style={{margin: 20}}>
                <Tree
                    checkable
                    checkedKeys={selectedKeys}
                    onCheck={this.handleCheckTree}
                >
                    {this.renderTreeNodes(menuLists)}
                </Tree>
                <div style={{ textAlign: 'right' }}>
                    <Button type="primary" onClick={this.saveAction}>保存</Button>
                </div>
            </div>
        )
    }
}