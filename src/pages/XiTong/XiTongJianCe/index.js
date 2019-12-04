import React, { Component,Fragment } from 'react'
import { Row,Col } from 'antd'
import BaoBiaoXinXi from './BaoBiaoXinXi'
import JianCeXinXi from './JianCeXinXi'
export default class XiTongJianCe extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col span={24}>
                        <BaoBiaoXinXi/>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={24}>
                        <JianCeXinXi/>
                    </Col>
                  
                </Row>
            </Fragment>
        )
    }
}
