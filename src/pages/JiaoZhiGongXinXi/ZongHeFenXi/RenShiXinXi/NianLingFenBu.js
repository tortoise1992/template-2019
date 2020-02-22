import React, { Component } from 'react';
import { Card } from 'antd';
import {Chart,Geom,Tooltip,Coord,Label,Guide  } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';
const { Text } = Guide;
const { DataView } = DataSet;


export default class NianLingFenBu extends Component {

    state = {
        chartIns: null,
        data: [
            {
                action: "<=35岁",
                pv: 50000
            },
            {
                action: "36-55岁",
                pv: 35000
            },
            {
                action: ">=56岁",
                pv: 25000
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
        const dv = new DataView().source(this.state.data);
        dv.transform({
            type: "percent",
            field: "pv",
            dimension: "action",
            as: "percent"
        });
        let data = dv.rows;
        const cols = {
            percent: {
                nice: false
            }
        };
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>年龄分布</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "年龄分布"
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
                            padding={[20, 120, 30, 50]}
                            data={data}
                            scale={cols}
                            onGetG2Instance={(chartIns) => {
                                this.setState({ chartIns })
                            }}
                            forceFit
                        >
                            <Tooltip
                                showTitle={false}
                                itemTpl="<li data-index={index} style=&quot;margin-bottom:4px;&quot;><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}<br/><span style=&quot;padding-left: 16px&quot;>浏览人数：{pv}</span><br/><span style=&quot;padding-left: 16px&quot;>占比：{percent}</span><br/></li>"
                            />
                            <Coord type="rect" transpose scale={[1, -1]} />
                            {/* <Legend /> */}
                            <Guide>
                                {data.map((obj,index) => {
                                return (
                                    <Text
                                    key ={index}
                                    top={true}
                                    position={{
                                        action: obj.action,
                                        percent: "median"
                                    }}
                                    content={parseInt(obj.percent * 100) + "%"}
                                    style={{
                                        fill: "#fff",
                                        fontSize: "12",
                                        textAlign: "center",
                                        shadowBlur: 2,
                                        shadowColor: "rgba(0, 0, 0, .45)"
                                    }}
                                    />
                                );
                                })}
                            </Guide>
                            <Geom
                                type="intervalSymmetric"
                                position="action*percent"
                                shape="funnel"
                                color={[
                                "action",
                                ["#0050B3", "#1890FF", "#40A9FF", "#69C0FF", "#BAE7FF"]
                                ]}
                                tooltip={[
                                "action*pv*percent",
                                (action, pv, percent) => {
                                    return {
                                    name: action,
                                    percent: parseInt(percent * 100) + "%",
                                    pv: pv
                                    };
                                }
                                ]}
                            >
                                <Label
                                content={[
                                    "action*pv",
                                    (action, pv) => {
                                    return action + " " + pv;
                                    }
                                ]}
                                offset={35}
                                labeLine={{
                                    lineWidth: 1,
                                    stroke: "rgba(0, 0, 0, 0.15)"
                                }}
                                />
                            </Geom>
                        </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}