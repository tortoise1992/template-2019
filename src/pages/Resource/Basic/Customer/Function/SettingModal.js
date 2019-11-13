import React, { Component } from 'react'
import { Modal } from 'antd'
export default class SettingModal extends Component {
    render() {
        return (
            <Modal
                visible={this.props.visible}
                title='表格设置'
                onOk={()=>{this.props.handleOk('setting')}}
                onCancel={()=>{this.props.handleCancel('setting')}}
            >
                
            </Modal>
        )
    }
}
