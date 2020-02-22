import React, {Component, Fragment} from 'react';
// import {postAction} from "src/axios";
import { Card, Select } from 'antd';
import {Chart,Geom,Axis,Tooltip} from "bizcharts";
import DownLoad from './DownLoad';
import NoData from './NoData';
import styles from '../../index.module.less';
const { Option } = Select;

export default class JiangZhu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            semesterList: [
                {name: '大三上学期', value: '3-0'},
                {name: '大二下学期', value: '2-1'},
                {name: '大二上学期', value: '2-0'},
                {name: '大一下学期', value: '1-1'},
                {name: '大一上学期', value: '1-0'}
            ],
            curSemester: '',
            data : [
                { name: '计算机院', value: 117 },
                { name: '计算机院1', value: 118 },
                { name: '计算机院2', value: 119 },
                { name: '计算机院3', value: 120 },
                { name: '计算机院4', value: 121 }
            ],
        }
    }

    componentDidMount () {
        // this.getData()
    }

    componentDidUpdate (prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            // setTimeout(() => {
            //     this.getData()
            // }, 50)
        }
    }

    getData () {
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
        //             let _chartData = [];
        //             res.obj.detail.forEach(
        //                 (item, index) => {
        //                     _chartData.push({
        //                         name: item.name,
        //                         value: item.count,
        //                     })
        //                 }
        //             )
        //             this.setState({
        //                 chartData: _chartData,
        //                 total: res.obj.total.count
        //             })
        //         }
        //     }
        // )
    }

    downloadDetail(){
        
    }

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>个人奖助情况</div>}
                extra={
                    <Fragment>
                        <Select style={{ width: 150 }} value={this.state.curSemester}>
                            <Option value=''>全部学期</Option>
                            {
                                this.state.semesterList.map((item, i) => {
                                    return <Option key={i} value={item.value}>{item.name}</Option>
                                })
                            }
                        </Select>
                        <DownLoad
                            downloadChart={{
                                chartIns: this.state.chartIns,
                                title: "个人奖助情况"
                            }} 
                            downloadDetail={this.downloadDetail}
                        />
                    </Fragment>  
                }
                bordered={false}
                headStyle={{ border: 'none' }}
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