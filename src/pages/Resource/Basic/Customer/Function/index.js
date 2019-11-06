import React, { Component,Fragment } from 'react'
import { Button} from 'antd'
import styles from './index.module.less'
import AddModal from './AddModal'
import SettingModal from './SettingModal'
import UploadModal from './UploadModal'
export default class Function extends Component {
    state={
        addVisible:true,
        settingVisible:false,
        uploadVisible:false
    }
    handleRefresh=()=>{
        if(this.props.tableIns){
            this.props.tableIns.getData()
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
                        <Button icon='plus' style={{marginRight:10}}>新增</Button>
                        <Button onClick={this.handleRefresh} icon='reload' style={{marginRight:10}}>刷新</Button>
                        <Button icon='import' style={{marginRight:10}}>导入</Button>
                        <Button icon='export' style={{marginRight:10}}>导出</Button>
                        <Button icon='delete'>批量删除</Button>
                    </div>
                </div>
                {
                    addVisible && <AddModal visible={addVisible}/>
                }
                {
                    settingVisible && <SettingModal visible={settingVisible}/>
                }
                {
                    uploadVisible && <UploadModal visible={uploadVisible}/>
                }    
                    
            </Fragment>
            
        )
    }
}
