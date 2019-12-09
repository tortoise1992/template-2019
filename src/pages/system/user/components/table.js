import React, { Component } from 'react'
import { Table,Divider,Modal,message } from 'antd'
import {getAction} from '../../../../axios'
export default class TableComponent extends Component {
    state={
        data:[]
    }
    componentDidMount = () => {
        this.getData()
    }
    getData=()=>{
        getAction(
            '/api/sysetm/user/list'
        ).then(res=>{
            if(res.success){
                let data=res.obj.map((item,index)=>{
                    item.key=index+1
                    return item
                })
                this.setState({
                    data
                })
            }
        })
    }
    handleDelete=()=>{
        Modal.confirm({
            title: '删除用户',
            content: '确认删除该用户吗？删除后用户信息将无法恢复！',
            cancelText:'取消',
            okText:'确定',
            onOk:()=>{
                message.success('删除成功')
            }
        })
    }
    render() {
        const columns = [{
            title: '序号',
            dataIndex: 'key'
        }, {
            title: '用户名',
            dataIndex: 'username'
        }, {
            title: '邮箱',
            dataIndex: 'email'
        }, {
            title: '上次登录时间',
            dataIndex: 'last_time'
        }, {
            title: '操作',
            dataIndex: 'action',
            render:(text,record)=>{
                return (
                    <React.Fragment>
                        <span onClick={()=>{this.props.handleEdit(record)}} className='table-action normal'>编辑</span>
                        <Divider type="vertical" />
                        <span onClick={this.handleDelete} className='table-action danger'>删除</span>
                    </React.Fragment>
                )
            }
        }]
        return (
            <Table style={{marginTop:15}} columns={columns} dataSource={this.state.data}>
            </Table>
        )
    }
}
