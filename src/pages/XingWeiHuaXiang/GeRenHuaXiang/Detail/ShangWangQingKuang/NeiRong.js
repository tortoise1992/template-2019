import React, { Component } from 'react';
import { Card, Table } from 'antd';
// import { postAction } from "src/axios"
import DownLoad from './DownLoad';
import styles from '../../index.module.less';

export default class NeiRong extends Component {

    state = {
        dataSource: [
            { sortIndex: 1, key: 1, name: '百度',address: 'www.baidu.com', type: '搜索引擎' },
            { sortIndex: 2, key: 2, name: '百度',address: 'www.baidu.com', type: '搜索引擎' },
            { sortIndex: 3, key: 3, name: '百度',address: 'www.baidu.com', type: '搜索引擎' },
            { sortIndex: 4, key: 4, name: '百度',address: 'www.baidu.com', type: '搜索引擎' },
            { sortIndex: 5, key: 5, name: '百度',address: 'www.baidu.com', type: '搜索引擎' },
        ],
        columns: [
            {
                title: '序号',
                dataIndex: 'sortIndex',
                key: 'sortIndex',
                width: '10%'
            }, {
                title: '网站名称',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: '网站地址',
                dataIndex: 'address',
                key: 'address'
            }, {
                title: '网站类型',
                dataIndex: 'type',
                key: 'type',
            }
        ]
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

    downloadDetail = () => {

    }

    render() {
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>上网内容TOP5</div>}
                extra={<DownLoad
                    downloadDetail={this.downloadDetail}
                />}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                <Table
                    dataSource={this.state.dataSource}
                    columns={this.state.columns}
                    pagination={false}
                    size='middle'
                    style={{height: this.props.height}}
                    bordered={true}
                />
            </Card>
        )
    }
}