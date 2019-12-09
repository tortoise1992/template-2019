import React, { Component } from 'react'
import { Table } from 'antd'
export default class ArticleTable extends Component {
    state={
        data:[]
    }
    componentDidMount() {
        let data=[{
            key:1,
            name:'前端入门到放弃',
            publish_time:'2019-01-22',
            tags:'前端、入门',
            count:40
        },{
            key:2,
            name:'node实战第一讲',
            publish_time:'2019-03-26',
            tags:'node',
            count:60
        }]
        this.setState({
            data
        })
    }
    
    render() {
        const columns=[
            {
                title:'序号',
                dataIndex:'key'
            },
            {
                title:'文章名称',
                dataIndex:'name'
            },
            {
                title:'发布时间',
                dataIndex:'publish_time'
            },
            {
                title:'文章标签',
                dataIndex:'tags'
            },
            {
                title:'访问数量',
                dataIndex:'count'
            }
        ]
        return (
            <Table columns={columns} dataSource={this.state.data}>
                
            </Table>
        )
    }
}