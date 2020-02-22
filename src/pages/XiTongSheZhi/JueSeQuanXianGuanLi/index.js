import React from 'react';
import { Row, Col } from 'antd';
import JueSe from './JueSe';
import PeiZhi from './PeiZhi';

export default class Index extends React.Component {
    state = {
        curRole: {}
    }

    changeRole = (curRole) => {
        this.setState({curRole})
    }

    render(){
        return (
            <Row gutter={20} style={{margin: '20px 10px'}}>
                <Col span={7}>
                    <JueSe changeRole={this.changeRole}/>
                </Col>
                <Col span={17}>
                    <PeiZhi curRole={this.state.curRole}/>
                </Col>
            </Row>
        )
    }
}