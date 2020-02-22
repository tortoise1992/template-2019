import React from 'react';
import Filter from './Filter';
import {Card, Table} from 'antd';
// import { postAction } from "src/axios"
import styles from './index.module.less';

export default class Index extends React.Component {

    state = {
        filterValue: {},
        dataSource: [
            {sortIndex:1,key:1,studentId: "01A19116",studentName: "高展",gender: "男性",collegeName: "建筑学院",majorName: "土建类（建筑学类）",className: "01A191"}
        ],
        columns: [
            { title: '序号', dataIndex: 'sortIndex', key: 'sortIndex', width: '6%', align: 'center' },
            { title: '学号', dataIndex: 'studentId', key: 'studentId', width: '12%', align: 'center' },
            { 
                title: '姓名', dataIndex: 'studentName', key: 'studentName', width: '10%', align: 'center',
                render: (text, record) => {
                    return (
                        <span style={{ cursor: "pointer", color: "#1890ff" }} onClick={() => { this.goToDetail(record) }}>{text}</span>
                    )
                }
            },
            { title: '性别', dataIndex: 'gender', key: 'gender', width: '6%', align: 'center' },
            { title: '学院', dataIndex: 'collegeName', key: 'collegeName', width: '15%', align: 'center' },
            { title: '专业', dataIndex: 'majorName', key: 'majorName', width: '15%', align: 'center' },
            { title: '班级', dataIndex: 'className', key: 'className', width: '10%', align: 'center' },
        ],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 10, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
    };

    componentDidMount() {
        // this.getStudentList();
    }
	
	getFilterValue = (filterValue) => {
		this.setState({filterValue})
    }

    // getStudentList() {
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
            // this.getStudentList();
        })
    }

    goToDetail(item){
        localStorage.setItem('studentItem', JSON.stringify(item));
        this.props.history.push('/main/xingweihuaxiang/gerenhuaxiang/detail');
    }
    
    render(){
        return (
            <React.Fragment>
                <Filter getFilterValue = {this.getFilterValue} />
                <Card 
                    className={styles.mainCard}
                    title={<div className={styles.cardTitle}>个人画像</div>}
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