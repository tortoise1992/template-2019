import React, {Component} from 'react';
// import {postAction} from "src/axios";
import { Card } from 'antd';
import { Chart, Legend, Geom, Axis, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../../index.module.less';
const { DataView } = DataSet;

export default class JieYueShuLiang extends Component {
    state = {
        chartIns: null,
        data: [  
            {
                label: "B180201",
                '16年': 2800,
                '17年': 2260
            },
            {
                label: "B180202",
                '16年': 1800,
                '17年': 1300
            },
            {
                label: "B180203",
                '16年': 950,
                '17年': 900
            },
            {
                label: "B180204",
                '16年': 500,
                '17年': 390
            },
            {
                label: "B180205",
                '16年': 170,
                '17年': 100
            }
        ]
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
                title={<div className={styles.cardTitle}>图书馆借阅数量</div>}
                extra={
                    <DownLoad
                        downloadChart={{
                            chartIns: this.state.chartIns,
                            title: "图书馆借阅数量"
                        }} 
                        downloadDetail={this.downloadDetail}
                    />
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
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
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

