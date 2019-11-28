import React, { Component,Fragment } from 'react'
import { Row,Col } from 'antd'
import QuKuai from './QuKuai'
import XiaoShouDiQu from './XiaoShouDiQu'
import XiaoShouE from "./XiaoShouE";
import JinQiDingDan from './JinQiDingDan'
export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <Row gutter={15}>
                    <QuKuai/>
                </Row>
                <Row gutter={15}>
                    <Col span={12}>
                        <XiaoShouDiQu/>
                    </Col>
                    <Col span={12}>
                        <XiaoShouE/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <JinQiDingDan/>
                    </Col>                    
                </Row>
            </Fragment>
        )
    }
}
