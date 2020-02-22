import React, { Component } from 'react'
import { Row, Col } from 'antd';

import XiangMuQingKuang from './XiangMuQingKuang';
import ZhuanLiQingKuang from './ZhuanLiQingKuang';
import HuoJiangLieBiao from './HuoJiangLieBiao';
import HuiYiLieBiao from './HuiYiLieBiao';

export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={12} style={{marginBottom: 20}}>
                    <XiangMuQingKuang height={300}/>
                </Col>    

                <Col span={12} style={{marginBottom: 20}}>
                    <ZhuanLiQingKuang height={300}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <HuoJiangLieBiao />
                </Col>
                <Col span={24}>
                    <HuiYiLieBiao/>
                </Col>
            </Row>
        )
    }
}
