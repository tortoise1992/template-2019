import React, { Component } from 'react'
import { Row, Col } from 'antd';

import RenKeXinXi from "./RenKeXinXi";
import LiNianJiaoXueKeShiShu from "./LiNianJiaoXueKeShiShu";
import JiaoXueBanJi from "./JiaoXueBanJi/index";

export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <RenKeXinXi/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <LiNianJiaoXueKeShiShu height={300}/>
                </Col>
                <Col span={24}>
                    <JiaoXueBanJi/>
                </Col>
            </Row>
        )
    }
}
