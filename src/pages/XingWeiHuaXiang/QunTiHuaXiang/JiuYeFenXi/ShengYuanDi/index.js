import React, { Component } from 'react';
import { Card } from 'antd';
// import {postAction} from "@/axios";
import ShowChart from './ShowChart';
import DownLoad from '../DownLoad';
import NoData from '../NoData';
import styles from '../../index.module.less';


export default class ShengYuanDi extends Component {

    state = {
        data: [
            {name: '北京', value: 1236},
            {name: '湖北', value: 2987},
            {name: '上海', value: 3987},
            {name: '湖南', value: 2036},
            {name: '河南', value: 1936},
            {name: '广东', value: 2236},
            {name: '天津', value: 3236},
            {name: '江苏', value: 2876},
            {name: '安徽', value: 980},
            {name: '重庆', value: 3236},
        ],
        total: 235
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
                title={<div className={styles.cardTitle}>生源地分布图
                    <p>总人数：<span>{this.state.total}</span></p>
                </div>}
                extra={<DownLoad
                    downloadChart={{
                        id: "ShengYuanDi",
                        title: "生源地分布图"
                    }}
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                {
                    this.state.data && this.state.data[0] ?
                    <div id="ShengYuanDi">
                        <ShowChart
                            data={this.state.data}
                            height={this.props.height}
                        />
                    </div> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}