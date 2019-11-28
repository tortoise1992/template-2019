import React, { Component } from 'react'
import echarts from 'echarts'
export default class Echart extends Component {
    state={
        chartId:''
    }
    componentDidMount() {
        let chartId=new Date().getTime()+Math.random()        
        this.setState({
            chartId
        },()=>{
            let chartIns=echarts.init(document.getElementById(chartId))
            chartIns.setOption(this.props.option)
        })
    }
    
    render() {
        return (
            <div id={this.state.chartId} style={{height:350}}>
                
            </div>
        )
    }
}
