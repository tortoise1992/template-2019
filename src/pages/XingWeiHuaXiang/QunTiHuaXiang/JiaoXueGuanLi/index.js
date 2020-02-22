import React, {Component} from 'react';
import {Row, Col} from 'antd';

import ZhengTi from "./ZhengTi";
import XueJi from "./XueJi";
import BuKao from "./BuKao";
import JiaoXue from "./JiaoXue";
import KaoQin from "./KaoQin";

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding: '20px 0 0 0'}}>
                {/*学生整体分析*/}
                <Col span={24} style={{marginBottom: 20}}>
                    <ZhengTi height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*学籍分布*/}
                <Col span={12} style={{marginBottom: 20}}>
                    <XueJi height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*补考分布*/}
                <Col span={12} style={{marginBottom: 20}}>
                    <BuKao height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*教学评价分布*/}
                <Col span={12}>
                    <JiaoXue height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*考勤分布*/}
                <Col span={12}>
                    <KaoQin height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}