import React, { Component } from 'react'
import {Card, Table} from 'antd';
// import { postAction } from "src/axios"
import styles from '../../../index.module.less';
import DownLoad from '../DownLoad';
// import ModelDetail from './ModelDetail';

export default class Index extends Component {
    state={
        visible: false,
        ModalData:{},
        dataSource: [
            {
                sortIndex: 1, 
                key: 1, 
                time: '2017-03-24 17：55',
                payroll: '2017年3月工资条', 
                publisher: '张三', 
            }
        ],
        columns: [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: 50,
            align: 'center',
            fixed: 'left',
        }, {
            title: '时间',
            dataIndex: 'time',
            align: 'center'
        }, {
            title: '工资单名称',
            dataIndex: 'payroll',
            align: 'center',
            render:(text,record)=>{
                return (
                    <span style={{ cursor: "pointer", color: "#1890ff" }} onClick={() => { this.goToDetail(record) }}>{text}</span>
                )
            }
        }, {
            title: '发布人',
            dataIndex: 'publisher',
            align: 'center',
        }],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 10, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
    }
    
    // getTeacherList() {
    //     const { filterValue: { curCollege, curMajor, curGrade, curClass, curGender, studentNo  }, pagination: { current, pageSize } } = this.state
    //     postAction(
    //         "/bigdata/student/getStudentInfoPager",
    //         {
    //             collegeCode: curCollege,
    //             majorCode: curMajor,
    //             grade: curGrade,
    //             classCode: curClass,
    //             gender: curGender,
    //             studentNo: studentNo,
    //             pageInfo: {
    //                 "pageNum": current,
    //                 "pageSize": pageSize
    //             }
    //         }
    //     ).then(
    //         (res) => {
    //             if (res.success) {
    //                 if (res.obj.list && res.obj.list.length > 0) {
                    	
    //                     res.obj.list.map(
    //                     	(item, index) => {
	//                         	item.key = index + 1;
	//                         	item.sortIndex = index + 1;
	//                         	return item
    //                     	}
    //                     )
    //                     const { pageNum, pageSize, total } = res.obj
                        
    //                     this.setState({
    //                         dataSource: res.obj.list,
    //                         pagination: {
    //                             current: pageNum,
    //                             pageSize: pageSize,
    //                             total: total,
    //                             showTotal: (total) => `共${total}条数据`,
    //                             showQuickJumper: true
    //                         }
    //                     })
    //                 } else {
    //                 	this.setState({
    //                         dataSource: [],
    //                         pagination: {
	// 			                current: 1, // 当前页数，
	// 			                pageSize: 10, // 每页条数
	// 			                total: 0, // 数据总条数
	// 			                showTotal: (total) => `共${total}条数据`, //显示数据总条数
	// 			                showQuickJumper: true // 显示页码快速跳转
	// 			            }
    //                     })
    //                 }
    //             }
    //         }
    //     )
    // }

    handleTableChange = (pagination) => {
        this.setState({
            pagination: {
                current: pagination.current, // 当前页数，
                pageSize: pagination.pageSize, // 每页条数
                total: pagination.total, // 数据总条数
                showTotal: (total) => `共${total}条数据`,
                showQuickJumper: true // 显示页码快速跳转
            }
        },() => {
            // this.getTeacherList();
        })
    }

    //工资详情
    goToDetail(item){
        this.setState({
            visible: true,
            ModalData:item
        });
    }
    
    // 关闭弹窗
    handleClose = () => {
        this.setState({
            visible: false,
            ModalData:{}
        })
    }

    downloadDetail = () => {
        
    }
    
    render() {
        return (
            <Card 
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>工资列表</div>}
                extra={
                    <DownLoad
                        downloadDetail={this.downloadDetail}
                    />
                }
                bordered={false}
                headStyle={{ border: 'none' }}
                bodyStyle={{paddingTop: 10}}
            >
                <Table
                    dataSource={this.state.dataSource}
                    columns={this.state.columns}
                    pagination={this.state.pagination}
                    size='middle'
                    bordered={true}
                    onChange={this.handleTableChange}
                />
                {/* {
                    this.state.visible
                    ?<ModelDetail data={this.state.ModalData} visible = {this.state.visible} handleClose = {this.handleClose}/>
                    :null
                } */}
            </Card>
        )
    }
}
