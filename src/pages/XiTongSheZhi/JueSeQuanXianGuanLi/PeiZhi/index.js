import React, { Component } from 'react';
import { Card, Tabs } from 'antd';
import JueSe from './JueSe'
import ShuJu from './ShuJu'

const TabPane = Tabs.TabPane;

export default class Index extends Component {
    state = {
        menuLists: [],//菜单列表
        roleMenuData: [],
        selectedKeys: [],
        keyNo: 1
    }

    callback = (key) => {
        this.setState({
            keyNo: key
        })
    }

    render() {

        return (
            <Card>
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                    <TabPane tab={this.props.curRole.roleName + '角色权限配置'} key="1">
                        <JueSe curRole={this.props.curRole}/>
                    </TabPane>
                    <TabPane tab={this.props.curRole.roleName + '数据权限配置'} key="2">
                        <ShuJu curRole={this.props.curRole}/>
                    </TabPane>
                </Tabs>
            </Card>
        )
    }
}