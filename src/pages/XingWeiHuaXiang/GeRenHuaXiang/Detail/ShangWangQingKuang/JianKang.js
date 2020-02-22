import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Geom, Axis, Coord, Guide, Shape } from 'bizcharts'
// import {postAction} from "@/axios";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../../index.module.less';


export default class JianKang extends Component {

    state = {
        chartIns: null,
        data: [{
            value: 5.67
        }],
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            // setTimeout(() => {
            //     this.getData()
            // }, 50)
        }
    }

    getData() {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
        // let year = new Date().getFullYear()
        // postAction(
        //     '/bigdata/netTime/surfHealthByOneSelf',
        //     {
        //         year: year,
        //         studentNo: _studentNo
        //     }
        // ).then((res) => {
        //     if (res.success && res.obj) {
        //         this.setState({
        //             data: [{
        //                 value: (res.obj.internetHealth * 10) / 10
        //             }]
        //         })
        //     }
        // })
    }

    downloadDetail = () => {

    }

    render() {
        const { Html, Arc } = Guide
        Shape.registerShape('point', 'pointer', {
            drawShape(cfg, group) {
                let point = cfg.points[0] // 获取第一个标记点

                point = this.parsePoint(point);
                const center = this.parsePoint({
                    // 获取极坐标系下画布中心点
                    x: 0,
                    y: 0
                }); // 绘制指针

                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: point.x,
                        y2: point.y - 20,
                        stroke: cfg.color,
                        lineWidth: 5,
                        lineCap: 'round'
                    }
                });
                return group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 12,
                        stroke: cfg.color,
                        lineWidth: 4.5,
                        fill: '#fff'
                    }
                });
            }

        });
        const cols = {  //调整仪表盘刻度
            value: {
                min: 0,
                max: 9,
                tickInterval: 1,
                nice: false
            }
        };
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>本学年上网流量趋势</div>}
                extra={<DownLoad
                    downloadChart={{
                        chartIns: this.state.chartIns,
                        title: "本学年上网流量趋势"
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
                        data={this.state.data}
                        scale={cols}
                        padding={[0, 0, 30, 0]}
                        onGetG2Instance={(chartIns) => {
                            this.setState({ chartIns })
                        }}
                        forceFit
                    >
                        <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
                        <Axis name="value" zIndex={2} line={null} label={{
                            offset: -16,
                            textStyle: {
                                fontSize: 18,
                                textAlign: 'center',
                                textBaseline: 'middle'
                            }
                        }} subTickCount={4} subTickLine={{
                            length: -8,
                            stroke: '#fff',
                            strokeOpacity: 1
                        }} tickLine={{
                            length: -18,
                            stroke: '#fff',
                            strokeOpacity: 1
                        }} />
                        <Axis name="1" visible={false} />
                        <Guide>
                            <Arc zIndex={0} start={[0, 0.965]} end={[9, 0.965]} style={{
                                // 渐变底色
                                stroke: 'l(0) 0:#FF5430 0.3:#887EDF 0.6:#53A0FD 1:#B4EC51',
                                lineWidth: 22
                            }} />
                            <Arc zIndex={1} start={[0, 0.965]} end={[this.state.data[0].value, 0.965]} style={{
                                // 指针指过之后的颜色
                                stroke: 'transparent',
                                lineWidth: 22
                            }} />
                            <Html position={['50%', '95%']} html={() => `<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0px;">${(this.state.data[0].value * 10).toFixed(2)}%</p></div>`} />
                        </Guide>
                        <Geom type="point" position="value*1" shape="pointer" color="#1890FF" active={false} style={{
                            stroke: '#fff',
                            lineWidth: 1
                        }} />
                    </Chart> : <NoData height={this.props.height} />
                }
            </Card>
        )
    }
}