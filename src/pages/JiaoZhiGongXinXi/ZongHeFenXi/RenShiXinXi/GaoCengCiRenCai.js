import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Coord, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../index.module.less';
const { DataView } = DataSet;


export default class GaoCengCiRenCai extends Component {

    state = {
        chartIns: null,
        data: [
            {
                country: "2015-2016",
                population: 131
            },
            {
                country: "2016-2017",
                population: 104
            },
            {
                country: "2017-2018",
                population: 290
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
            type: "sort",
            callback(a, b) {
                // 排序依据，和原生js的排序callback一致
                return a.population - b.population > 0;
            }
        });
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>高层次人才数量</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "高层次人才数量"
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
                            padding={[20, 30, 30, 80]}
                            data={dv}
                            onGetG2Instance={(chartIns) => {
                                this.setState({ chartIns })
                            }}
                            forceFit
                        >
                            <Coord transpose />
                            <Axis
                                name="country"
                                label={{
                                    offset: 12
                                }}
                            />
                            <Axis name="population" />
                            <Tooltip />
                            <Geom type="interval" position="country*population" />
                        </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}