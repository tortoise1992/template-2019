import React, { Component } from 'react'
import { Button,message } from 'antd'
export default class Actions extends Component {
    handleExport=()=>{
        message.info('导出')
    }
    render() {
        return (
            <div className='margin_b_15'>
                <Button onClick={this.props.handleAdd} type='primary' icon='plus' style={{marginRight:10}}>新增</Button>
                <Button onClick={this.handleExport} type='primary' icon='export'>导出</Button>
            </div>
        )
    }
}
