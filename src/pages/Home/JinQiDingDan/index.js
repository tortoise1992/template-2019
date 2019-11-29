import React, { Component } from 'react'
import { Card,Table } from "antd";
export default class JinQiDingDan extends Component {
    state={
        data:[],
        pagination:{
            total:0,
            current:1,
            pageSize:10,
            showTotal:(total, range)=> `总共 ${total} 条`,//显示总条数            
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData=()=>{
        // 直接取state里面的pagination去做分页请求
        let data=[{
            field1:'597',
            field2:'ahuife',
            field3:'待付款',
            field4:'2019-09-10 10:20:20',
            field5:'￥999'
        }]
        this.setState({
            data
        })
    }
    handleTableChange=(pagination)=>{
        this.setState({
            pagination
        },()=>{
            this.getData()
        })
    }
    render() {
        let columns=[{
            title:'订单号',
            dataIndex:'field1'
        },{
            title:'客户名称',
            dataIndex:'field2'
        },{
            title:'状态',
            dataIndex:'field3'
        },{
            title:'生成日期',
            dataIndex:'field4'
        },{
            title:'金额',
            dataIndex:'field5'
        },{
            title:'操作',
            render:(text,record)=>{
                return <span style={{cursor:'pointer',color:'#1890ff'}}>查看</span>
            }
        }]
        return (
            <Card title='近期订单'>
                <Table
                    columns={columns}
                    dataSource={this.state.data}
                    rowKey={record=>record.field1}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                >

                </Table>
            </Card>
        )
    }
}
