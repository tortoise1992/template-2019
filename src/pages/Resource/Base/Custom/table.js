import React, { Component,Fragment } from 'react'
import { Table,Button,Divider,Modal,message,Switch} from 'antd'
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
        let data=[
            {
                userid:'11',
                username:'管理员',
                name:'admin',
                create_name:'管理员',
                create_time:'2019-09-09',
                update_name:'管理员',
                update_time:'2019-09-09',
                status:'1',
            }
        ]
        // 后端必须返回总数和当前页码
        let pagination={
            ...this.state.pagination,
            current:1,
            total:1
        }
        this.setState({
            data,
            pagination
        })
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
        const columns=[
            {
                title:'登录名',
                dataIndex:'name'
            },
            {
                title:'用户名',
                dataIndex:'username'
            },
            {
                title:'状态',
                dataIndex:'status',
                render:(text,record)=>{
                    return (
                        <Switch checkedChildren='正常' unCheckedChildren='禁用' defaultChecked={text === '1'}/>
                    )
                }
            }, 
            {
                title:'创建人',
                dataIndex:'create_name'
            },
            {
                title:'创建日期',
                dataIndex:'create_time'
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
