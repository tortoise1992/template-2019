import React, { Component } from 'react'
import { Row, Col } from 'antd';

import ZiChanQingDan from './ZiChanQingDan';
import GongZiLieBiao from './GongZiLieBiao/index';


export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <ZiChanQingDan />
                </Col>
                <Col span={24}>
                    <GongZiLieBiao/>
                </Col>
            </Row>
        )
    }
}
