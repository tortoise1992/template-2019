import React, { Component } from 'react'
import { Icon,Modal,Dropdown,Avatar,Menu } from 'antd'
import {withRouter} from 'react-router-dom'
import styles from './index.module.less'
class Index extends Component {
    state={
        username:''
    }
    componentDidMount() {
        let userInfo=localStorage.getItem('userInfo')
        if(userInfo){
          userInfo=JSON.parse(userInfo)
          this.setState({
            username:userInfo.name
          })
        }
    }
    handleLogout=()=>{
        Modal.confirm({
            title:'注销',
            content:'确定注销登录吗？',
            okText:'确定',
            cancelText:'取消',
            onOk:()=>{
                localStorage.clear()
                this.props.history.replace('/login')
            }
        })
    }
    render() {
        const menu = (
            <Menu>
              <Menu.Item key="1"><Icon type="edit" />修改密码</Menu.Item>
              <Menu.Item key="2" onClick={this.handleLogout}><Icon type="poweroff" />退出登录</Menu.Item>
            </Menu>
        )
        return (
            <div>
                <Icon
                    className={styles.trigger}
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />

                <div className={styles.action}>
                    {/* <Icon className={styles.logout}  type='logout' onClick={this.handleLogout} title='注销'/> */}
                    <Dropdown className={styles.userInfo} overlay={menu} trigger={['hover']} placement="bottomRight">
                        <span style={{ float: 'right', height: 64, display: 'block', cursor: 'pointer' }}>
                            <Avatar style={{ backgroundColor: '#f56a00', color: '#fff', marginRight: 10 }}>A</Avatar>
                            {this.state.username}
                        <Icon type="caret-down" style={{ marginLeft: 10 }} />
                        </span>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default withRouter(Index)
