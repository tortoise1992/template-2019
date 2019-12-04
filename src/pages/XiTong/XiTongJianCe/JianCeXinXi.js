import React, { Component } from 'react'
import { Card,Table,Button,Icon,message } from "antd";
export default class JianCeXinXi extends Component {
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
        message.success('请求成功')
        // 直接取state里面的pagination去做分页请求
        let data=[{
            field1:'操纵系统',
            field2:'OS',
            field3:`${Math.round(Math.random())}`,
            field4:'名称：Linux，架构：amd64，版本：2.6.32-696.3.1.el6.x86_64；Mac：00-16-3E-12-63-75，IP：10.171.35.158;',
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
    handleRefresh=()=>{
        this.getData()
    }
    render() {
        let columns=[{
            title:'名称',
            dataIndex:'field1'
        },{
            title:'项',
            dataIndex:'field2'
        },{
            title:'结果',
            dataIndex:'field3',
            render:(text,record)=>text === '1'?<Icon type="check" style={{color:'#67c23a'}} />:<Icon type="close" style={{color:'red'}} />
        },{
            title:'信息',
            dataIndex:'field4'
        }]
        return (
            <Card title='检测信息' extra={<Button icon='sync' type='primary' onClick={this.handleRefresh}></Button>}>
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
