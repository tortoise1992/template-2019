import React, { Component } from 'react';
import { Card, Table } from 'antd';
// import { postAction } from "src/axios"
import DownLoad from './DownLoad';
import styles from '../../index.module.less';

export default class TuShuJieYueLieBiao extends Component {

    state = {
        dataSource: [
            { sortIndex: '1', key: '1',  bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
            { sortIndex: '2', key: '2',  bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
            { sortIndex: '3', key: '3',  bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
            { sortIndex: '4', key: '4',  bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
            { sortIndex: '5', key: '5',  bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
        ],
        columns: [
            {
                title: '序号',
                dataIndex: 'sortIndex',
                key: 'sortIndex',
                width: '10%',
            }, {
                title: '书籍名称',
                dataIndex: 'bookName',
                key: 'bookName',
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            }, {
                title: '作者',
                dataIndex: 'writer',
                key: 'writer'
            }, {
                title: '出版社',
                dataIndex: 'publishing',
                key: 'publishing',
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            }, {
                title: '借书时间',
                dataIndex: 'time',
                key: 'time',
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
                title={<div className={styles.cardTitle}>在借图书列表</div>}
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
                    style={{height: this.props.height}}
                    bordered={true}
                    onChange={this.handleTableChange.bind(this)}
                />
            </Card>
        )
    }
}