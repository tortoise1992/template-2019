import React from 'react';
import { Row, Col } from 'antd';

import ShiChang from './ShiChang';
import ShiJian from './ShiJian';
import JianKang from './JianKang';
import NeiRong from './NeiRong';
import LiuLiang from './LiuLiang';
import JiLu from './JiLu';

export default class Index extends React.Component {
    render(){
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/* 上网时长趋势（最近7天） */}
                <Col span={12} style={{marginBottom: 20}}>
                    <ShiChang height={300} filterValue={ this.props.filterValue }/>
                </Col>    

                {/* 上网时间分布（最近7天） */}
                <Col span={12} style={{marginBottom: 20}}>
                    <ShiJian height={300} filterValue={ this.props.filterValue }/>
                </Col>

                {/* 上网健康度 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <JianKang height={300} filterValue={ this.props.filterValue }/>
                </Col> 

                {/* 上网内容TOP5 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <NeiRong height={300} filterValue={ this.props.filterValue }/>
                </Col>     

                {/* 本学年上网流量趋势 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <LiuLiang height={300} filterValue={ this.props.filterValue }/>
                </Col>     

                {/* 本年度上网记录 */}
                <Col span={24}>
                    <JiLu filterValue={ this.props.filterValue }/>
                </Col>     
            </Row>
        )
    }
}