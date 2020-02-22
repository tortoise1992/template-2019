import React, {Component} from 'react';
import {Row, Col} from 'antd';

import DangQianYuJing from "./DangQianYuJing";
import LiShiYuJing from './LiShiYuJing';

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/* 当前预警事件 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <DangQianYuJing filterValue = { this.props.filterValue }/>
                </Col>

                {/* 历史预警 */}
                <Col span={24}>
                    <LiShiYuJing height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}