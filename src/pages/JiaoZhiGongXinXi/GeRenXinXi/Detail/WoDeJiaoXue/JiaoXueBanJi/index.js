import React, { Component } from 'react'
import {Card, Table} from 'antd';
// import { postAction } from "src/axios"
import styles from '../../../index.module.less';
import DownLoad from '../DownLoad';
import ModelDetail from './ModelDetail';

export default class Index extends Component {
    state={
        visible: false,
        ModalData:{},
        dataSource: [
            {
                sortIndex: 1, 
                key: 1, 
                grade: '2018级',
                college: '建筑工程学院', 
                major: '土木工程', 
                class: 'B180203', 
                classNum: '30',
                course: '建筑施工材料学',
                hour: '32',
            }
        ],
        columns: [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: 50,
            align: 'center',
            fixed: 'left',
        }, {
            title: '年级',
            dataIndex: 'grade',
            align: 'center'
        }, {
            title: '学院',
            dataIndex: 'college',
            align: 'center'
        }, {
            title: '专业',
            dataIndex: 'major',
            align: 'center'
        }, {
            title: '班级',
            dataIndex: 'class',
            align: 'center',
            render:(text,record)=>{
                return (
                    <span style={{ cursor: "pointer", color: "#1890ff" }} onClick={() => { this.goToDetail(record) }}>{text}</span>
                )
            }
        }, {
            title: '班级人数',
            dataIndex: 'classNum',
            align: 'center'
        }, {
            title: '任教科目',
            dataIndex: 'course',
            align: 'center'
        }, {
            title: '任教课时',
            dataIndex: 'hour',
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
    //班级详情
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
                title={<div className={styles.cardTitle}>教学班级</div>}
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
                {
                    this.state.visible
                    ?<ModelDetail data={this.state.ModalData} visible = {this.state.visible} handleClose = {this.handleClose}/>
                    :null
                }
            </Card>
        )
    }
}
