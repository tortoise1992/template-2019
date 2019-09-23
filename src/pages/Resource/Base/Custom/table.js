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
        this.getColumns()
        this.getData()
    }
    
    getColumns=()=>{
        let columns=[
            {
                title:'客户类别',
                dataIndex:'custom_type'
            },
            {
                title:'客户等级',
                dataIndex:'custom_level'
            },
            {
                title:'客户编号',
                dataIndex:'custom_no'
            },
            {
                title:'客户名称',
                dataIndex:'custom_name'
            },
            {
                title:'联系人',
                dataIndex:'contact'
            },
            {
                title:'手机',
                dataIndex:'phone'
            },
            {
                title:'应收款余额',
                dataIndex:'should'
            },
            {
                title:'地址',
                dataIndex:'address'
            }
        ]
        columns.push({
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
        })
        this.props.transformColumns(columns)
    }
    getData=()=>{
        message.info('请求数据')
        const res=require('@/data/resource/base/custom/list.json')
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
        const {columns}=this.props
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
