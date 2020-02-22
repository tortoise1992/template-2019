import React, {Component} from 'react';
import {Row, Col} from 'antd';

import XinXi from "./XinXi";
import GuiJi from './GuiJi';
import GuanXi from './GuanXi';

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/* 个人基本信息 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <XinXi height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 学生轨迹分析 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <GuiJi filterValue = { this.props.filterValue }/>
                </Col>

                {/* 个人关系图谱 */}
                <Col span={24}>
                    <GuanXi filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}