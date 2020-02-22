import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";
// import {postAction} from "@/axios";
import NoData from './NoData';
import styles from './index.module.less';


export default class DaiKuanTongJi extends Component {

    state = {
        data: [
            {
                name: "1991",
                value: 154
              },
              {
                name: "1992",
                value: 161
              },
              {
                name: "1993",
                value: 159
              },
              {
                name: "1994",
                value: 274
              },
              {
                name: "1995",
                value: 370
              },
              {
                name: "1996",
                value: 310
              },
              {
                name: "1997",
                value: 319
              },
              {
                name: "1998",
                value: 320
              },
              {
                name: "1999",
                value: 290
              }
        ],
        total: 3000
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

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>各学院助学贷款统计
                    <p>总计助学贷款：<span>{this.state.total}元</span></p>
                </div>}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                {
                    this.state.data && this.state.data[0] ?
                    <Chart
                        height={this.props.height}
                        padding={[20, 30, 30, 45]}
                        data={this.state.data}
                        forceFit
                    >
                        <Axis name="name" />
                        <Axis name="value" />
                        <Tooltip />
                        <Geom type="area" position="name*value" />
                        <Geom type="line" position="name*value" size={2} />
                    </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}