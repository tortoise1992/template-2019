import React, { Component } from 'react'
import { Modal,Button } from 'antd'
export default class ImportFile extends Component {
    render() {
        const {visible}=this.props
        return (
            <Modal
                visible={visible}
                okText='导入'
                cancelText='取消'
                title='导入模板'
            >
                <div style={{marginBottom:10}}>
                    第一步，请点击右侧的按钮下载模板，并填写辅助核算信息；<Button type='primary'>下载模板</Button>
                </div>
                <div>
                    第二步，导入我完整的Excel文件。
                </div>
            </Modal>
        )
    }
}
