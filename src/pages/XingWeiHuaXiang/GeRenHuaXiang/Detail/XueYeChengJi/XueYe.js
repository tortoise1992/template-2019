import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import { Chart, Legend, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../../index.module.less';
const { DataView } = DataSet;

export default class History extends Component {

    state = {
        chartIns: null,
        data: [  
            { name: "2019", '专业平均（柱状）': 6.9, '个人（柱状）': 3.9, '专业平均（折线）': 80, '个人（折线）': 80 },
            { name: "2018", '专业平均（柱状）': 9.5, '个人（柱状）': 4.6, '专业平均（折线）': 120, '个人（折线）': 90 },
            { name: "2017", '专业平均（柱状）': 14.2, '个人（柱状）': 6.9, '专业平均（折线）': 100, '个人（折线）': 100 },
            { name: "2016", '专业平均（柱状）': 18.5, '个人（柱状）': 3.0, '专业平均（折线）': 90, '个人（折线）': 80 },
        ]
    }

    componentDidMount() {
        // this.getRelationInfo()
    }

    getRelationInfo() {
    	// let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
    	// let _majorCode = JSON.parse(localStorage.getItem("studentItem")).majorCode;
        // postAction(
        //     '/bigdata/studentScoresWeight/queryStudentStudyByStudentNo',
        //     {
        //         studentNo: _studentNo,
        //         majorCode: _majorCode,
        //     }
        // ).then((res) => {
        //     if(res.success && res.obj.length > 0) {

        //         let _lineData = [];

        //         res.obj.forEach(
        //             (item, index) => {

        //                 _lineData.push({
        //                     name: item.semesterYear,
        //                     "专业平均（柱状）": item.majAvg ? Number(Math.round(item.majAvg*100)/100) : 0,
        //                     "个人（柱状）": item.oneAvg ? Number(Math.round(item.oneAvg*100)/100) : 0,
        //                     "专业平均（折线）": item.majGpa ? Number(Math.round(item.majGpa*100)/100) : 0,
        //                     "个人（折线）": item.oneGpa ? Number(Math.round(item.oneGpa*100)/100) : 0
        //                 })
        //             }
        //         )
        //         this.setState({
        //             lineData: _lineData,
        //         })
        //     }
        // })
    }

    downloadDetail = () => {

    }

    render() {
        let {data} = this.state;
        const dv = new DataView();
        dv.source(data).transform({
            type: "fold",
            fields: ["专业平均（柱状）", "个人（柱状）"],
            // 展开字段集
            key: "type",
            // key字段
            value: "value" // value字段
        });
        let colors = ['#45a3fc', '#56ca77', '#f0657d','#fad352'];
        let LineDataKey = ['专业平均（折线）', '个人（折线）'];
        let scale = {
            '专业平均（柱状）': { min: 0, tickCount: 6 },
            '个人（柱状）': { min: 0, tickCount: 6 },
            '专业平均（折线）': { min: 0, tickCount: 6 },
            '个人（折线）': { min: 0, tickCount: 6 }
        }

        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>个人历史学业情况</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "个人历史学业情况"
                    }}
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                {
                    data && data[0] ?
                    <Chart
                        height={this.props.height}
                        padding={[20, 45, 75, 45]}
                        data={dv}
                        scale={scale}
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
                        forceFit
                    >
                        <Legend
                            custom={true}
                            items={[{
                                value: "专业平均（柱状）",
                                marker: {
                                    symbol: "square",
                                    fill: colors[0],
                                    radius: 5
                                }
                            }, {
                                value: "个人（柱状）",
                                marker: {
                                    symbol: "square",
                                    fill: colors[1],
                                    radius: 5
                                }
                            }, {
                                value: "专业平均（折线）",
                                marker: {
                                    symbol: "hyphen",
                                    stroke: colors[2],
                                    radius: 5,
                                    lineWidth: 3
                                }
                            }, {
                                value: "个人（折线）",
                                marker: {
                                    symbol: "hyphen",
                                    stroke: colors[3],
                                    radius: 5,
                                    lineWidth: 3
                                }
                            }]}
                        />
                        <Axis name="name"/>
                        <Axis name="value"/>
                        {LineDataKey.map((item,i)=>(
                            <Axis key={i} name={item} visible={i === 0}/>
                        ))}
                        <Tooltip
                            crosshairs={{
                                type: "y"
                            }}
                        />
                        <Geom type="intervalStack" color={"type"} position="name*value"/>
                        {
                            LineDataKey.map((item, i) => {
                                return <Fragment key={i}>
                                    <Geom
                                        type="line"
                                        position={`name*${item}`}
                                        size={2}
                                        color={colors[i+2]}
                                    />
                                    <Geom
                                        type="point"
                                        position={`name*${item}`}
                                        size={4}
                                        shape={"circle"}
                                        color={colors[i+2]}
                                        style={{
                                            stroke: "#fff",
                                            lineWidth: 1
                                        }}
                                    />
                                </Fragment>
                            })
                        }
                    </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}