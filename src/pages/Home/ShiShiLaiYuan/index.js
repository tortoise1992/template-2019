import React, { Component } from 'react'
import Echart from '@/components/Echart'
import 'echarts/map/js/china'
import geoCoordMap from './geo'
import { Card } from 'antd'
export default class ShiShiLaiYuan extends Component {
    state = {
        option: null
    }
    componentDidMount() {
        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord
                    }, {
                        coord: toCoord
                    }]);
                }
            }
            return res;
        };
        let BJData = [
            [{ name: '北京' }, { name: '上海', value: 95 }],
            [{ name: '北京' }, { name: '广州', value: 90 }],
            [{ name: '北京' }, { name: '大连', value: 80 }],
            [{ name: '北京' }, { name: '南宁', value: 70 }],
            [{ name: '北京' }, { name: '南昌', value: 60 }],
            [{ name: '北京' }, { name: '拉萨', value: 50 }],
            [{ name: '北京' }, { name: '长春', value: 40 }],
            [{ name: '北京' }, { name: '包头', value: 30 }],
            [{ name: '北京' }, { name: '重庆', value: 20 }],
            [{ name: '北京' }, { name: '常州', value: 10 }]
        ]
        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var series = [];
        [['北京', BJData]].forEach(function (item, i) {
            series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });

        let option = {
            backgroundColor: '#404a59',
            title: {
                text: '',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: series
        };
        this.setState({
            option
        })
    }
    render() {
        return (
            <Card title='实时用户统计' bodyStyle={{padding:0}}>                
                <Echart option={this.state.option} />
            </Card>
        )
    }
}
