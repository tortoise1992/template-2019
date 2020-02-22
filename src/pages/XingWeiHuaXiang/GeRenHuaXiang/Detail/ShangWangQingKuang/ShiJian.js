import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../../index.module.less';


export default class ShiJian extends Component {

    state = {
        chartIns: null,
        data: [],
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            setTimeout(() => {
                // this.getData();
            }, 50)
        }
    }

    getData() {
        let res = {"success":true,"msg":"成功","obj":[{"hour":"00:00","day":"2019-10-28","value":0},{"hour":"00:30","day":"2019-10-28","value":0},{"hour":"01:00","day":"2019-10-28","value":0},{"hour":"01:30","day":"2019-10-28","value":0},{"hour":"02:00","day":"2019-10-28","value":0},{"hour":"02:30","day":"2019-10-28","value":0},{"hour":"03:00","day":"2019-10-28","value":0},{"hour":"03:30","day":"2019-10-28","value":0},{"hour":"04:00","day":"2019-10-28","value":0},{"hour":"04:30","day":"2019-10-28","value":0},{"hour":"05:00","day":"2019-10-28","value":0},{"hour":"05:30","day":"2019-10-28","value":0},{"hour":"06:00","day":"2019-10-28","value":0},{"hour":"06:30","day":"2019-10-28","value":0},{"hour":"07:00","day":"2019-10-28","value":0},{"hour":"07:30","day":"2019-10-28","value":0},{"hour":"08:00","day":"2019-10-28","value":0},{"hour":"08:30","day":"2019-10-28","value":0},{"hour":"09:00","day":"2019-10-28","value":0},{"hour":"09:30","day":"2019-10-28","value":0},{"hour":"10:00","day":"2019-10-28","value":0},{"hour":"10:30","day":"2019-10-28","value":0},{"hour":"11:00","day":"2019-10-28","value":0},{"hour":"11:30","day":"2019-10-28","value":0},{"hour":"12:00","day":"2019-10-28","value":0},{"hour":"12:30","day":"2019-10-28","value":0},{"hour":"13:00","day":"2019-10-28","value":0},{"hour":"13:30","day":"2019-10-28","value":0},{"hour":"14:00","day":"2019-10-28","value":0},{"hour":"14:30","day":"2019-10-28","value":0},{"hour":"15:00","day":"2019-10-28","value":0},{"hour":"15:30","day":"2019-10-28","value":0},{"hour":"16:00","day":"2019-10-28","value":0},{"hour":"16:30","day":"2019-10-28","value":0},{"hour":"17:00","day":"2019-10-28","value":0},{"hour":"17:30","day":"2019-10-28","value":0},{"hour":"18:00","day":"2019-10-28","value":0},{"hour":"18:30","day":"2019-10-28","value":0},{"hour":"19:00","day":"2019-10-28","value":0},{"hour":"19:30","day":"2019-10-28","value":0},{"hour":"20:00","day":"2019-10-28","value":0},{"hour":"20:30","day":"2019-10-28","value":0},{"hour":"21:00","day":"2019-10-28","value":0},{"hour":"21:30","day":"2019-10-28","value":0},{"hour":"22:00","day":"2019-10-28","value":0},{"hour":"22:30","day":"2019-10-28","value":0},{"hour":"23:00","day":"2019-10-28","value":0},{"hour":"23:30","day":"2019-10-28","value":0},{"hour":"00:00","day":"2019-10-29","value":0},{"hour":"00:30","day":"2019-10-29","value":0},{"hour":"01:00","day":"2019-10-29","value":0},{"hour":"01:30","day":"2019-10-29","value":0},{"hour":"02:00","day":"2019-10-29","value":0},{"hour":"02:30","day":"2019-10-29","value":0},{"hour":"03:00","day":"2019-10-29","value":0},{"hour":"03:30","day":"2019-10-29","value":0},{"hour":"04:00","day":"2019-10-29","value":0},{"hour":"04:30","day":"2019-10-29","value":0},{"hour":"05:00","day":"2019-10-29","value":0},{"hour":"05:30","day":"2019-10-29","value":0},{"hour":"06:00","day":"2019-10-29","value":0},{"hour":"06:30","day":"2019-10-29","value":0},{"hour":"07:00","day":"2019-10-29","value":0},{"hour":"07:30","day":"2019-10-29","value":0},{"hour":"08:00","day":"2019-10-29","value":0},{"hour":"08:30","day":"2019-10-29","value":0},{"hour":"09:00","day":"2019-10-29","value":0},{"hour":"09:30","day":"2019-10-29","value":0},{"hour":"10:00","day":"2019-10-29","value":0},{"hour":"10:30","day":"2019-10-29","value":0},{"hour":"11:00","day":"2019-10-29","value":0},{"hour":"11:30","day":"2019-10-29","value":0},{"hour":"12:00","day":"2019-10-29","value":0},{"hour":"12:30","day":"2019-10-29","value":0},{"hour":"13:00","day":"2019-10-29","value":0},{"hour":"13:30","day":"2019-10-29","value":0},{"hour":"14:00","day":"2019-10-29","value":0},{"hour":"14:30","day":"2019-10-29","value":0},{"hour":"15:00","day":"2019-10-29","value":0},{"hour":"15:30","day":"2019-10-29","value":0},{"hour":"16:00","day":"2019-10-29","value":0},{"hour":"16:30","day":"2019-10-29","value":0},{"hour":"17:00","day":"2019-10-29","value":0},{"hour":"17:30","day":"2019-10-29","value":0},{"hour":"18:00","day":"2019-10-29","value":0},{"hour":"18:30","day":"2019-10-29","value":0},{"hour":"19:00","day":"2019-10-29","value":0},{"hour":"19:30","day":"2019-10-29","value":0},{"hour":"20:00","day":"2019-10-29","value":0},{"hour":"20:30","day":"2019-10-29","value":0},{"hour":"21:00","day":"2019-10-29","value":0},{"hour":"21:30","day":"2019-10-29","value":0},{"hour":"22:00","day":"2019-10-29","value":0},{"hour":"22:30","day":"2019-10-29","value":0},{"hour":"23:00","day":"2019-10-29","value":0},{"hour":"23:30","day":"2019-10-29","value":0},{"hour":"00:00","day":"2019-10-30","value":0},{"hour":"00:30","day":"2019-10-30","value":0},{"hour":"01:00","day":"2019-10-30","value":0},{"hour":"01:30","day":"2019-10-30","value":0},{"hour":"02:00","day":"2019-10-30","value":0},{"hour":"02:30","day":"2019-10-30","value":0},{"hour":"03:00","day":"2019-10-30","value":0},{"hour":"03:30","day":"2019-10-30","value":0},{"hour":"04:00","day":"2019-10-30","value":0},{"hour":"04:30","day":"2019-10-30","value":0},{"hour":"05:00","day":"2019-10-30","value":0},{"hour":"05:30","day":"2019-10-30","value":0},{"hour":"06:00","day":"2019-10-30","value":0},{"hour":"06:30","day":"2019-10-30","value":0},{"hour":"07:00","day":"2019-10-30","value":0},{"hour":"07:30","day":"2019-10-30","value":0},{"hour":"08:00","day":"2019-10-30","value":0},{"hour":"08:30","day":"2019-10-30","value":0},{"hour":"09:00","day":"2019-10-30","value":0},{"hour":"09:30","day":"2019-10-30","value":0},{"hour":"10:00","day":"2019-10-30","value":0},{"hour":"10:30","day":"2019-10-30","value":0},{"hour":"11:00","day":"2019-10-30","value":0},{"hour":"11:30","day":"2019-10-30","value":0},{"hour":"12:00","day":"2019-10-30","value":0},{"hour":"12:30","day":"2019-10-30","value":0},{"hour":"13:00","day":"2019-10-30","value":0},{"hour":"13:30","day":"2019-10-30","value":0},{"hour":"14:00","day":"2019-10-30","value":0},{"hour":"14:30","day":"2019-10-30","value":0},{"hour":"15:00","day":"2019-10-30","value":0},{"hour":"15:30","day":"2019-10-30","value":0},{"hour":"16:00","day":"2019-10-30","value":0},{"hour":"16:30","day":"2019-10-30","value":0},{"hour":"17:00","day":"2019-10-30","value":0},{"hour":"17:30","day":"2019-10-30","value":0},{"hour":"18:00","day":"2019-10-30","value":0},{"hour":"18:30","day":"2019-10-30","value":0},{"hour":"19:00","day":"2019-10-30","value":0},{"hour":"19:30","day":"2019-10-30","value":0},{"hour":"20:00","day":"2019-10-30","value":0},{"hour":"20:30","day":"2019-10-30","value":0},{"hour":"21:00","day":"2019-10-30","value":0},{"hour":"21:30","day":"2019-10-30","value":0},{"hour":"22:00","day":"2019-10-30","value":0},{"hour":"22:30","day":"2019-10-30","value":0},{"hour":"23:00","day":"2019-10-30","value":0},{"hour":"23:30","day":"2019-10-30","value":0},{"hour":"00:00","day":"2019-10-31","value":0},{"hour":"00:30","day":"2019-10-31","value":0},{"hour":"01:00","day":"2019-10-31","value":0},{"hour":"01:30","day":"2019-10-31","value":0},{"hour":"02:00","day":"2019-10-31","value":0},{"hour":"02:30","day":"2019-10-31","value":0},{"hour":"03:00","day":"2019-10-31","value":0},{"hour":"03:30","day":"2019-10-31","value":0},{"hour":"04:00","day":"2019-10-31","value":0},{"hour":"04:30","day":"2019-10-31","value":0},{"hour":"05:00","day":"2019-10-31","value":0},{"hour":"05:30","day":"2019-10-31","value":0},{"hour":"06:00","day":"2019-10-31","value":0},{"hour":"06:30","day":"2019-10-31","value":0},{"hour":"07:00","day":"2019-10-31","value":0},{"hour":"07:30","day":"2019-10-31","value":0},{"hour":"08:00","day":"2019-10-31","value":0},{"hour":"08:30","day":"2019-10-31","value":0},{"hour":"09:00","day":"2019-10-31","value":0},{"hour":"09:30","day":"2019-10-31","value":0},{"hour":"10:00","day":"2019-10-31","value":0},{"hour":"10:30","day":"2019-10-31","value":0},{"hour":"11:00","day":"2019-10-31","value":0},{"hour":"11:30","day":"2019-10-31","value":0},{"hour":"12:00","day":"2019-10-31","value":0},{"hour":"12:30","day":"2019-10-31","value":0},{"hour":"13:00","day":"2019-10-31","value":0},{"hour":"13:30","day":"2019-10-31","value":0},{"hour":"14:00","day":"2019-10-31","value":0},{"hour":"14:30","day":"2019-10-31","value":0},{"hour":"15:00","day":"2019-10-31","value":0},{"hour":"15:30","day":"2019-10-31","value":0},{"hour":"16:00","day":"2019-10-31","value":0},{"hour":"16:30","day":"2019-10-31","value":0},{"hour":"17:00","day":"2019-10-31","value":0},{"hour":"17:30","day":"2019-10-31","value":0},{"hour":"18:00","day":"2019-10-31","value":0},{"hour":"18:30","day":"2019-10-31","value":0},{"hour":"19:00","day":"2019-10-31","value":0},{"hour":"19:30","day":"2019-10-31","value":0},{"hour":"20:00","day":"2019-10-31","value":0},{"hour":"20:30","day":"2019-10-31","value":0},{"hour":"21:00","day":"2019-10-31","value":0},{"hour":"21:30","day":"2019-10-31","value":0},{"hour":"22:00","day":"2019-10-31","value":0},{"hour":"22:30","day":"2019-10-31","value":0},{"hour":"23:00","day":"2019-10-31","value":0},{"hour":"23:30","day":"2019-10-31","value":0},{"hour":"00:00","day":"2019-11-01","value":0},{"hour":"00:30","day":"2019-11-01","value":0},{"hour":"01:00","day":"2019-11-01","value":0},{"hour":"01:30","day":"2019-11-01","value":0},{"hour":"02:00","day":"2019-11-01","value":0},{"hour":"02:30","day":"2019-11-01","value":0},{"hour":"03:00","day":"2019-11-01","value":0},{"hour":"03:30","day":"2019-11-01","value":0},{"hour":"04:00","day":"2019-11-01","value":0},{"hour":"04:30","day":"2019-11-01","value":0},{"hour":"05:00","day":"2019-11-01","value":0},{"hour":"05:30","day":"2019-11-01","value":0},{"hour":"06:00","day":"2019-11-01","value":0},{"hour":"06:30","day":"2019-11-01","value":0},{"hour":"07:00","day":"2019-11-01","value":0},{"hour":"07:30","day":"2019-11-01","value":0},{"hour":"08:00","day":"2019-11-01","value":0},{"hour":"08:30","day":"2019-11-01","value":0},{"hour":"09:00","day":"2019-11-01","value":0},{"hour":"09:30","day":"2019-11-01","value":0},{"hour":"10:00","day":"2019-11-01","value":0},{"hour":"10:30","day":"2019-11-01","value":0},{"hour":"11:00","day":"2019-11-01","value":0},{"hour":"11:30","day":"2019-11-01","value":0},{"hour":"12:00","day":"2019-11-01","value":0},{"hour":"12:30","day":"2019-11-01","value":0},{"hour":"13:00","day":"2019-11-01","value":0},{"hour":"13:30","day":"2019-11-01","value":0},{"hour":"14:00","day":"2019-11-01","value":0},{"hour":"14:30","day":"2019-11-01","value":0},{"hour":"15:00","day":"2019-11-01","value":0},{"hour":"15:30","day":"2019-11-01","value":0},{"hour":"16:00","day":"2019-11-01","value":0},{"hour":"16:30","day":"2019-11-01","value":0},{"hour":"17:00","day":"2019-11-01","value":0},{"hour":"17:30","day":"2019-11-01","value":0},{"hour":"18:00","day":"2019-11-01","value":0},{"hour":"18:30","day":"2019-11-01","value":0},{"hour":"19:00","day":"2019-11-01","value":0},{"hour":"19:30","day":"2019-11-01","value":0},{"hour":"20:00","day":"2019-11-01","value":0},{"hour":"20:30","day":"2019-11-01","value":0},{"hour":"21:00","day":"2019-11-01","value":0},{"hour":"21:30","day":"2019-11-01","value":0},{"hour":"22:00","day":"2019-11-01","value":0},{"hour":"22:30","day":"2019-11-01","value":0},{"hour":"23:00","day":"2019-11-01","value":0},{"hour":"23:30","day":"2019-11-01","value":0},{"hour":"00:00","day":"2019-11-02","value":0},{"hour":"00:30","day":"2019-11-02","value":0},{"hour":"01:00","day":"2019-11-02","value":0},{"hour":"01:30","day":"2019-11-02","value":0},{"hour":"02:00","day":"2019-11-02","value":0},{"hour":"02:30","day":"2019-11-02","value":0},{"hour":"03:00","day":"2019-11-02","value":0},{"hour":"03:30","day":"2019-11-02","value":0},{"hour":"04:00","day":"2019-11-02","value":0},{"hour":"04:30","day":"2019-11-02","value":0},{"hour":"05:00","day":"2019-11-02","value":0},{"hour":"05:30","day":"2019-11-02","value":0},{"hour":"06:00","day":"2019-11-02","value":0},{"hour":"06:30","day":"2019-11-02","value":0},{"hour":"07:00","day":"2019-11-02","value":0},{"hour":"07:30","day":"2019-11-02","value":0},{"hour":"08:00","day":"2019-11-02","value":0},{"hour":"08:30","day":"2019-11-02","value":0},{"hour":"09:00","day":"2019-11-02","value":0},{"hour":"09:30","day":"2019-11-02","value":0},{"hour":"10:00","day":"2019-11-02","value":0},{"hour":"10:30","day":"2019-11-02","value":0},{"hour":"11:00","day":"2019-11-02","value":0},{"hour":"11:30","day":"2019-11-02","value":0},{"hour":"12:00","day":"2019-11-02","value":0},{"hour":"12:30","day":"2019-11-02","value":0},{"hour":"13:00","day":"2019-11-02","value":0},{"hour":"13:30","day":"2019-11-02","value":0},{"hour":"14:00","day":"2019-11-02","value":0},{"hour":"14:30","day":"2019-11-02","value":0},{"hour":"15:00","day":"2019-11-02","value":0},{"hour":"15:30","day":"2019-11-02","value":0},{"hour":"16:00","day":"2019-11-02","value":0},{"hour":"16:30","day":"2019-11-02","value":0},{"hour":"17:00","day":"2019-11-02","value":0},{"hour":"17:30","day":"2019-11-02","value":0},{"hour":"18:00","day":"2019-11-02","value":0},{"hour":"18:30","day":"2019-11-02","value":0},{"hour":"19:00","day":"2019-11-02","value":0},{"hour":"19:30","day":"2019-11-02","value":0},{"hour":"20:00","day":"2019-11-02","value":0},{"hour":"20:30","day":"2019-11-02","value":0},{"hour":"21:00","day":"2019-11-02","value":0},{"hour":"21:30","day":"2019-11-02","value":0},{"hour":"22:00","day":"2019-11-02","value":0},{"hour":"22:30","day":"2019-11-02","value":0},{"hour":"23:00","day":"2019-11-02","value":0},{"hour":"23:30","day":"2019-11-02","value":0},{"hour":"00:00","day":"2019-11-03","value":0},{"hour":"00:30","day":"2019-11-03","value":0},{"hour":"01:00","day":"2019-11-03","value":0},{"hour":"01:30","day":"2019-11-03","value":0},{"hour":"02:00","day":"2019-11-03","value":0},{"hour":"02:30","day":"2019-11-03","value":0},{"hour":"03:00","day":"2019-11-03","value":0},{"hour":"03:30","day":"2019-11-03","value":0},{"hour":"04:00","day":"2019-11-03","value":0},{"hour":"04:30","day":"2019-11-03","value":0},{"hour":"05:00","day":"2019-11-03","value":0},{"hour":"05:30","day":"2019-11-03","value":0},{"hour":"06:00","day":"2019-11-03","value":0},{"hour":"06:30","day":"2019-11-03","value":0},{"hour":"07:00","day":"2019-11-03","value":0},{"hour":"07:30","day":"2019-11-03","value":0},{"hour":"08:00","day":"2019-11-03","value":0},{"hour":"08:30","day":"2019-11-03","value":0},{"hour":"09:00","day":"2019-11-03","value":0},{"hour":"09:30","day":"2019-11-03","value":0},{"hour":"10:00","day":"2019-11-03","value":0},{"hour":"10:30","day":"2019-11-03","value":0},{"hour":"11:00","day":"2019-11-03","value":0},{"hour":"11:30","day":"2019-11-03","value":0},{"hour":"12:00","day":"2019-11-03","value":0},{"hour":"12:30","day":"2019-11-03","value":0},{"hour":"13:00","day":"2019-11-03","value":0},{"hour":"13:30","day":"2019-11-03","value":0},{"hour":"14:00","day":"2019-11-03","value":0},{"hour":"14:30","day":"2019-11-03","value":0},{"hour":"15:00","day":"2019-11-03","value":0},{"hour":"15:30","day":"2019-11-03","value":0},{"hour":"16:00","day":"2019-11-03","value":0},{"hour":"16:30","day":"2019-11-03","value":0},{"hour":"17:00","day":"2019-11-03","value":0},{"hour":"17:30","day":"2019-11-03","value":0},{"hour":"18:00","day":"2019-11-03","value":0},{"hour":"18:30","day":"2019-11-03","value":0},{"hour":"19:00","day":"2019-11-03","value":0},{"hour":"19:30","day":"2019-11-03","value":0},{"hour":"20:00","day":"2019-11-03","value":0},{"hour":"20:30","day":"2019-11-03","value":0},{"hour":"21:00","day":"2019-11-03","value":0},{"hour":"21:30","day":"2019-11-03","value":0},{"hour":"22:00","day":"2019-11-03","value":0},{"hour":"22:30","day":"2019-11-03","value":0},{"hour":"23:00","day":"2019-11-03","value":0},{"hour":"23:30","day":"2019-11-03","value":0}],"errorCode":null}
        if (res.success && res.obj.length > 0){
            this.setState({
                data: res.obj
            })
        }
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
                title={<div className={styles.cardTitle}>上网时间分布（最近7天）</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "上网时间分布（最近7天）"
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
                        padding={[20, 30, 45, 90]}
                        data={this.state.data}
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
                        forceFit
                    >
                        <Axis
                            name="day"
                            line={null}
                            tickLine={null}
                            grid={null}
                        />
                        <Axis
                            name="hour"
                        />
                        <Tooltip/>
                        <Geom
                            type="point"
                            position="hour*day"
                            color="day"
                            shape="circle"
                            size={["value", [2, (window.innerWidth - 120) / 100]]}
                            tooltip="day*hour*value"
                            opacity={0.5}
                        />
                    </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}