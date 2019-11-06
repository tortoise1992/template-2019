import React, { Component } from 'react'
import { Table,message  } from 'antd'
export default class MTable extends Component {
    state={
        data:[],
        pagination:{
            current: 1,
            pageSize: 10,
            total:0,
            showTotal: (total) => (`共${total}条数据`),
            showQuickJumper:true
        }
    }
    componentDidMount() {        
        this.getData()
        // 传递当前组件的示例到父级供兄弟组件调用
        this.props.transformIns(this)
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
        const {data,pagination}=this.state
        const {columns}=this.props
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
