import React, { Component } from 'react'
import { Card, Button,Row,Col} from 'antd'
import withRouter from 'umi/withRouter'
import Neirong from './Neirong'
class Lanmu extends Component {
    
    render() {
        
        return (
            <Card title='栏目列表'>
                <div style={{marginBottom:15}}>
                    <Button type='primary' style={{marginRight:10}}>新增顶级栏目</Button>
                    <Button type='primary' disabled>新增子级栏目</Button>
                </div>
                <Row gutter={10}>
                    <Col span={8}>1</Col>
                    <Col span={16}>
                        <Neirong/>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default withRouter(Lanmu)
