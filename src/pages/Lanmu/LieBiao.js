import React, { Component } from 'react'
import { Table,Divider } from 'antd'
export default class LieBiao extends Component {
    state={
        data:[]
    }
    componentDidMount() {
        this.getData()
    }
    getData=()=>{
        let data=[{
            id:1,
            name:'栏目管理',
            model:'栏目',
            view:0,
            children:[
                {
                    id:11,
                    name:'测试',
                    model:'栏目',
                    view:0,
                }
            ]
        }]
        this.setState({
            data
        })
    }
    render() {
        const columns=[
            {
                title:'ID',
                dataIndex:'id'
            },
            {
                title:'栏目名称',
                dataIndex:'name'
            },
            {
                title:'所属模型',
                dataIndex:'model'
            },
            {
                title:'是否显示',
                dataIndex:'view'
            },
            {
                title:'操作',
                align:'center',
                render:(text,record)=>{
                    return <React.Fragment>
                        <span>编辑</span>
                        <Divider type='vertical'/>
                        <span>增加子栏目</span>
                        <Divider type='vertical'/>
                        <span>删除</span>
                    </React.Fragment>
                }
            }
        ]
        return (
            <Table
                columns={columns}
                dataSource={this.state.data}
            >
                
            </Table>
        )
    }
}
