import React, { Component } from 'react'
import { Table,message  } from 'antd'
export default class MTable extends Component {
    state={
        data:[],
        columns:[],
        pagination:{
            current: 1,
            pageSize: 10,
            total:0,
            showTotal: (total) => (`共${total}条数据`),
            showQuickJumper:true
        }
    }
    componentDidMount() {
        let columns=[{
            dataIndex:'type',
            title:'客户类别'
        },{
            dataIndex:'level',
            title:'客户等级'
        },
        {
            dataIndex:'no',
            title:'客户编号'
        },
        {
            dataIndex:'name',
            title:'客户名称'
        },{
            dataIndex:'contact',
            title:'联系人'
        },{
            dataIndex:'phone',
            title:'手机号'
        },{
            dataIndex:'im',
            title:'QQ/微信号'
        },{
            dataIndex:'money',
            title:'应收款余额'
        },{
            dataIndex:'address',
            title:'地址'
        },{
            dataIndex:'status',
            title:'状态'
        }]
        this.setState({
            columns
        },()=>{
            this.getData()
        })
    }
    getData=()=>{
        let params={...this.props.filterValue,...this.state.pagination}
        message.info(`请求成功，参数是：${JSON.stringify(params)}`)
        
        let res=require('@/data/resource/basic/customer/list.json')
        if(res.success){
            let pagination={
                ...this.state.pagination,
                current:res.obj.page,
                pageSize:res.obj.pageSize,
                total:res.obj.total
            }
            let data=res.obj.rows.map((item,index)=>{
                item.key=index+1
                return item
            })
            this.setState({
                data,
                pagination
            })
        }
    }
    handleTableChange=(pagination)=>{
        this.setState({
            pagination
        },()=>{
            this.getData()
        })
    }
    
    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps.filterValue) !== JSON.stringify(this.props.filterValue)){
            this.getData()
        }
    }
    render() {
        const {data,columns,pagination}=this.state
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        }
        return (
            <div className='padding'>
                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={pagination}
                    onChange={this.handleTableChange}
                    rowSelection={rowSelection}
                > 
                </Table>
            </div>
            
        )
    }
}
