import React, { Component } from 'react'
import { Icon,Modal } from 'antd'
import {withRouter} from 'react-router-dom'
import styles from './index.module.less'
class Index extends Component {
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

                <div className={styles.action}>
                    <div>

                    </div>
                    <Icon className={styles.logout}  type='logout' onClick={this.handleLogout} title='注销'/>
                </div>
            </div>
        )
    }
}

export default withRouter(Index)
