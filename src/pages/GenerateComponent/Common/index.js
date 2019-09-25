import React, { Component } from 'react'
import { Card, Button,Row,Col } from 'antd'
import History from './History'
import Preview from './Preview'
import Prop from './Prop'
import SelectTypeModal from './SelectTypeModal'
export default class Index extends Component {
    render() {
        return (
            <Card title='常规组件生成器' extra={<Button type='primary'>选择组件类型</Button>}>
                <Row gutter={10}>
                    <Col span={16}>
                        <Preview/>
                    </Col>
                    <Col span={8}>
                        <Prop/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <History/>
                    </Col>                    
                </Row>
                <SelectTypeModal/>
            </Card>
        )
    }
}
