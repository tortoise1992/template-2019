import React, { Component } from 'react';
import { Card, Table } from 'antd';
// import { postAction } from "src/axios"
import styles from './index.module.less';

export default class ZiChanJieGouZongZhiMingXi extends Component {

    state = {
        dataSource: [
            { sortIndex: '1', key: '1', type: '房屋及构建物', money: 500},
            { sortIndex: '2', key: '2', type: '房屋及构建物', money: 500},
            { sortIndex: '3', key: '3', type: '房屋及构建物', money: 500},
            { sortIndex: '4', key: '4', type: '房屋及构建物', money: 500},
            { sortIndex: '5', key: '5', type: '房屋及构建物', money: 500},
        ],
        columns: [
            {
                title: '序号',
                dataIndex: 'sortIndex',
                key: 'sortIndex',
                width: '15%',
            }, {
                title: '资产类型',
                dataIndex: 'type',
                key: 'type',
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            }, {
                title: '资产总值（万元）',
                dataIndex: 'money',
                key: 'money'
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

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>各资产结构总值明细</div>}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                <Table
                    dataSource={this.state.dataSource}
                    columns={this.state.columns}
                    pagination={this.state.pagination}
                    size='middle'
                    style={{height: this.props.height}}
                    bordered={true}
                    onChange={this.handleTableChange.bind(this)}
                />
            </Card>
        )
    }
}