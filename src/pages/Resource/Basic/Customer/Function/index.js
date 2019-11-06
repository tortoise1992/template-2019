import React, { Component,Fragment } from 'react'
import { Button,message} from 'antd'
import styles from './index.module.less'
import AddModal from './AddModal'
import SettingModal from './SettingModal'
import UploadModal from './UploadModal'
export default class Function extends Component {
    state={
        addVisible:false,
        settingVisible:false,
        uploadVisible:false
    }
    handleRefresh=()=>{
        if(this.props.tableIns){
            this.props.tableIns.getData()
        }
    }
    handleOk=(type)=>{
        this.setState({
            [`${type}Visible`]:false
        },()=>{
            if(this.props.tableIns){
                this.props.tableIns.getData()
            }
        })
    }
    handleCancel=(type)=>{
        this.setState({
            [`${type}Visible`]:false
        })
    }
    handleOpen=(type)=>{
        this.setState({
            [`${type}Visible`]:true
        })
    }
    handleExport=()=>{
        if(this.props.tableIns){
            this.props.tableIns.handleExportExcel()
        }
    }
    handleDeleteMany=()=>{
        let {selectedKeys}=this.props
        if(selectedKeys.length>0){
            message.info(`删除成功，参数是${JSON.stringify(selectedKeys)}`)
            this.props.tableIns.getData()
        }else{
            message.warning('请至少选择一条记录')
        }
    }
    render() {
        const {addVisible,settingVisible,uploadVisible}=this.state
        return (
            <Fragment>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <Button type='primary' icon='setting'>列表设置</Button>
                    </div>
                    <div className={styles.right}>
                        <Button onClick={()=>{this.handleOpen('add')}} icon='plus' style={{marginRight:10}}>新增</Button>
                        <Button onClick={this.handleRefresh} icon='reload' style={{marginRight:10}}>刷新</Button>
                        <Button onClick={()=>{this.handleOpen('upload')}} icon='import' style={{marginRight:10}}>导入</Button>
                        <Button onClick={this.handleExport} icon='export' style={{marginRight:10}}>导出</Button>
                        <Button onClick={this.handleDeleteMany} icon='delete'>批量删除</Button>
                    </div>
                </div>
                {
                    addVisible && 
                    <AddModal 
                        visible={addVisible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                }
                {
                    settingVisible && 
                    <SettingModal 
                        visible={settingVisible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                }
                {
                    uploadVisible && 
                    <UploadModal 
                        visible={uploadVisible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                }    
                    
            </Fragment>
            
        )
    }
}
