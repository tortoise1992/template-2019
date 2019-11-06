import React, { Component } from 'react'
import { Modal, Upload, Icon, message } from 'antd'
const { Dragger } = Upload
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
}
export default class UploadModal extends Component {
    render() {
        return (
            <Modal
                title='上传'
                visible={this.props.visible}
                onOk={()=>{this.props.handleOk('upload')}}
                onCancel={()=>{this.props.handleCancel('upload')}}
            >
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                        点击或者拖拽文件到此处上传
                    </p>
                    {/* <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p> */}
                </Dragger>

            </Modal>
        )
    }
}
