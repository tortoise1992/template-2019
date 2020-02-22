import React, { Component } from 'react'
import {Row, Col} from 'antd';

import XingBieFenBu from "./XingBieFenBu";
import GuoJiFenBu from "./GuoJiFenBu";
import NianLingFenBu from "./NianLingFenBu";
import GongLingFenBu from "./GongLingFenBu";
import JiGuanFenBu from "./JiGuanFenBu";
import ZhengZiMianMao from "./ZhengZiMianMao";
import HunYingQingKuang from "./HunYingQingKuang";
import XueLiFenBu from "./XueLiFenBu";
import ZhiChengJieGou from "./ZhiChengJieGou";

import BuMengBianZhi from "./BuMengBianZhi";
import GaoCengCiRenCai from "./GaoCengCiRenCai";
import XinJingJiaoZhiGong from "./XinJingJiaoZhiGong";
import XiaoNeiDiaoDong from "./XiaoNeiDiaoDong";
import TuiXiuRenShu from "./TuiXiuRenShu";


export default class Index extends Component {
    render() {
        return (
            <Row gutter={20} style={{padding: 20}}>

                <Col span={12} style={{marginBottom: 20}}>
                    <XingBieFenBu height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <GuoJiFenBu height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <NianLingFenBu height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <GongLingFenBu height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={24} style={{marginBottom: 20}}>
                    <JiGuanFenBu height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <ZhengZiMianMao height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <HunYingQingKuang height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <XueLiFenBu height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <ZhiChengJieGou height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={24} style={{marginBottom: 20}}>
                    <BuMengBianZhi height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <GaoCengCiRenCai height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <XinJingJiaoZhiGong height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12}>
                    <XiaoNeiDiaoDong height={300} filterValue = { this.props.filterValue }/>
                </Col>

                <Col span={12}>
                    <TuiXiuRenShu height={300} filterValue = { this.props.filterValue }/>
                </Col>
            </Row>
        )
    }
}
