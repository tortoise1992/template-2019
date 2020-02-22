import React, { Component } from 'react'
import { Row, Col } from 'antd';

import HuiYiLieBiao from './HuiYiLieBiao';
import TongZhiGongGao from './TongZhiGongGao';

export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <TongZhiGongGao />
                </Col>
                <Col span={24}>
                    <HuiYiLieBiao/>
                </Col>
            </Row>
        )
    }
}
