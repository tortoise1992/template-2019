import React, { Component } from 'react'
import { Modal, Button, Upload, message } from 'antd'
export default class ImportFile extends Component {
    handleOk=()=>{
        this.props.cancelModal('upload')
    }
    handleCancel=()=>{
        this.props.cancelModal('upload')
    }
    render() {
        const { visible } = this.props
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败`);
                }
            },
        }
        return (
            <Modal
                visible={visible}
                okText='导入'
                cancelText='取消'
                title='导入模板'
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <div style={{ marginBottom: 10 }}>
                    第一步，请点击右侧的按钮下载模板，并填写辅助核算信息；<Button type='primary'>下载模板</Button>
                </div>
                <div>
                    第二步，导入我完整的Excel文件。
                    <Upload {...props}>
                        <Button icon='upload'>
                            上传文件
                        </Button>
                    </Upload>
                </div>
            </Modal>
        )
    }
}
