import React, { Component } from 'react'
import { Row, Col } from 'antd';
import XiaoFeiJiLu from './XiaoFeiJiLu';
export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={24}>
                    <XiaoFeiJiLu />
                </Col>
            </Row>
        )
    }
}
