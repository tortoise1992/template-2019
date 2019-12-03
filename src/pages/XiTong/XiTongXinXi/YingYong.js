import React, { Component } from 'react'
import { Card, Descriptions, Badge } from 'antd'
export default class YingYong extends Component {
    render() {
        return (
            <Card title='应用信息'>
                <Descriptions bordered column={1}>
                    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>                   
                    <Descriptions.Item label="Status">
                        <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>                    
                </Descriptions>
            </Card>
        )
    }
}
