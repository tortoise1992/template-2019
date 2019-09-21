import React, { Component } from 'react'
import { Icon } from 'antd'
import styles from './index.module.less'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Icon
                    className={styles.trigger}
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
            </div>
        )
    }
}
