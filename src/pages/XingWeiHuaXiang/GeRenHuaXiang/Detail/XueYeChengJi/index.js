import React from 'react';
import { Row, Col } from 'antd';

import XueYe from './XueYe';
import ShangKe from './ShangKe';
import ChengJi from './ChengJi';
import Kebiao from './Kebiao';

export default class Index extends React.Component {
    render(){
        return (
            <Row gutter={20} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <p style={{padding:20,marginBottom:0,fontSize:16,fontWeight:600,backgroundColor:"#fff"}}>仅作为学生管理者判断学生学业状况的一个参考数据，不作为任何评奖评优或其他工作的评价指标！辅修、通识、国外学习课程类、非本专业教学计划要求的课程，不纳入统计。</p >
                </Col>

                {/* 个人历史学业情况 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <XueYe height={300} filterValue={ this.props.filterValue }/>
                </Col>    

                {/* 本学期准时上课情况 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <ShangKe height={300} filterValue={ this.props.filterValue }/>
                </Col>

                {/* 个人成绩排名 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <ChengJi height={300} filterValue={ this.props.filterValue }/>
                </Col> 

                {/* 个人课表情况 */}
                <Col span={24}>
                    <Kebiao height={300} filterValue={ this.props.filterValue }/>
                </Col> 
            </Row>
        )
    }
}