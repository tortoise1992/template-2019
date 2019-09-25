import React, { Component,Fragment } from 'react'
import { Table,Button,Divider,Modal,message} from 'antd'
export default class table extends Component {
    state={
        pagination:{
            total:0,         
            current:1,
            pageSize:10,
            showTotal:(total, range)=> `共 ${total} 条`,
            showQuickJumper:true,
            showSizeChanger:false,
            size:'small'
        },
        data:[]
    }
    componentDidMount() {
        this.getData()
    }
    
    getData=()=>{
        message.info('请求数据')
        const res=require('@/data/system/user/list.json')
        if(res.success){
            let pagination={
                ...this.state.pagination,
                current:res.obj.current,
                total:res.obj.total
            }
            this.setState({
                data:res.obj.list,
                pagination
            })
        }
    }
    handleDelete=(record)=>{
        Modal.confirm({
            title:'系统提示',
            content:'确定删除该条记录吗？',
            okText:'确定',
            cancelText:'取消',
            onOk:()=>{
                message.success('操作成功')
            }
        })
    }
   
    handlePageChange=(pagination)=>{
        this.setState({
            pagination
        },()=>{
            this.getData()
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevProps.filterValue) !== JSON.stringify(this.props.filterValue)){
            this.getData()
        }
    }
    
    render() {
        let columns=[
            {
                title:'账号',
                dataIndex:'account'
            },
            {
                title:'姓名',
                dataIndex:'name'
            },
            {
                title:'邮箱',
                dataIndex:'email'
            },
            {
                title:'手机',
                dataIndex:'phone'
            },
            {
                title:'角色',
                dataIndex:'role'
            },
            {
                title:'操作',
                dataIndex:'action',
                align:'center',
                render:(text,record)=>{
                    return (<Fragment>
                        <Button type='primary' ghost size='small' onClick={()=>{this.props.handleEdit(record)}}>编辑</Button>
                        <Divider type='vertical'/>                        
                        <Button type='danger' ghost size='small' onClick={()=>{this.handleDelete(record)}}>删除</Button>
                    </Fragment>)
                }
            }
        ]
        return (
            <Table
                columns={columns}
                pagination={this.state.pagination}
                dataSource={this.state.data}
                rowKey={record=>record.userid}
            > 
            </Table>
        )
    }
}
