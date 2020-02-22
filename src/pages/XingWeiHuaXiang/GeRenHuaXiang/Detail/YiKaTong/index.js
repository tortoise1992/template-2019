import React, {Component} from 'react';
import {Row, Col} from 'antd';

import SanCan from "./SanCan";
import XiaoFeiDiDian from "./XiaoFeiDiDian";
import XiaoFeiJieGou from "./XiaoFeiJieGou";
import XiaoFeiQuShi from "./XiaoFeiQuShi";
import GuiSuQuShi from "./GuiSuQuShi";

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/* 本学年三餐平均消费情况 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <SanCan height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 本学年消费地点分布TOP5 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <XiaoFeiDiDian height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 消费结构（近三个月） */}
                <Col span={12} style={{marginBottom: 20}}>
                    <XiaoFeiJieGou height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 本学年消费趋势 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <XiaoFeiQuShi height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 本学年归宿趋势 */}
                <Col span={24}>
                    <GuiSuQuShi height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}