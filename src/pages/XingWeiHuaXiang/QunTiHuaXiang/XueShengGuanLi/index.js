import React, {Component} from 'react';
import {Row, Col} from 'antd';

import JiangXueJin from "./JiangXueJin";
import QinGongZhuXue from "./QinGongZhuXue";
import ZhuXueDaiKuan from "./ZhuXueDaiKuan";
import PinKunSheng from "./PinKunSheng";
import WeiJiChuFen from "./WeiJiChuFen";
import ZhuSuWeiJi from "./ZhuSuWeiJi";

export default class Index extends Component {
    render () {
        return (
            <Row gutter={20} style={{padding: '20px 0 0 0'}}>
                {/*奖学金分析*/}
                <Col span={12} style={{marginBottom: 20}}>
                    <JiangXueJin height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*勤工助学人数分析*/}
                <Col span={12} style={{marginBottom: 20}}>
                    <QinGongZhuXue height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*助学贷款分析*/}
                <Col span={12} style={{marginBottom: 20}}>
                    <ZhuXueDaiKuan height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*贫困生分析*/}
                <Col span={12} style={{marginBottom: 20}}>
                    <PinKunSheng height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/*违纪处分学生分析*/}
                <Col span={12}>
                    <WeiJiChuFen height={300} filterValue = { this.props.filterValue }/>
                </Col>

                {/* 住宿违纪分析 */}
                <Col span={12}>
                    <ZhuSuWeiJi height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}