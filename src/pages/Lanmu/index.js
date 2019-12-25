import React, { Component } from 'react'
import { Card, Button,Row,Col} from 'antd'
import withRouter from 'umi/withRouter'
import LieBiao from './LieBiao'
class Lanmu extends Component {
    
    render() {
        
        return (
            <Card title='栏目列表'>
                <div style={{marginBottom:15}}>
                    <Button type='primary'>新增顶级栏目</Button>
                </div>
                <Row gutter={10}>
                    <Col span={24}>
                        <LieBiao/>
                    </Col>                    
                </Row>
            </Card>
        )
    }
}

export default withRouter(Lanmu)
