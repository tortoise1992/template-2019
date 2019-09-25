import React, { Component } from 'react'
import { Icon,Modal } from 'antd'
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
        
        return (
            <div>
                <Icon
                    className={styles.trigger}
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />

                {/* <div className={styles.action}>
                    <Dropdown className={styles.userInfo} overlay={menu} trigger={['hover']} placement="bottomRight">
                        <span style={{ float: 'right', height: 64, display: 'block', cursor: 'pointer' }}>
                            <Avatar style={{ backgroundColor: '#f56a00', color: '#fff', marginRight: 10 }}>A</Avatar>
                            {this.state.username}
                        <Icon type="caret-down" style={{ marginLeft: 10 }} />
                        </span>
                    </Dropdown>
                </div> */}
            </div>
        )
    }
}

export default withRouter(Index)
