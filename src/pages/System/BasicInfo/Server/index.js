import React, { Component } from 'react'
import { Card,Descriptions } from 'antd'
export default class Index extends Component {
    render() {
        return (
            <Card title='服务器信息'>
                <Descriptions column={2} bordered>
                    <Descriptions.Item label="操作系统">Linux</Descriptions.Item>
                    <Descriptions.Item label="服务器软件">Nginx</Descriptions.Item>
                    <Descriptions.Item label="Node版本">12.0.0</Descriptions.Item>
                    <Descriptions.Item label="数据库版本">Mysql5.6</Descriptions.Item>
                    <Descriptions.Item label="安全模式">OFF</Descriptions.Item>
                    <Descriptions.Item label="Config文件权限">可读写</Descriptions.Item>
                    <Descriptions.Item label="文件上传权限">ON</Descriptions.Item>
                </Descriptions>
            </Card>
        )
    }
}
