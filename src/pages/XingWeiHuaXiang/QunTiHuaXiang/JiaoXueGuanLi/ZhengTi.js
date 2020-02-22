import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart,Geom,Axis,Tooltip} from "bizcharts";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';

export default class ZhengTi extends Component {

    state = {
        chartIns: null,
        data : [
            { name: '计算机院', value: 117 },
            { name: '计算机院1', value: 118 },
            { name: '计算机院2', value: 119 },
            { name: '计算机院3', value: 120 },
            { name: '计算机院4', value: 121 }
        ],
        total: 123
    }

    componentDidUpdate (prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            // setTimeout(() => {
            //     this.getData()
            // }, 50)
        }
    }

    getData () {
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
        //                 total: res.obj.total.count
        //             })
        //         }
        //     }
        // )
    }

    downloadDetail = () => {

    }

    render() {
        return (
            <Card 
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>学生整体分析
                    <p>总人数：<span>{this.state.total}</span></p>
                </div>}
                extra={<DownLoad 
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "学生整体分析"
                    }} 
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{border: 'none'}}
            >
                {
                    this.state.data && this.state.data[0] ? 
                    <Chart 
                        height={this.props.height} 
                        padding={[20,30,30,45]} 
                        data={this.state.data} 
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
                        forceFit
                    >
                        <Axis name="name" />
                        <Axis name="value" />
                        <Tooltip
                            crosshairs={{
                                type: "y"
                            }}
                            showTitle={false}
                        />
                        <Geom type="interval" position="name*value" 
                            tooltip={['name*value', (name, value)=>{
                                return {
                                    name:name,
                                    value:value
                                }
                            }]}
                        />
                    </Chart>:<NoData height={this.props.height} />
                }
            </Card>
        )
    }
}