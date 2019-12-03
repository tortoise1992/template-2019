import React, { Component } from 'react'
import { Row,Col } from 'antd'
import YingYong from './YingYong'
import ShuJuKu from './ShuJuKu'
import ShouQuan from './ShouQuan'
import JiChuRuanJian from './JiChuRuanJian'
export default class XiTongXinXi extends Component {
    render() {
        return (
            <div>
                <Row gutter={15}>
                    <Col span={12}>
                        <YingYong/>
                    </Col>
                    <Col span={12}>
                        <ShuJuKu/>
                    </Col>
                </Row>
                <Row gutter={15}>
                    <Col span={12}>
                        <ShouQuan/>
                    </Col>
                    <Col span={12}>
                        <JiChuRuanJian/>
                    </Col>
                </Row>
            </div>
        )
    }
}
