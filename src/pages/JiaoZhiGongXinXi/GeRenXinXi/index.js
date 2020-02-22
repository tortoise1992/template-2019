import React from 'react';
import Filter from './Filter';
import {Card, Table} from 'antd';
// import { postAction } from "src/axios"
import styles from './index.module.less';

export default class Index extends React.Component {
    state = {
        filterValue: {},
        dataSource:[
            {
                sortIndex:1,
                key:1,
                jobNumber:"11111",
                name:"zhangsan",
                gender:"男",
                department:"会计系",
                education:"博士",
                work:"教师",
                workName:"辅导员",
                title:"中级",
                updateTime:"2019.05.05"
            }
        ],
        columns:[
            { title: '序号', dataIndex: 'sortIndex', key: 'sortIndex', width: '6%', align: 'center' },
            { title: '教师工号', dataIndex: 'jobNumber', key: 'jobNumber', width: '15%', align: 'center' },
            { 
                title: '姓名', dataIndex: 'name', key: 'name', width: '10%', align: 'center',
                render:(text,record)=>{
                    return (
                        <span style={{ cursor: "pointer", color: "#1890ff" }} onClick={() => { this.goToDetail(record) }}>{text}</span>
                    )
                }
            },
            { title: '性别', dataIndex: 'gender', key: 'gender', width: '6%', align: 'center' },
            { title: '部门', dataIndex: 'department', key: 'department', width: '15%', align: 'center' },
            { title: '学历', dataIndex: 'education', key: 'education', width: '6%', align: 'center' },
            { title: '岗位', dataIndex: 'work', key: 'work', width: '10%', align: 'center' },
            { title: '岗位名称', dataIndex: 'workName', key: 'workName', width: '12%', align: 'center' },
            { title: '职称', dataIndex: 'title', key: 'title', width: '6%', align: 'center' },
            { title: '更新时间', dataIndex: 'updateTime', key: 'updateTime', width: '15%', align: 'center' },
        ],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 10, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
    }

    componentDidMount(){
        // this.getTeacherList();
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

    getFilterValue = (filterValue) => {
        // console.log(filterValue)
		this.setState({filterValue})
    }

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

    goToDetail(item){
        localStorage.setItem('teacherItem', JSON.stringify(item));
        this.props.history.push('/main/jiaozhigongxinxi/gerenxinxi/detail');
    }
    
    render(){
        return (
            <React.Fragment>
                <Filter getFilterValue = {this.getFilterValue}/>

                <Card 
                    className={styles.mainCard}
                    title={<div className={styles.cardTitle}>个人信息</div>}
                    bordered={false}
                    headStyle={{ border: 'none' }}
                    bodyStyle={{paddingTop: 10}}
                    style={{margin: 20}}
                >
                    <Table
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                        columns={this.state.columns}
                        bordered={true}
                        size="middle"
                        onChange={this.handleTableChange}
                    />
                </Card>
            </React.Fragment>
        )
    }
}