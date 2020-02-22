import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../../index.module.less';

export default class TiChe extends Component {

    state = {
        chartIns: null,
        data: [
            {
                name: "1991",
                value: 3
            },
            {
                name: "1992",
                value: 4
            },
            {
                name: "1993",
                value: 3.5
            },
            {
                name: "1994",
                value: 5
            },
            {
                name: "1995",
                value: 4.9
            },
            {
                name: "1996",
                value: 6
            },
            {
                name: "1997",
                value: 7
            },
            {
                name: "1998",
                value: 9
            },
            {
                name: "1999",
                value: 13
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
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>体测成绩</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "体测成绩"
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
                            <Geom type="line" position="name*value" size={2}
                                tooltip={['name*value', (name, value)=>{
                                    return {
                                        name:name,
                                        value:value
                                    }
                                }]}
                            />
                            <Geom
                                type="point"
                                position="name*value"
                                size={4}
                                shape={"circle"}
                                tooltip={['name*value', (name, value)=>{
                                    return {
                                        name:name,
                                        value:value
                                    }
                                }]}
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