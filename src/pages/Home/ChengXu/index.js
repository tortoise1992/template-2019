import React, { Component } from 'react'
import { Card, Descriptions } from 'antd'
export default class ChengXu extends Component {
    render() {
        return (
            <Card title='程序信息'>
                <Descriptions bordered column={2}>
                    <Descriptions.Item label="系统更新">已是最新版</Descriptions.Item>
                    <Descriptions.Item label="当前版本">v1.4.3</Descriptions.Item>
                    <Descriptions.Item label="程序名称">某某网络科技有限公司</Descriptions.Item>
                    <Descriptions.Item label="版权所有">正版软件</Descriptions.Item>                   
                    
                </Descriptions>
            </Card>
        )
    }
}
