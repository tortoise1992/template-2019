/**
 *
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component } from 'react'
import { Card,Button } from 'antd'
import ChangePermission from './components/changePermission'
import AddRole from './components/addOrEdit'
export default class SystemMenu extends Component {
  state={
    visible:false
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
  render() {
    return (
      <Card title='权限管理' extra={<Button onClick={this.handleAdd} type='primary' icon='plus'>新增角色</Button>}>
        <ChangePermission/>
        <AddRole
          visible={this.state.visible} 
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        ></AddRole>
      </Card>
    )
  }
}
