/**
 *
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component,Fragment } from 'react'
import {Card,Button} from 'antd'
import UserTable from './components/table'
import AddOrEdit from './components/addOrEdit'
export default class User extends Component {
  state={
    visible:false,
    editData:null
  }
  handleAdd=()=>{
    this.setState({
      visible:true
    })
  }
  handleOk=()=>{
    this.setState({
      visible:false,
      editData:null
    })
  }
  handleCancel=()=>{
    this.setState({
      visible:false,
      editData:null
    })
  }
  handleEdit=(record)=>{
    this.setState({
      visible:true,
      editData:record
    })
  }
  render() {
    return (
      <Fragment>
        <Card title='用户管理'>
          <Button onClick={this.handleAdd} type='primary' icon="plus">新增用户</Button>
          <AddOrEdit 
          visible={this.state.visible} 
          editData={this.state.editData}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          />
          <UserTable handleEdit={this.handleEdit}/>
        </Card>
      </Fragment>
    )
  }
}
