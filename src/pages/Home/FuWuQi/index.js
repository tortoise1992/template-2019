import React, { Component } from 'react'
import { Card, Descriptions } from 'antd'
export default class ChengXu extends Component {
    render() {
        return (
            <Card title='服务器信息'>
                <Descriptions bordered column={2}>
                    <Descriptions.Item label="服务器操作系统">Linux</Descriptions.Item>
                    <Descriptions.Item label="服务器域名/IP">demo.eyoucms.com [ 47.107.166.4 ]</Descriptions.Item>
                    <Descriptions.Item label="服务器环境">Apache</Descriptions.Item>
                    <Descriptions.Item label="PHP 版本">7.2.21</Descriptions.Item>                   
                    
                </Descriptions>
            </Card>
        )
    }
}
