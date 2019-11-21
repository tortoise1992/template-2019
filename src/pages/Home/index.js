import React, { Component,Fragment } from 'react'
import { Row,Col } from 'antd'
import QuKuai from './QuKuai'
export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <Row gutter={15}>
                    <QuKuai/>
                </Row>
                <Row>
                    <Col span={12}>
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                    </Col>
                    <Col span={16}>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
