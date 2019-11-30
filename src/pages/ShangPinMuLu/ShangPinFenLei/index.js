import React, { Component,Fragment } from 'react'
import { Row } from 'antd'
import Shuaixuan from './Shuaixuan'
import LieBiao from './LieBiao'
export default class ShangPinFenLei extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Shuaixuan/>
                </Row>
                <Row>
                    <LieBiao/>
                </Row>
            </Fragment>
            
        )
    }
}
