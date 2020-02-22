import React, { Component } from 'react'
import {Modal, Table} from 'antd';
// import { postAction } from "src/axios"
// import styles from '../../../index.module.less';
import DownLoad from '../DownLoad';

export default class ModelDetail extends Component {
    state={
        dataSource: [
            {
                sortIndex: 1, 
                key: 1, 
                name: '张小刚',
                studentNo:'889565656',
                college: '建筑工程学院', 
                major: '土木工程', 
                class: 'B180203', 
            }
        ],
        columns: [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: 50,
            align: 'center',
            fixed: 'left',
        }, {
            title: '姓名',
            dataIndex: 'name',
            align: 'center'
        }, {
            title: '学号',
            dataIndex: 'studentNo',
            align: 'center'
        },{
            title: '学院',
            dataIndex: 'college',
            align: 'center'
        }, {
            title: '专业',
            dataIndex: 'major',
            align: 'center'
        }, {
            title: '所属班级',
            dataIndex: 'class',
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

    downloadDetail = () => {
        
    }
    handleOk = e => {
        // console.log(e);
        this.props.handleClose();
    }

    handleCancel = e => {
        // console.log(e);
        this.props.handleClose();
    }

    render() {
        return (
            <Modal
                title={
                    <React.Fragment>
                        <span>{this.props.data.class}</span>
                        <DownLoad
                            downloadDetail={this.downloadDetail}
                        />
                    </React.Fragment>
                }
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width={800}
                // footer={null} 
                >
                <Table
                    dataSource={this.state.dataSource}
                    columns={this.state.columns}
                    pagination={this.state.pagination}
                    size='middle'
                    bordered={true}
                    onChange={this.handleTableChange}
                />
            </Modal>
        )
    }
}
