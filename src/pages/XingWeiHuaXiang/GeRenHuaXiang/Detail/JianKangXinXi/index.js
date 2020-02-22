import React, {Component} from 'react';
import {Row, Col} from 'antd';

import SanCan from "./SanCan";
import TiChe from './TiChe';
import YunDong from './YunDong';

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/* 本学期三餐规律度 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <SanCan height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 体测成绩 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <TiChe height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 近一年运动趋势 */}
                <Col span={24}>
                    <YunDong height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}