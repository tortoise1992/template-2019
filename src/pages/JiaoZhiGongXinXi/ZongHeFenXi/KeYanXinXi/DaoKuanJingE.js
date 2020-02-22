import React, { Component } from 'react'
// import {postAction} from "src/axios";
import {Card} from 'antd';
import {Chart,Legend,Geom,Axis,Tooltip} from "bizcharts";
import styles from '../index.module.less';
import DownLoad from './DownLoad';
import NoData from './NoData';


export default class DaoKuanJingE extends Component {
    state = {
        chartIns: null,
        data : [
                { name: '2014', value: 117},
                { name: '2015', value: 118},
                { name: '2016', value: 121},
                { name: '2017', value: 120},
                { name: '2018', value: 121},
                { name: '2019', value: 121},
            ],
    }
    downloadDetail = () => {
        
    }

    render() {
        return (
            <Card 
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>项目到款金额</div>}
                extra={
                    <DownLoad
                        downloadChart={{
                            chartIns: this.state.chartIns,
                            title: "项目到款金额"
                        }}
                        downloadDetail={this.downloadDetail}
                    />
                }
                bordered={false}
                headStyle={{ border: 'none' }}
                bodyStyle={{paddingTop: 10}}
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
                                    <Legend />
                                    <Axis name="name"/>
                                    <Axis name="value" />
                                    <Tooltip
                                        showTitle={false}
                                        itemTpl={
                                            `<li data-index={index}>
                                                <p>项目到款金额</p>
                                                <span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>
                                                {name}: {value}
                                            </li>`
                                        }
                                    />
                                    <Geom type="interval" position="name*value" 
                                        tooltip={['name*value', (name, value)=>{
                                            return {
                                                name:name,
                                                value:value
                                            }
                                        }]}
                                    />
                                </Chart>
                            :<NoData height={this.props.height} />
                        }
            </Card>
        )
    }
}
