import React, { Component,Fragment } from 'react'
import { Card } from 'antd'
import Actions from './actions'
import ATable from './table'
import Amodal from './modal'
import AFilter from './filter'
export default class Index extends Component {
    state={
        visible:false,
        editData:null,
        filterValue:{
            name:'',
            username:'',
            status:''
        },
        columns:[]
    }
    
    handleAdd=()=>{
        this.setState({
            visible:true,
            editData:null
        })
    }
    handleEdit=(record)=>{
        this.setState({
            visible:true,
            editData:record
        })
    }
    handleCancelModal=()=>{
        this.setState({
            visible:false,
            editData:null
        })
    }
    handleOk=()=>{
        this.setState({
            visible:false,
            editData:null
        },()=>{
            this.node.getData()
        })
    }
    handleSearch=(values)=>{
        this.setState({
            filterValue:values
        })
    }
    handleReset=()=>{
        this.setState({
            filterValue:{
                name:'',
                username:'',
                status:''
            }
        })
    }
    transformColumns=(columns)=>{
        this.setState({
            columns
        })
    }
    render() {
        return (
            <Fragment>
                
                <Card 
                    title='客户管理'
                    
                >
                    <AFilter
                    handleSearch={this.handleSearch}
                    handleReset={this.handleReset}
                    />
                    <Actions
                            handleAdd={this.handleAdd}
                    />
                    <ATable
                        handleEdit={this.handleEdit}
                        ref={node=>this.node=node}
                        filterValue={this.state.filterValue}
                        transformColumns={this.transformColumns}
                        columns={this.state.columns}
                    />
                    {
                        this.state.visible && <Amodal
                            visible={this.state.visible}
                            editData={this.state.editData}
                            handleCancelModal={this.handleCancelModal}
                            handleOk={this.handleOk}
                        />
                    }
                    
                </Card>
            </Fragment>
            
        )
    }
}
