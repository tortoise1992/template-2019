import React, { Component } from 'react'
import { Row, Col} from 'antd';
import styles from '../../index.module.less';
// import { postAction } from "src/axios"

export default class GeRenMsg extends Component {
    render() {
        return (
            <Row>
                <Col span={6} className={styles.tableTitleStyle}>
                    <p style={{fontWeight:'bold'}}>姓名</p>
                    <p>姓名拼音</p>
                    <p>性别</p>
                    <p>名族</p>

                    <p>当前状态</p>
                    <p>最高学位</p>
                    <p>职称</p>
                    <p>省岗</p>
                </Col>
                <Col span={6} className={styles.tableStyle}>
                    <p style={{fontWeight:'bold'}}>李媛媛</p>
                    <p>liyuanyuan</p>
                    <p>女</p>
                    <p>汉</p>

                    <p>在职</p>
                    <p>本科</p>
                    <p>中级</p>
                    <p></p>
                </Col>
                <Col span={6} className={styles.tableTitleStyle}>
                    <p style={{fontWeight:'bold'}}>工号</p>
                    <p>财务号</p>
                    <p>身份证号</p>
                    <p>出生日期</p>

                    <p>参加工作年月</p>
                    <p>最高学历</p>
                    <p>专业技术职务</p>
                    <p>行政职务名称</p>
                </Col>
                <Col span={6} className={styles.tableStyle}>
                    <p style={{fontWeight:'bold'}}>001005</p>
                    <p>001005</p>
                    <p>452402195912120017</p>
                    <p>1959年12月12日</p>

                    <p>2017年12月13日</p>
                    <p>博士</p>
                    <p></p>
                    <p>教务处主任</p>
                </Col>
            </Row>
            
        )
    }
}
