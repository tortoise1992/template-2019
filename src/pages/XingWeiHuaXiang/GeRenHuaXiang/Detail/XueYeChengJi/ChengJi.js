import React, { Component } from 'react';
import { Card, Button, Table, Select } from 'antd';
import DownLoad from './DownLoad';
import styles from '../../index.module.less';
// import { postAction } from "src/axios"
const Option = Select.Option;


export default class ChengJi extends Component {

    state = {
        semesterLists: [
            {name: '2019学年第二学期', value: '201902'},
            {name: '2019学年第一学期', value: '201901'},
        ], //个人成绩排名学期筛选条件
        beginDate: '201901',
        endDate: '201902',
        ranking:"0/0",
        dataSource: [
            {sortIndex: 1, key: 1, name: '发展经济学', type: 1, results: 100, classRanking: '111/222', professionalRanking: '111/111'}
        ],
        columns: [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: '10%',
            align: 'center'
        }, {
            title: '课程名称',
            dataIndex: 'name',
            align: 'center'
        }, {
            title: '课程类别',
            dataIndex: 'type',
            align: 'center'
        }, {
            title: '成绩',
            dataIndex: 'results',
            align: 'center'
        }, {
            title: '班级排名',
            dataIndex: 'classRanking',
            align: 'center'
        }, {
            title: '专业排名',
            dataIndex: 'professionalRanking',
            align: 'center'
        }],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 10, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
    }

    componentDidMount() {
        // this.getQueryStudentSemester();
    }


    getData = () => {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
        // const begin = this.state.beginDate.split("-");
        // const lasbegin = begin[1].split("");
        // const _beginDate = `${begin[0]}${lasbegin[lasbegin.length-1]}`;

        // const end = this.state.endDate.split("-");
        // const lasEnd = end[1].split("");
        // const _endDate = `${end[0]}${lasEnd[lasEnd.length-1]}`;
        // postAction(
        //     '/bigdata/score/personalScoreRank',
        //     {
        //         studentNo: _studentNo,
        //         beginDate: _beginDate,
        //         endDate: _endDate,
        //         // pageInfo: {
        //         //     pageNum: current,
        //         //     pageSize: pageSize
        //         // }
        //     }
        // ).then((res) => {
        //     if (res.success) {
        //         if (res.obj && res.obj && res.obj.length > 0) {
        //             let newData = []
        //             res.obj.map((item, index) => (
        //                 newData.push({
        //                     key: index + 1,
        //                     sortIndex: index + 1,
        //                     name: item.courseName,
        //                     type: item.courseType,
        //                     results: item.score,
        //                     classRanking: item.classRownum,
        //                     professionalRanking: item.majRownum
        //                 })
        //             ))
        //             this.setState({
        //                 dataSource: newData,
        //                 pagination: {
        //                     // current: 1, // 当前页数，
        //                     pageSize: 10, // 每页条数
        //                     total: res.obj.total, // 数据总条数
        //                     showTotal: (total) => `共${total}条数据`, //显示数据总条数
        //                     showQuickJumper: true // 显示页码快速跳转
        //                 }
        //             })
        //         }
        //     }
        // })
    }

    // 学年学期筛选条件
    getQueryStudentSemester(){
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
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

    handleTableChange = (pagination) => {
        this.setState(
            () => {
                return {
                    pagination: {
                        current: pagination.current, // 当前页数，
                        pageSize: pagination.pageSize, // 每页条数
                        total: pagination.total, // 数据总条数
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
                    }
                }
            },
            () => {
                // this.getData()
            }
        )
    }

    //更换学期
    handleChange = (type, value) => {
        if(type === 0){
            this.setState({beginDate: value})
        }else if(type === 1){
            this.setState({endDate: value})
        }
    }

    //查询
    search = () => {
        // this.getData();
    }

    downloadDetail = () => {
        
    }

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>个人成绩排名
                    <p>个人学业情况（专业）：<span>{this.state.ranking}</span></p>
                </div>}
                extra={<DownLoad
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                <div style={{marginBottom:'20px', textAlign:'right'}}>
                    <Select style={{ width: 220, marginRight: 10 }} value={this.state.beginDate}>
                        {
                            this.state.semesterLists.map((item, i) => {
                                return <Option key={i} value={item.value}>{item.name}</Option>
                            })
                        }
                    </Select>
                    至
                    <Select style={{ width: 220, marginLeft: 10 }} value={this.state.endDate}>
                        {
                            this.state.semesterLists.map((item, i) => {
                                return <Option key={i} value={item.value}>{item.name}</Option>
                            })
                        }
                    </Select>
                    <Button type='primary' onClick={this.search} style={{marginLeft: 10}}>查 询</Button>
                </div>
                <Table
                    dataSource={this.state.dataSource}
                    columns={this.state.columns}
                    pagination={this.state.pagination}
                    size='middle'
                    bordered={true}
                    onChange={this.handleTableChange.bind(this)}
                />
            </Card>
        )
    }
}