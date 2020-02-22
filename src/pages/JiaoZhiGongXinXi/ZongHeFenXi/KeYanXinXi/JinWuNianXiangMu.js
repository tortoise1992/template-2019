import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Coord,Legend, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';
const { DataView } = DataSet;


export default class JinWuNianXiangMu extends Component {

    state = {
        chartIns: null,
        data: [
            {
                label: "2014",
                "奖学金": 2800,
                '助学金': 2260
            },
            {
                label: "2015",
                "奖学金": 1800,
                '助学金': 1300
            },
            {
                label: "2016",
                "奖学金": 950,
                '助学金': 900
            },
            {
                label: "2017",
                "奖学金": 500,
                '助学金': 390
            },
            {
                label: "2018",
                "奖学金": 170,
                '助学金': 100
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
        let {data} = this.state;
        let fields=[], nameKey; // 获取关键字
        if (data && data[0]) {
            nameKey = Object.keys(data[0])[0]; // 获取json第一个对象的第一个键名称
            // 获取json对象子节点除去第一个键的其他键字段集合
            Object.keys(data[0]).forEach((item,index)=>{
                if(index!==0){
                    fields.push(item);
                }
            })
        }
        dv.source(data).transform({
            type: "fold",//折叠用法
            fields: fields, //["奖学金", "助学金"]，保留的字段
            key: "type",
            value: "value"
        });
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>近5年科研项目情况</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "近5年科研项目情况"
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
                        padding={[20, 30, 75, 45]}
                        data={dv}
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
                        forceFit
                    >
                        <Legend />
                        <Coord transpose/>
                        <Axis name={nameKey} />
                        <Axis name="label" />
                        <Tooltip />
                        <Geom
                            type="intervalStack"
                            position={`${nameKey}*value`}
                            color={"type"}
                            style={{
                                stroke: "#fff",
                                lineWidth: 1
                            }}
                        />
                    </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}
