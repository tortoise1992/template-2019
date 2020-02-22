import React, {Component} from 'react';
import {Row, Col} from 'antd';

import ShengYuanDi from './ShengYuanDi';
import XinSheng from "./XinSheng";
import JiuYeLv from './JiuYeLv';
import BiYeQuXiang from './BiYeQuXiang'
import BiYeQuXiangChengShi from './BiYeQuXiangChengShi';

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding:'20px 0 0 0' }}>
                {/*生源地分布图*/}
                <Col span={24} style={{marginBottom: 20}}>
                    <ShengYuanDi height={400} filterValue = { this.props.filterValue }/>
                </Col>

                {/*各学院新生人数*/}
                <Col span={24} style={{marginBottom: 20}}>
                    <XinSheng height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 就业率分析 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <JiuYeLv height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 毕业去向TOP5 */}
                <Col span={15}>
                    <BiYeQuXiang height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 毕业去向城市TOP10 */}
                <Col span={9}>
                    <BiYeQuXiangChengShi height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}