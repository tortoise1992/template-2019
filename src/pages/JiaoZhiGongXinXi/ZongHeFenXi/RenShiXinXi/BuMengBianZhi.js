import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Legend, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';
const { DataView } = DataSet;


export default class BuMengBianZhi extends Component {

    state = {
        chartIns: null,
        data: [
            {
                label: "综合办公室",
                '编制人员': 2800,
                '非编制人员': 2260
            },
            {
                label: "学工处",
                '编制人员': 1800,
                '非编制人员': 1300
            },
            {
                label: "信息处",
                '编制人员': 950,
                '非编制人员': 900
            },
            {
                label: "教科室",
                '编制人员': 500,
                '非编制人员': 390
            },
            {
                label: "学科室",
                '编制人员': 170,
                '非编制人员': 100
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
                title={<div className={styles.cardTitle}>各部门编制情况</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "各部门编制情况"
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