import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Coord, Legend, Geom, Axis, Tooltip, Label } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from '../DownLoad';
import NoData from '../NoData';
import styles from '../index.module.less';
const { DataView } = DataSet;


export default class BizChart1 extends Component {

    state = {
        data: [
            {
                item: "事例一",
                count: 40
            },
            {
                item: "事例二",
                count: 21
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
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}></div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "后勤服务概况2"
                    }}
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
                style={{border: '1px solid #e8e8e8'}}
            >
                {
                    this.state.data && this.state.data[0] ?
                    <Chart
                        height={this.props.height}
                        padding={[0, 0, 45, 0]}
                        data={dv}
                        forceFit
                    >
                        <Coord type="theta" radius={0.75}/>
                        <Axis name="percent" />
                        <Legend/>
                        <Tooltip showTitle={false}/>
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color="item"
                            tooltip={[
                                "item*count*percent",
                                (item, count, percent) => {
                                    return {
                                        name: item,
                                        value: count + "（" + parseInt(percent*10000)/100 + "%）"
                                    };
                                }
                            ]}
                            style={{
                                lineWidth: 1,
                                stroke: "#fff"
                            }}
                        >
                            <Label
                                content="percent"
                                formatter={(val, item) => {
                                    return item.point.item + ": " + parseInt(val*10000)/100 + "%";
                                }}
                            />
                        </Geom>
                    </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}