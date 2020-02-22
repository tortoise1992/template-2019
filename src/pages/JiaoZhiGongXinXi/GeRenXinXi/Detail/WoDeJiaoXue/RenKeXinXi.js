import React, { Component } from 'react'
import {Card, Table, Select } from 'antd';
// import { postAction } from "src/axios"
import styles from '../../index.module.less';
import DownLoad from './DownLoad';
const Option = Select.Option;


export default class RenKeXinXi extends Component {
    state = {
        semester:'',
        semesterLists: [
            {name: '2019学年第二学期', value: '201902'},
            {name: '2019学年第一学期', value: '201901'},
        ], //个人成绩排名学期筛选条件
        dataSource: [
            {
                sortIndex: 1, 
                key: 1, 
                hour: '上午',
                num: '1-2', 
                monday: '投资经济学[1-8周]1-2节九龙湖教二301', 
                tuesday: '', 
                wednesday: '投资经济学[1-8周]1-2节九龙湖教二301',
                thursday: '毛概1-2节302',
                friday: '机械原理1-2节708',
                saturday: '高等数学1-2节604',
                sunday:''
            }
        ],
        columns: [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: 50,
            align: 'center',
            fixed: 'left',
        }, {
            title: '上午/下午',
            dataIndex: 'hour',
            align: 'center'
        }, {
            title: '节数',
            dataIndex: 'num',
            align: 'center'
        }, {
            title: '星期一',
            dataIndex: 'monday',
            align: 'center'
        }, {
            title: '星期二',
            dataIndex: 'tuesday',
            align: 'center'
        }, {
            title: '星期三',
            dataIndex: 'wednesday',
            align: 'center'
        }, {
            title: '星期四',
            dataIndex: 'thursday',
            align: 'center'
        }, {
            title: '星期五',
            dataIndex: 'friday',
            align: 'center'
        }, {
            title: '星期六',
            dataIndex: 'saturday',
            align: 'center'
        }, {
            title: '星期日',
            dataIndex: 'sunday',
            align: 'center'
        }],
    }

    //获取课程
    getQueryCourseSemester(){
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
            // this.getQueryCourseSemester();
        })
    }
    
    downloadDetail = () => {
        
    }
    render() {
        return (
            <Card 
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>任课信息</div>}
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
                            downloadDetail={this.downloadDetail}
                        />
                    </React.Fragment>
                }
                bordered={false}
                headStyle={{ border: 'none' }}
                bodyStyle={{paddingTop: 10}}
            >
                <Table
                    dataSource={this.state.dataSource}
                    columns={this.state.columns}
                    pagination={false}
                    size='middle'
                    bordered={true}
                    scroll={{ x:1800 }}
                />
            </Card>
        )
    }
}
