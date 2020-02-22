import React from 'react';
import { Row, Col } from 'antd';

import TuShuJieYueKaiKuang from './TuShuJieYueKaiKuang';
import TuShuJieYueLeiBie from './TuShuJieYueLeiBie';
import TuShuJieYueLieBiao from './TuShuJieYueLieBiao';
import TuShuJieYueQuShi from './TuShuJieYueQuShi';
import XinShu from './XinShu';

export default class Index extends React.Component {
    render(){
        return (
            <Row gutter={20} style={{padding: 20}}>
                {/* 图书借阅概况 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <TuShuJieYueKaiKuang filterValue={ this.props.filterValue }/>
                </Col>    

                {/* 本年度图书借阅类别（TOP5） */}
                <Col span={12} style={{marginBottom: 20}}>
                    <TuShuJieYueLeiBie height={335} filterValue={ this.props.filterValue }/>
                </Col>

                {/* 在借图书列表 */}
                <Col span={12} style={{marginBottom: 20}}>
                    <TuShuJieYueLieBiao height={335} filterValue={ this.props.filterValue }/>
                </Col> 

                {/* 本年度图书借阅趋势 */}
                <Col span={24} style={{marginBottom: 20}}>
                    <TuShuJieYueQuShi height={300} filterValue={ this.props.filterValue }/>
                </Col>     

                {/* 新书预告 */}
                <Col span={24}>
                    <XinShu filterValue={ this.props.filterValue }/>
                </Col>     
            </Row>
        )
    }
}