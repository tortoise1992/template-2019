import React, { Component,Fragment } from 'react'
import { Card,Table,Button,message,Divider } from "antd";
export default class ZuZhiJiGou extends Component {
    state={
        data:[],
        pagination:{
            total:0,
            current:1,
            pageSize:10,
            showTotal:(total, range)=> `总共 ${total} 条`,//显示总条数            
        },
        visible:false,
        editData:null
    }
    componentDidMount() {
        this.getData()
    }
    getData=()=>{
        message.success('请求成功')
        // 直接取state里面的pagination去做分页请求
        let data=[{
            field1:'总公司',
            field2:'S89313',
            field3:`系统管理员`,
            field4:'79831793136',
            field5:'79831793136',
            children:[{
                field1:'湖北分公司',
                field2:'h89313',
                field3:`管理员`,
                field4:'010',
                field5:'119',
            },{
                field1:'湖南分公司',
                field2:'h89312',
                field3:`管理员`,
                field4:'010',
                field5:'119',
            }]
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
            dataIndex:'field1',
            width:'15%'
        },{
            title:'编号',
            dataIndex:'field2'
        },{
            title:'机构主管',
            dataIndex:'field3',
        },{
            title:'传真',
            dataIndex:'field4'
        },{
            title:'电话',
            dataIndex:'field5'
        },{
            title:'操作',
            render:(text,record)=>{
                return <Fragment>
                    <span style={{cursor:'pointer',color:'#1890ff'}}>编辑</span>
                    <Divider type='vertical'/>
                    <span style={{cursor:'pointer',color:'red'}}>删除</span>
                </Fragment>
            }
        }]
        return (
            <Card title='组织机构' extra={<Button icon='plus' type='primary' onClick={this.handleAdd}>新增</Button>}>
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
