import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Coord, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from './index.module.less';
const { DataView } = DataSet;


export default class ShangPuLiuShui extends Component {

    state = {
        chartIns: null,
        data: [
            {
                name: "中国",
                value: 131744
            },
            {
                name: "印度",
                value: 104970
            },
            {
                name: "美国",
                value: 29034
            },
            {
                name: "印尼",
                value: 23489
            },
            {
                name: "巴西",
                value: 18203
            }
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
        const dv = new DataView();
        dv.source(this.state.data).transform({
            type: "sort",
            callback(a, b) {
                // 排序依据，和原生js的排序callback一致
                return a.value - b.value > 0;
            }
        });
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>商户流水排名TOP5</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "商户流水排名TOP5"
                    }}
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                {
                    this.state.data && this.state.data[0] ?
                    <Chart
                        height={this.props.height}
                        padding={[20, 30, 30, 45]}
                        data={dv}
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
                        forceFit
                    >
                        <Coord transpose />
                        <Axis
                            name="name"
                            label={{
                                offset: 12
                            }}
                        />
                        <Axis name="value" />
                        <Tooltip showTitle={false}/>
                        <Geom type="interval" position="name*value" 
                            tooltip={['name*value', (name, value)=>{
                                return {
                                    name: name,
                                    value: value
                                }
                            }]}
                        />
                    </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}