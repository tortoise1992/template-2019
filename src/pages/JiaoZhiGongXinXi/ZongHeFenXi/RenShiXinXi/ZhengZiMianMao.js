import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Coord, Legend, Geom, Axis, Tooltip, Label } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';
const { DataView } = DataSet;


export default class ZhengZiMianMao extends Component {

    state = {
        chartIns: null,
        data: [
            {
                item: "中共党员",
                count: 2991
            },
            {
                item: "民主党员",
                count: 2940
            },
            {
                item: "其他",
                count: 4060
            },
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
                title={<div className={styles.cardTitle}>政治面貌</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "政治面貌"
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
                        padding={[0, 0, 45, 0]}
                        data={dv}
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
                        forceFit
                    >
                        <Coord type="theta" radius={0.75} />
                        <Axis name="percent" />
                        <Legend/>
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                        />
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