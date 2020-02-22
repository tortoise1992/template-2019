import React, {Component} from 'react';
import {Row, Col} from 'antd';

import XiaoFeiQuShi from "./XiaoFeiQuShi";
import XiaoFeiDiDian from './XiaoFeiDiDian';
import ShangPuLiuShui from './ShangPuLiuShui'
import LiNianXiaoFeiQuShi from './LiNianXiaoFeiQuShi';
import XiaoYuanKa from './XiaoYuanKa';
import GuiSu from './GuiSu';
import YueJunChongZhi from './YueJunChongZhi'

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding: '20px 0 0 0'}}>
                {/*消费趋势*/}
                <Col span={24} style={{marginBottom: 20}}>
                    <XiaoFeiQuShi height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 消费地点TOP5 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <XiaoFeiDiDian height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 商户流水排名TOP5 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <ShangPuLiuShui height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 历年消费趋势 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <LiNianXiaoFeiQuShi height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 校园卡状态 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <XiaoYuanKa height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 归宿情况分析 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <GuiSu height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 月均充值趋势 */}
                <Col span={24}>
                    <YueJunChongZhi height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}