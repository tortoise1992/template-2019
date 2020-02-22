import React, { Component } from 'react';
import { Card, Select } from 'antd';
import { Chart, Legend, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import NoData from './NoData';
import styles from './index.module.less';
const { DataView } = DataSet;
const Option = Select.Option;


export default class ZiChanJieGouDuiBi extends Component {

    state = {
        curType: '',
        typeLists: [],
        data: [
            {
                label: "Monday",
                series1: 2800,
                series2: 2260
            },
            {
                label: "Tuesday",
                series1: 1800,
                series2: 1300
            },
            {
                label: "Wednesday",
                series1: 950,
                series2: 900
            },
            {
                label: "Thursday",
                series1: 500,
                series2: 390
            },
            {
                label: "Friday",
                series1: 170,
                series2: 100
            }
        ],
    }

    componentDidMount(){
        this.getTypeLists();
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            // setTimeout(() => {
            //     this.getData()
            // }, 50)
        }
    }

    getTypeLists() {
        this.setState({
            typeLists: [
                {name: '房屋及建构物', value: 1}
            ]
        })
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

    onChange = (value) => {
        this.setState({curType: value}, () => {this.getData()})
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

        let { typeLists } = this.state;

        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>各部门资产结构对比分析</div>}
                extra={
                    <Select 
                        value={this.state.curType}
                        onChange={this.onChange}
                        style={{width: 180}}>
                        <Option value="">全部</Option>
                        {
                            typeLists && typeLists[0] && typeLists.map((item, index) => {
                                return <Option key={index} value={item.value}>{item.name}</Option>
                            })
                        }
                    </Select>
                        
                }
                bordered={false}
                headStyle={{ border: 'none' }}
                bodyStyle={{paddingTop: 10}}
            >
                {
                    data && data[0] ?
                    <Chart
                        height={this.props.height}
                        padding={[20, 30, 75, 60]}
                        data={dv}
                        forceFit
                    >
                        <Legend />
                        <Axis name={nameKey} />
                        <Axis name="value"/>
                        <Tooltip
                            crosshairs={{
                                type: "y"
                            }}
                        />
                        <Geom
                            type="line"
                            position={`${nameKey}*value`}
                            size={2}
                            color={"type"}
                        />
                        <Geom
                            type="point"
                            position={`${nameKey}*value`}
                            size={4}
                            shape={"circle"}
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