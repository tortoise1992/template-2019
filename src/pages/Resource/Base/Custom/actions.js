import React, { Component } from 'react'
import { Button,message } from 'antd'
export default class Actions extends Component {
    handleExport=()=>{
        message.info('导出')
    }
    render() {
        return (
            <div className='margin_b_15' style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <Button onClick={this.props.handleAdd} type='primary' icon='setting' style={{marginRight:10}}>列表设置</Button>
                </div>                
                <div>
                    <Button onClick={this.props.handleAdd} type='primary' icon='plus' style={{marginRight:10}}>新增</Button>
                    <Button onClick={this.props.handleAdd} type='primary' icon='sync' style={{marginRight:10}}>刷新</Button>
                    <Button onClick={this.handleExport} type='primary' icon='export' style={{marginRight:10}}>导出</Button>
                    <Button onClick={this.handleExport} type='primary' icon='import'>导入</Button>
                </div>                
            </div>
        )
    }
}
