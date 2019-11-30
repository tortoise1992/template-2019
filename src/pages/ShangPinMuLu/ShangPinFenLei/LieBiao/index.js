import React, { Component } from 'react'
import { Card,Table,Button } from "antd";
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
            field1:'户外运动>路由器',
            field2:'0',
            field3:'启用',
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
            title:'分类名称',
            dataIndex:'field1'
        },{
            title:'排序',
            dataIndex:'field2'
        },{
            title:'状态',
            dataIndex:'field3'
        },{
            title:'操作',
            render:(text,record)=>{
                return <span style={{cursor:'pointer',color:'#1890ff'}}>编辑</span>
            }
        }]
        return (
            <Card title='商品分类列表' extra={<Button type='primary' icon='plus'>新增</Button>}>
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
