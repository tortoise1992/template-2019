import React, { Component} from 'react'
import { Table,message} from 'antd'
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
                title:'管理员姓名',
                dataIndex:'name'
            },
            {
                title:'IP',
                dataIndex:'ip'
            },
            {
                title:'登录时间',
                dataIndex:'time'
            },
            {
                title:'登录地址',
                dataIndex:'address'
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
