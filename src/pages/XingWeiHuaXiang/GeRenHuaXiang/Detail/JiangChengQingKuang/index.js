import React, { Component } from 'react';
import { Row, Col } from 'antd';

import JiangZhu from './JiangZhu';
import WeiJi from './WeiJi';
import JiangZhuList from './JiangZhuList';

export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/*个人奖助情况*/}
                <Col span={24} style={{marginBottom: 20}}>
                    <JiangZhu height={300} />
                </Col>

                {/*个人违纪处分列表*/}
                <Col span={24} style={{marginBottom: 20}}>
                    <WeiJi />
                </Col>

                {/*个人奖助列表*/}
                <Col span={24}>
                    <JiangZhuList />
                </Col>
            </Row>
        )
    }
}