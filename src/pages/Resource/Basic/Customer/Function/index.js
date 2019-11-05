import React, { Component } from 'react'
import { Button} from 'antd'
import styles from './index.module.less'
export default class Function extends Component {
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div className={styles.box}>
                <div className={styles.left}>
                    <Button type='primary' icon='setting'>列表设置</Button>
                </div>
                <div className={styles.right}>
                    <Button icon='plus' style={{marginRight:10}}>新增</Button>
                    <Button icon='reload' style={{marginRight:10}}>刷新</Button>
                    <Button icon='import' style={{marginRight:10}}>导入</Button>
                    <Button icon='export' style={{marginRight:10}}>导出</Button>
                    <Button icon='delete'>批量删除</Button>
                </div>
            </div>
        )
    }
}
