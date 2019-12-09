import React, { Component } from 'react'

import {Menu, Dropdown,Icon,Avatar,message} from 'antd'
import router from 'umi/router'
export default class TopHeader extends Component {
  handleLogout=()=>{
    localStorage.clear()
    message.success('退出成功')
    router.replace('/login')
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1"><Icon type="edit" />修改密码</Menu.Item>
        <Menu.Item key="2" onClick={this.handleLogout}><Icon type="poweroff" />退出登录</Menu.Item>    
      </Menu>
    );
    return (
      <div>       
        {/* {
          this.props.collapsed?<Icon onClick={this.props.close} type="menu-unfold" style={{fontSize:24,cursor:'pointer'}}/>:
          <Icon onClick={this.props.open} type="menu-fold" style={{fontSize:24,cursor:'pointer'}}/>
        }
        
         */}
        <Dropdown  overlay={menu} trigger={['hover']} placement="bottomRight">
          <span style={{float:'right',height:64,display:'block',cursor:'pointer'}}>
          <Avatar style={{backgroundColor:'#f56a00',color:'#fff',marginRight:10}}>U</Avatar>
          用户名
          <Icon type="caret-down"  style={{marginLeft:10}} />
          </span>
        </Dropdown> 
      </div>
    )
  }
}
