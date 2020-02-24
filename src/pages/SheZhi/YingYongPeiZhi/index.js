import React, { Component } from 'react'
import { Tabs, Icon } from 'antd'
import GongZhongHao from './GongZhongHao'
const { TabPane } = Tabs;
export default class YingYongPeiZhi extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            <Icon type="wechat" />
                            公众号配置
                        </span>
                    }
                    key="1"
                >
                    <GongZhongHao/>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <Icon type="windows" />
                            小程序配置
                        </span>
                    }
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>
        )
    }
}
