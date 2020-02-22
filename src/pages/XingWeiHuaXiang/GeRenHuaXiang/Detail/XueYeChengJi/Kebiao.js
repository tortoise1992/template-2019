import React, { Component } from 'react';
import { Card, Table, Row, Col } from 'antd';
import DownLoad from './DownLoad';
import styles from '../../index.module.less';
// import { postAction } from "src/axios"


export default class ChengJi extends Component {

    state = {
        dataSource1: [
            {
              key: '1',
              sortIndex: '1',
              lesson: '公共课',
              teacher: '小米',
              credit: 2.4,
              week: '1-8周',
            }
        ],
        dataSource2: [
            {
                key: '1',
                time: '上午',
                section: '1-2节',
                monday: '周一',
                tuesday: '周二',
                wednesday: '投资课程<br/>1-3节<br/>301教师',
                thursday: '周四',
                friday: '周五',
                saturday: '周六',
                sunday: '周天'
            }
        ],
        columns1: [{
            title: '序号',
            dataIndex: 'sortIndex',
            align: 'center',
        }, {
            title: '课程名称',
            dataIndex: 'lesson',
            align: 'center',
            render: (text) => {
                return (
                    <span title={text}>{text}</span>
                )
            }
        }, {
            title: '教师',
            dataIndex: 'teacher',
            align: 'center',
        }, {
            title: '学分',
            dataIndex: 'credit',
            align: 'center',
        }, {
            title: '上课周数',
            dataIndex: 'week',
            align: 'center',
        }],
        columns2: [{
            title: '上午/下午',
            dataIndex: 'time',
            align: 'center',
        }, {
            title: '节数',
            dataIndex: 'section',
            align: 'center',
        }, {
            title: '星期一',
            dataIndex: 'monday',
            align: 'center',
            render: (text) => {
                return (<div dangerouslySetInnerHTML={{ __html: text }}></div>)
            }
        }, {
            title: '星期二',
            dataIndex: 'tuesday',
            align: 'center',
            render: (text) => {
                return (<div dangerouslySetInnerHTML={{ __html: text }}></div>)
            }
        }, {
            title: '星期三',
            dataIndex: 'wednesday',
            align: 'center',
            render: (text) => {
                return (<div dangerouslySetInnerHTML={{ __html: text }}></div>)
            }
        }, {
            title: '星期四',
            dataIndex: 'thursday',
            align: 'center',
            render: (text) => {
                return (<div dangerouslySetInnerHTML={{ __html: text }}></div>)
            }
        }, {
            title: '星期五',
            dataIndex: 'friday',
            align: 'center',
            render: (text) => {
                return (<div dangerouslySetInnerHTML={{ __html: text }}></div>)
            }
        }, {
            title: '星期六',
            dataIndex: 'saturday',
            align: 'center',
            render: (text) => {
                return (<div dangerouslySetInnerHTML={{ __html: text }}></div>)
            }
        }, {
            title: '星期日',
            dataIndex: 'sunday',
            align: 'center',
            render: (text) => {
                return (<div dangerouslySetInnerHTML={{ __html: text }}></div>)
            }
        }]
    }

    componentDidMount() {
        // this.getData();
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

    downloadDetail = () => {

    }

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>本学期个人课表情况</div>}
                extra={<DownLoad
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                <Row gutter={15}>
                    <Col span={7}>
                        <Table
                            columns={this.state.columns1}
                            dataSource={this.state.dataSource1}
                            bordered
                            pagination={this.state.pagination}
                            onChange={this.handleTableChange}
                            size="middle"
                        />
                    </Col>
                    <Col span={17}>
                        <Table
                            columns={this.state.columns2}
                            dataSource={this.state.dataSource2}
                            bordered
                            size="middle"
                        />
                    </Col>
                </Row>
            </Card>
        )
    }
}