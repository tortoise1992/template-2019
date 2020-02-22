import React, { Component } from 'react'
import { Row, Col } from 'antd';

import JinWuNianXiangMu from './JinWuNianXiangMu';
import JinWuNianZhuanLi from './JinWuNianZhuanLi';
import BuMengXiangMu from './BuMengXiangMu';
import DaoKuanJingE from './DaoKuanJingE';
import HuoJiangShuLiang from './HuoJiangShuLiang';


export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={12} style={{marginBottom: 20}}>
                    <JinWuNianXiangMu height={300}/>
                </Col>    

                <Col span={12} style={{marginBottom: 20}}>
                    <JinWuNianZhuanLi height={300}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <BuMengXiangMu height={300}/>
                </Col>
                <Col span={12}>
                    <HuoJiangShuLiang height={300}/>
                </Col>
                <Col span={12}>
                    <DaoKuanJingE height={300}/>
                </Col>
            </Row>
        )
    }
}
