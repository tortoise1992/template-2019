import React, { Component } from 'react'
import { Button,message,Upload } from 'antd'
export default class Actions extends Component {
    handleExport=()=>{
        message.info('导出')
    }
   
    render() {
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
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        }
        return (
            <div className='margin_b_15' style={{display:'flex',justifyContent:'space-between'}}>
                {/* <div>
                    <Button onClick={this.props.handleAdd} type='primary' icon='setting' style={{marginRight:10}}>列表设置</Button>
                </div>                 */}
                <div>
                    <Button onClick={this.props.handleAdd} type='primary' icon='plus' style={{marginRight:10}}>新增</Button>
                    <Button onClick={this.props.refresh} type='primary' icon='sync' style={{marginRight:10}}>刷新</Button>
                    <Button onClick={this.handleExport} type='primary' icon='export' style={{marginRight:10}}>导出</Button>
                    <Upload {...props}>
                        <Button type='primary' icon='import'>导入</Button>
                    </Upload>
                </div>                
            </div>
        )
    }
}
