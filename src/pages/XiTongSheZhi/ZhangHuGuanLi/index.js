import React from 'react';
import { Card, Popconfirm, Table } from 'antd';
import Filter from './Filter';
import AddOrEditModal from './AddOrEditModal';
import styles from '../index.module.less';

export default class Index extends React.Component {
    state = {
        showAddOrEdit: false,
        filterValue: {},
        editData: null,
        columns: [
            {
                title: '序号',
                dataIndex: 'sortIndex',
                width: "6%"
            }, {
                title: '账户名',
                dataIndex: 'username',
                width: "10%",
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            }, {
                title: '姓名',
                dataIndex: 'name'
            }, {
                title: '性别',
                dataIndex: 'sex',
                render: (text) => {
                    if (text === 1) {
                        return (
                            <span>男</span>
                        )
                    } else if (text === 2) {
                        return (
                            <span>女</span>
                        )
                    } else {
                        return (
                            <span>-</span>
                        )
                    }
                }
            }, {
                title: '学工/教工号',
                dataIndex: 'accountCode'
            }, {
                title: '角色',
                dataIndex: 'roles'
            }, {
                title: '操作',
                dataIndex: 'menus',
                width: "25%",
                render: (text, record) => {
                    return (
                        <span style={{ color: "#1890ff" }}>
                            <span
                                onClick={() => {this.setState({showAddOrEdit: true, editData: record})}}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}>编辑
                            </span>|

                            <span
                                onClick={this.initPassword.bind(this, record)}
                                style={{
                                    marginRight: 10,
                                    marginLeft: 10,
                                    cursor: "pointer"
                                }}>初始化密码
                            </span>|

                            <Popconfirm title="确定删除？" okText="是" cancelText="否" onConfirm={this.deleteUser.bind(this, record)}>
                                <span
                                    style={{
                                        marginLeft: 10,
                                        cursor: "pointer"
                                    }}>删除
                            </span>
                            </Popconfirm>
                        </span>
                    )
                }
            }
        ],
        data: [],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 5, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        }
    }

    getFilterValue = (filterValue) => {
        this.setState({filterValue}, () => {
            this.getData();
        })
    }

    getData() {
        let { current, pageSize } = this.state.pagination;
        let res = {"success":true,"msg":"成功","obj":{"page":1,"pageSize":10,"totalPage":952,"totalRows":9512,"rows":[{"id":186863,"userId":"186863","accountCode":"1001","username":"0401004","name":"1","sex":1,"roles":"学工老师","menus":null,"roleId":35},{"id":186862,"userId":"186862","accountCode":"90003","username":"m-yx","name":"心理健康院系老师","sex":1,"roles":"心理健康院系老师","menus":null,"roleId":39},{"id":186861,"userId":"186861","accountCode":"90001","username":"m-ls","name":"心理健康中心老师","sex":1,"roles":"心理健康中心老师","menus":null,"roleId":37},{"id":186860,"userId":"186860","accountCode":"90002","username":"m-ld","name":"心理健康中心领导","sex":1,"roles":"心理健康中心领导","menus":null,"roleId":38},{"id":186859,"userId":"186859","accountCode":"103200037","username":"103200037","name":"程霄翔","sex":1,"roles":"学工老师","menus":null,"roleId":35},{"id":186858,"userId":"186858","accountCode":"101012520","username":"101012520","name":"魏延岭","sex":1,"roles":"学工老师","menus":null,"roleId":35},{"id":186857,"userId":"186857","accountCode":"103200034","username":"103200034","name":"齐望东","sex":1,"roles":"学工老师","menus":null,"roleId":35},{"id":186856,"userId":"186856","accountCode":"101012509","username":"101012509","name":"傅忱忱","sex":2,"roles":"学工老师","menus":null,"roleId":35},{"id":186855,"userId":"186855","accountCode":"101012487","username":"101012487","name":"刘松桥","sex":1,"roles":"学工老师","menus":null,"roleId":35},{"id":186854,"userId":"186854","accountCode":"101101974","username":"101101974","name":"孙先宝","sex":1,"roles":"学工老师","menus":null,"roleId":35}],"pageNumber":1,"total":9512},"errorCode":null};
        if (res.success && res.obj.rows && res.obj.rows[0]) {
            this.setState({
                data: res.obj.rows.filter(item => (item.rows !== '超级管理员')).map((item, index) => {
                    return {
                        ...item,
                        key: (current - 1) * pageSize + (index + 1),
                        sortIndex: (current - 1) * pageSize + (index + 1),
                    }
                }),
                pagination: {
                    current: res.obj.pageNum,
                    pageSize: res.obj.pageSize,
                    total: res.obj.total,
                    showTotal: (total) => `共${total}条数据`,
                    showQuickJumper: true
                }
            })
        }
		// getAction("/bigdata/system/user/list", this.state.filterValue).then((res) => {
        //     if (res.success && res.obj.rows && res.obj.rows[0]) {
        //         this.setState({
        //             data: res.obj.rows.map(item => {
        //                 if(item.rows !== '超级管理员'){
        //                     return {
        //                         ...item,
        //                         key: (current - 1) * pageSize + (index + 1),
        //                         sortIndex: (current - 1) * pageSize + (index + 1),
        //                     }
        //                 }
        //             }),
        //             pagination: {
        //                 current: res.obj.pageNum,
        //                 pageSize: res.obj.pageSize,
        //                 total: res.obj.total,
        //                 showTotal: (total) => `共${total}条数据`,
        //                 showQuickJumper: true
        //             }
        //         })
        //     }
		// })
	}

    initPassword(){
        // postAction("/bigdata/system/user/initPwd",{
        //     sourceCode: "pc",
        //     id: record.id
        // }, 0, 1).then((res) => {
        //     if (res.success) {
        //         message.success("初始化密码成功， 初始密码： !23qaz")
        //     }
        // })
    }

    deleteUser(){
        // postAction("/bigdata/system/user/delete",{
        //     sourceCode: "pc",
        //     id: record.id
        // }, 0, 1).then((res) => {
        //     if (res.success) {
        //         let { pagination } = this.state;
        //         this.handleTableChange({
        //             ...pagination,
        //             current: this.state.pagination.current,
        //         })
        //     }
        // })
    }

    handleTableChange = (pagination) => {
        this.setState(() => {
            return {
                pagination: {
                    current: pagination.current, // 当前页数，
                    pageSize: pagination.pageSize, // 每页条数
                    total: pagination.total, // 数据总条数
                    showTotal: (total) => `共${total}条数据`,
                    showQuickJumper: true // 显示页码快速跳转
                }
            }
        },() => {
            // this.getData();
        })
    }

    onOk = () => {
        this.setState({showAddOrEdit: false}, () => {
            this.getData();
        })
    }

    render(){
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>账户管理</div>}
                bordered={false}
                style={{margin: 20}}
            >
                <Filter getFilterValue={this.getFilterValue} addUser={() => {this.setState({showAddOrEdit: true, editData: null})}}/>
                <Table
					columns={this.state.columns}
					dataSource={this.state.data}
					pagination={this.state.pagination}
					onChange={this.handleTableChange}
					bordered={true}
				/>
                {
					this.state.showAddOrEdit
					&&
                    <AddOrEditModal
                        editData={this.state.editData}
                        onOk={this.onOk}
                        onCancel={() => {this.setState({showAddOrEdit: false})}}
                    />
				}
            </Card>
        )
    }
}