import React, { Component,Fragment } from 'react'
import { Row,Col } from 'antd'
import KuaiJie from './KuaiJie'
import ChengXu from './ChengXu'
import FuWuQi from './FuWuQi'
import ShiShiLaiYuan from './ShiShiLaiYuan'
import DingDan from './DingDan'
export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Row className='wrapper'>
                    <Col span={24}>
                        <KuaiJie/>
                    </Col>
                </Row>
                <Row className='wrapper'>
                    <Col span={24}>
                        <DingDan/>
                    </Col>
                </Row>
                <Row className='wrapper'>
                    <Col span={24}>
                        <ShiShiLaiYuan/>
                    </Col>
                </Row>
                <Row className='wrapper'>
                    <Col span={24}>
                        <ChengXu/>
                    </Col>
                </Row>
                <Row className='wrapper'>
                    <Col span={24}>
                        <FuWuQi/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
