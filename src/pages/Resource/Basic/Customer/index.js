import React, { Component } from 'react'
import { Icon,Divider,Tooltip } from 'antd'
import Filter from './Filter'
import Function from './Function'
import MTable from './Table'
export default class Customer extends Component {
    state={
        filterValue:{
            type:'',
            name:''
        },
        tableIns:null,
        // columns存放在父级state的意义是便于对columns进行自定义的设置
        selectedKeys:[],
        columns:[{
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
        },{            
            title:'操作',
            render:(text,record)=>{
                return (
                    <div>
                        <Tooltip title='编辑'>
                            <Icon type='edit' style={{cursor:'pointer',color:'#1890ff'}}/>
                        </Tooltip>
                        <Divider type='vertical'/>
                        <Tooltip title='删除'>
                            <Icon type='delete' style={{cursor:'pointer',color:'#1890ff'}}/>
                        </Tooltip>
                    </div>
                )
                
            }
        }]
    }
    changeFilter=(filterValue)=>{
        this.setState({
            filterValue
        })
    }    
    transformIns=(ins)=>{
        this.setState({
            tableIns:ins
        })
    }
    changeSelected=(selectedKeys)=>{
        this.setState({
            selectedKeys
        })
    }
    render() {
        const {filterValue,columns,tableIns,selectedKeys}=this.state
        return (
            <div>
                <Filter
                    changeFilter={this.changeFilter}
                />
                <Function
                    tableIns={tableIns}
                    selectedKeys={selectedKeys}
                />
                <MTable
                    filterValue={filterValue}
                    columns={columns}
                    transformIns={this.transformIns}
                    changeSelected={this.changeSelected}
                />
            </div>
        )
    }
}
