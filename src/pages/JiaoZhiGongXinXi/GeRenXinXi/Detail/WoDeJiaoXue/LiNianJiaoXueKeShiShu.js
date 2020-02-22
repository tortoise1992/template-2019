import React, { Component } from 'react'
// import {postAction} from "src/axios";
import {Card } from 'antd';
import {Chart,Geom,Axis,Tooltip} from "bizcharts";
import styles from '../../index.module.less';
import DownLoad from './DownLoad';
import NoData from './NoData';


export default class LiNianJiaoXueKeShiShu extends Component {
    state = {
        chartIns: null,
        data : [
                { name: '2011-2012', value: 117 },
                { name: '2012-2013', value: 118 },
                { name: '2013-2014', value: 119 },
                { name: '2014-2015', value: 120 },
                { name: '2015-2016', value: 121 },
                { name: '2016-2017', value: 120 },
                { name: '2017-2018', value: 121 },
                { name: '2018-2019', value: 121 },
            ],
    }
    downloadDetail = () => {
        
    }

    render() {
        return (
            <Card 
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>历年教学课时数</div>}
                extra={
                    <DownLoad
                        downloadChart={{
                            chartIns: this.state.chartIns,
                            title: "历年教学课时数"
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
