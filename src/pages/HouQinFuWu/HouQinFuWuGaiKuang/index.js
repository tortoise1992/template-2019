import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Info from './Info';
import BizChart1 from './BizChart1';
import BizChart2 from './BizChart2';
import BizChart3 from './BizChart3';
import styles from '../index.module.less';

export default class Index extends Component {

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>后勤服务概况</div>}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                <Info/>
                <Row gutter={15}>
                    <Col span={8}>
                        <BizChart1 height={200}/>
                    </Col>
                    <Col span={8}>
                        <BizChart2 height={200}/>
                    </Col>
                    <Col span={8}>
                        <BizChart3 height={200}/>
                    </Col>
                </Row>
            </Card>
        )
    }
}