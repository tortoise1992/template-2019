import React, { Component } from 'react'
import { Row, Col } from 'antd';

import XueShengChengJi from "./XueShengChengJi";
import JinRuCiShu from "./JinRuCiShu";
import JieYueShuLiang from "./JieYueShuLiang";
import JiangZhuQingKuang from "./JiangZhuQingKuang";
import JiaoXueBanJi from "./JiaoXueBanJi/index";

export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                     <p style={{padding:20,marginBottom:0,fontSize:16,fontWeight:600,backgroundColor:"#fff"}}>仅作为学生管理者判断学生学业状况的一个参考数据，不作为任何评奖评优或其他工作的评价指标！辅修、通识、国外学习课程类、非本专业教学计划要求的课程，不纳入统计。</p >
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <XueShengChengJi height={300}/>
                </Col>    

                <Col span={24} style={{marginBottom: 20}}>
                    <JinRuCiShu height={300}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <JieYueShuLiang height={300}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <JiangZhuQingKuang height={300}/>
                </Col>
                <Col span={24}>
                    <JiaoXueBanJi/>
                </Col>
            </Row>
        )
    }
}
