import React, {Component, Fragment} from 'react';
// import {postAction} from "src/axios";
import { Card, Select } from 'antd';
import { Chart, Legend, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../../index.module.less';
const { Option } = Select;
const { DataView } = DataSet;

export default class XueShengChengJi extends Component {
    state = {
        semester:'',
        semesterLists: [
            {name: '2019学年第二学期', value: '201902'},
            {name: '2019学年第一学期', value: '201901'},
        ], //个人成绩排名学期筛选条件

        chartIns: null,
        data: [  
            { name: "2019", '专业平均（柱状）': 6.9,  '专业平均（折线）': 80 },
            { name: "2018", '专业平均（柱状）': 9.5,  '专业平均（折线）': 120 },
            { name: "2017", '专业平均（柱状）': 14.2,  '专业平均（折线）': 100 },
            { name: "2016", '专业平均（柱状）': 18.5, '专业平均（折线）': 90 },
        ]
    }

    //获取学生成绩
    getQueryStudentScore(){
        // postAction(
        //     "/bigdata/studentScoresWeight/queryStudentSemester",
        //     {
        //         studentNo: _studentNo
        //     }
        // ).then(
        //     (res) => {
        //         if (res.success) {
        //             if (res.obj && res.obj.length > 0) {
        //                 this.setState({
        //                     semesterLists: res.obj,
        //                     beginDate: res.obj[1].semesterYear + '' + res.obj[1].semester,
        //                     endDate: res.obj[0].semesterYear + '' + res.obj[0].semester,
        //                 }, () => {
        //                     this.getData();
        //                     this.getRankingData();
        //                 })
        //             }
        //         }
        //     }
        // )
    }

    changeSelect = (value) =>{
        this.setState({
            semester:value
        },()=>{
            // this.getQueryStudentScore();
        })
    }
    
    downloadDetail = () => {
        
    }

    render() {
        let {data} = this.state;
        const dv = new DataView();
        dv.source(data).transform({
            type: "fold",
            fields: ["专业平均（柱状）"],
            // 展开字段集
            key: "type",
            // key字段
            value: "value" // value字段
        });
        let colors = ['#45a3fc', '#56ca77'];
        let LineDataKey = ['专业平均（折线）'];
        let scale = {
            '专业平均（柱状）': { min: 0, tickCount: 6 },
            '专业平均（折线）': { min: 0, tickCount: 6 },
        }

        return (
            <Card 
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>学生成绩</div>}
                extra={
                    <React.Fragment>
                        <Select style={{ width: 220 }} onChange={this.changeSelect} value={this.state.semester}>
                            <Option value=''>请选择</Option>
                            {
                                this.state.semesterLists.map((item, i) => {
                                    return <Option key={i} value={item.value}>{item.name}</Option>
                                })
                            }
                        </Select>
                        <DownLoad
                            downloadChart={{
                                chartIns: this.state.chartIns,
                                title: "学生成绩"
                            }} 
                            downloadDetail={this.downloadDetail}
                        />
                    </React.Fragment>
                }
                bordered={false}
                headStyle={{ border: 'none' }}
                bodyStyle={{paddingTop: 10}}
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
                            },  {
                                value: "专业平均（折线）",
                                marker: {
                                    symbol: "hyphen",
                                    stroke: colors[1],
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
                                        color={colors[1]}
                                    />
                                    <Geom
                                        type="point"
                                        position={`name*${item}`}
                                        size={4}
                                        shape={"circle"}
                                        color={colors[1]}
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
