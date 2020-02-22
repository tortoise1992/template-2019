import React, { Component } from 'react'
import {Card, Row, Col} from 'antd';
import IconFont from 'src/iconfont';
import styles from '../../index.module.less';

import GeRenMsg from "./GeRenMsg";
import XueXiJingLi from "./XueXiJingLi";
import RongYuJiangLi from "./RongYuJiangLi";
import XiaoNeiDiaoDong from "./XiaoNeiDiaoDong";

export default class Index extends Component {
    state={
        imageUrl:require('./img/touxiang.png')
    }

    render() {
        let {imageUrl} =this.state;
        
        return (
            <div>
                <Card 
                    className={styles.mainCard}
                    title={<div className={styles.cardTitle}>个人档案</div>}
                    bordered={false}
                    headStyle={{ border: 'none' }}
                    bodyStyle={{paddingTop: 10}}
                    style={{margin: 20}}
                >
                    <Row>
                        <Col span={6}>
                            <div className={styles.ImageStyle}>
                                {
                                    imageUrl
                                    ?<img src={imageUrl} style={{width: '212px',height:'258px'}} alt={"用户头像"}/>
                                    :<IconFont type="icon-camera"/>
                                }
                            </div>
                        </Col>
                        <Col span={18}>
                            <GeRenMsg />
                            <p className={styles.table_title}>学习经历</p>
                            <XueXiJingLi />
                            <p className={styles.table_title}>荣誉奖励</p>
                            <RongYuJiangLi />
                            <p className={styles.table_title}>校内调动</p>
                            <XiaoNeiDiaoDong />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
