import React, { Component } from 'react'
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
    render() {
        const {filterValue,columns,tableIns}=this.state
        return (
            <div>
                <Filter
                    changeFilter={this.changeFilter}
                />
                <Function
                    tableIns={tableIns}
                />
                <MTable
                    filterValue={filterValue}
                    columns={columns}
                    transformIns={this.transformIns}
                />
            </div>
        )
    }
}
