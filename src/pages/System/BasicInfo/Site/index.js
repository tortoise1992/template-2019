import React, { Component } from 'react'
import { Card,Descriptions,Button } from 'antd'
export default class Index extends Component {
    render() {
        return (
            <Card title='网站信息'>
                <Descriptions column={2} bordered>
                    <Descriptions.Item label="站点地图">开启<Button style={{marginLeft:15}} type='primary' size='small'>点击关闭</Button></Descriptions.Item>
                    <Descriptions.Item label="URL重写">开启<Button style={{marginLeft:15}} type='primary' size='small'>点击关闭</Button></Descriptions.Item>
                    <Descriptions.Item label="单页总数">16</Descriptions.Item>
                    <Descriptions.Item label="文章总数">20</Descriptions.Item>
                    <Descriptions.Item label="商品总数">10</Descriptions.Item>
                   
                </Descriptions>
            </Card>
        )
    }
}
