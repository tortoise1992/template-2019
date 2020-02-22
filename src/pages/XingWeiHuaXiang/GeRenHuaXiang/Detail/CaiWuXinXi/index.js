import React, { Component } from 'react';
import { Row, Col } from 'antd';

import JiaoFei from './JiaoFei';
import QianFei from './QianFei';

export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/*个人已缴费列表*/}
                <Col span={24} style={{marginBottom: 20}}>
                    <JiaoFei />
                </Col>

                {/*个人欠费列表*/}
                <Col span={24}>
                    <QianFei />
                </Col>
            </Row>
        )
    }
}