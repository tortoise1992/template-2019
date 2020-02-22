import React, {Component, Fragment} from 'react';
import { Row, Col } from 'antd';
import Filter from "./Filter";
import ZiChanZongZhiDuiBi from './ZiChanZongZhiDuiBi';
import ZiChanQingCha from './ZiChanQingCha';
import ZiChanJieGouZongZhi from './ZiChanJieGouZongZhi';
import ZiChanJieGouZongZhiMingXi from './ZiChanJieGouZongZhiMingXi';
import ZiChanJieGouDuiBi from './ZiChanJieGouDuiBi';
import ZiChanShiYongZhuangTai from './ZiChanShiYongZhuangTai';
import ZiChanShiYongFangXiang from './ZiChanShiYongFangXiang';
import QianFeiTongJi from './QianFeiTongJi';
import DaiKuanTongJi from './DaiKuanTongJi';
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
                    {/* 各部门资产总值对比分析 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <ZiChanZongZhiDuiBi height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 资产清查统计 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <ZiChanQingCha height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 资产结构总值TOP6 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <ZiChanJieGouZongZhi height={335} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 各资产结构总值明细 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <ZiChanJieGouZongZhiMingXi height={335} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 各部门资产结构对比分析 */}
                    <Col span={24} style={{marginBottom: 20}}>
                        <ZiChanJieGouDuiBi height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 各部门资产使用状态 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <ZiChanShiYongZhuangTai height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 各部门资产使用方向分析 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <ZiChanShiYongFangXiang height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 各学院欠费统计 */}
                    <Col span={24} style={{marginBottom: 20}}>
                        <QianFeiTongJi height={300} filterValue = { this.props.filterValue }/>
                    </Col>

                    {/* 各学院助学贷款统计 */}
                    <Col span={24}>
                        <DaiKuanTongJi height={300} filterValue = { this.props.filterValue }/>
                    </Col>
                </Row>
			</Fragment>
		)
	}
}
