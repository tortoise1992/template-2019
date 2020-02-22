import React, { Component } from 'react';
import { Card } from 'antd';
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';


export default class BiYeQuXiang extends Component {

    state = {
        chartIns: null,
        data: [
            {"name" : "北京1", "value" : 1432},
            {"name" : "北京2", "value" : 1431},
            {"name" : "北京3", "value" : 1430},
            {"name" : "北京4", "value" : 1420},
            {"name" : "北京5", "value" : 1419},
            {"name" : "北京6", "value" : 1418},
            {"name" : "北京7", "value" : 1417},
            {"name" : "北京8", "value" : 1416},
            {"name" : "北京9", "value" : 1415},
            {"name" : "北京10", "value" : 1410}
        ],
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            // setTimeout(() => {
            //     this.getData()
            // }, 50)
        }
    }

    getData() {
        // const {curYear,curCollege,curMajor,curGrade} = this.props.filterValue;

        // let params = {
        //     year: curYear,
        //     collegeCode: curCollege,
        //     majorCode: curMajor,
        //     grade: curGrade,
        // }

        // postAction("/bigdata/student/getStudentDist",params).then(
        //     (res) => {
        //         if (res.success && res.obj.detail.length > 0){
        //             let data = [];
        //             res.obj.detail.forEach(
        //                 (item, index) => {
        //                     data.push({
        //                         name: item.name,
        //                         value: item.count,
        //                     })
        //                 }
        //             )
        //             this.setState({
        //                 data,
        //             })
        //         }
        //     }
        // )
    }

    downloadDetail = () => {

    }

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>毕业去向城市TOP10</div>}
                extra={<DownLoad
                    downloadChart={{
                        id: "BiYeQuXiangChengShi",
                        title: "毕业去向城市TOP10"
                    }}
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                {
                    this.state.data && this.state.data[0] ?
                    <div className={styles.listBox} id={"BiYeQuXiangChengShi"}>
                        <ul>
                            {
                                this.state.data.map((item, index) => {
                                    if (index < 3) {
                                        return (
                                            <li key={index}>
                                                <span className={styles.rank + ' ' + styles.selectActive}>{index + 1}</span>
                                                <span className={styles.name}>{item.name}</span>
                                                <span className={styles.num}>{item.value}人</span>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li key={index}>
                                                <span className={styles.rank}>{index + 1}</span>
                                                <span className={styles.name}>{item.name}</span>
                                                <span className={styles.num}>{item.value}人</span>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}