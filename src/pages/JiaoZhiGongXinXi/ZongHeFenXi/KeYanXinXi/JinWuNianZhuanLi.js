import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Legend, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';
const { DataView } = DataSet;


export default class JinWuNianZhuanLi extends Component {

    state = {
        chartIns: null,
        data: [
            {
                label: "2014",
                "论文": 1000,
                "专著": 500,
                '专利': 160
            },
            {
                label: "2015",
                "论文": 1500,
                "专著": 600,
                '专利': 360
            },
            {
                label: "2016",
                "论文": 1900,
                "专著": 800,
                '专利': 560
            },
            {
                label: "2017",
                "论文": 2500,
                "专著": 1800,
                '专利': 960
            },
            {
                label: "2018",
                "论文": 2800,
                "专著": 2000,
                '专利': 1260
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
            type: "fold",
            fields: fields,
            key: "type",
            value: "value"
        });
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>近5年发表论文、专著、专利情况</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "学生奖助情况"
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
                        <Axis name={nameKey} />
                        <Axis name="value" />
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
