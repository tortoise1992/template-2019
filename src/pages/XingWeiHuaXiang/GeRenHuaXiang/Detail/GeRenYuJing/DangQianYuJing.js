import React, { Component } from 'react';
import { Card, Table } from 'antd';
// import { postAction } from "src/axios"
import DownLoad from './DownLoad';
import styles from '../../index.module.less';

export default class DangQianYuJing extends Component {

    state = {
        dataSource: [
            { sortIndex: 1, key: 1, time: '2017-12-27 17:46:12',desc: '本月日均消费480', level: '一级', type: '消费预警', result: '已处理' },
        ],
        columns: [
            {
                title: '序号',
                dataIndex: 'sortIndex',
                key: 'sortIndex',
                width: '10%',
            }, {
                title: '预警时间',
                dataIndex: 'time',
                key: 'time'
            }, {
                title: '预警描述',
                dataIndex: 'desc',
                key: 'desc'
            }, {
                title: '预警级别',
                dataIndex: 'level',
                key: 'level',
            }, {
                title: '预警类别',
                dataIndex: 'type',
                key: 'type',
            }, {
                title: '处理结果',
                dataIndex: 'result',
                key: 'result',
            }
        ],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 5, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
    }

    componentDidMount() {
        // this.getData()
    }

    getData() {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
        // let year = new Date().getFullYear();
        // postAction(
        //     '/bigdata/book/bookOnlineBorrow',
        //     {
        //         studentNo: _studentNo,
        //         year: year,
        //         pageInfo: {
        //             pageNum: 1,
        //             pageSize: this.state.pagination.total
        //         }
        //     }
        // ).then((res) => {
        //     if (res.success) {
        //         let objData = []
        //         res.obj.list && res.obj.list.map((element, index) => (
        //             objData.push({
        //                 key: index + 1,
        //                 sortIndex: element.sortIndex,
        //                 bookName: element.bookName,
        //                 publishing: element.press,
        //                 time: element.day
        //             })
        //         ))
        //         this.setState({
        //             allData: objData,
        //         })
        //     }
        // })
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
                // this.getData();
            }
        )
    }

    downloadDetail = () => {

    }

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>当前预警事件</div>}
                extra={<DownLoad
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
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