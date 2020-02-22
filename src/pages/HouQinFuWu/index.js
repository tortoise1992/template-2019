import React, {Component, Fragment} from 'react';
import { Row, Col } from 'antd';
import Filter from "./Filter";
import HouQinFuWuGaiKuang from './HouQinFuWuGaiKuang';
import XiaoFeiDiDian from './XiaoFeiDiDian';
import ShangPuLiuShui from './ShangPuLiuShui';
import XueShengGuiSu from './XueShengGuiSu';
import XueShengSuSheWeiJi from './XueShengSuSheWeiJi';
import WenMingSuShe from './WenMingSuShe';

import './index.module.less';


export default class Index extends Component{

	state = {
        filterValue: {},
    };
	
	getFilterValue = (filterValue) => {
		this.setState({filterValue})
	}
    
	render () {
		return (
			<Fragment>
                <Filter getFilterValue = {this.getFilterValue} />
                <Row gutter={20} style={{padding: 20}}>
                    {/* 后勤服务概况 */}
                    <Col span={24} style={{marginBottom: 20}}>
                        <HouQinFuWuGaiKuang filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 消费地点TOP5 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <XiaoFeiDiDian height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 商铺流水排名TOP5 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <ShangPuLiuShui height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 学生归宿情况（近3天） */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <XueShengGuiSu height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 学生宿舍违纪情况 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <XueShengSuSheWeiJi height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 文明宿舍列表 */}
                    <Col span={24}>
                        <WenMingSuShe filterValue = { this.props.filterValue }/>
                    </Col>

                </Row>
			</Fragment>
		)
	}
}
