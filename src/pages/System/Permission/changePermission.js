import React, { Component} from 'react'
import { Tabs,Button,Modal,message } from 'antd'
import PermissionList from './permissionList'
const TabPane = Tabs.TabPane;
export default class ChangePermission extends Component {
    state={
        roles:[
            {
                role:'admin',
                title:'超级管理员',
                permission:['1','2','3']
            },
            {
                role:'vip',
                title:'Vip用户',
                permission:['1','2']
            }
        ],        
        tabIndex:"0",
        editData:null
    }
    handleDeleteRole=()=>{
        Modal.confirm({
            title: '删除角色',
            content: '确认删除该角色吗？',
            cancelText:'取消',
            okText:'确定',
            onOk:()=>{
                message.success('删除成功')
            }
        })
    }
    componentDidMount() {
        this.setState({
            tabIndex:'0',
            editData:this.state.roles[0]
        })
    }
    
    handleTabsChange=(key)=>{
        this.setState({
            tabIndex:key,
            editData:this.state.roles[Number(key)]
        })
    }
    handlechangeCheck=(data)=>{
        this.setState({
            editData:data
        })
    }
    handleSave=()=>{
        message.success(`保存成功${JSON.stringify(this.state.editData)}`)
    }
    render() {
        return (
            <Tabs 
            defaultActiveKey={this.state.tabIndex}
            tabPosition={'left'}
            tabBarStyle={{width:230}}
            onChange={this.handleTabsChange}
            >
                {
                    this.state.roles.map((item,index)=><TabPane 
                        tab={<div style={{display:'flex',justifyContent:'space-between'}}>{item.title}<Button onClick={this.handleDeleteRole} size='small' type='danger'>删除</Button></div>} 
                        key={index}>
                        <div style={{minHeight:500,position:'relative'}}>
                            {
                                String(index) === this.state.tabIndex?
                                <PermissionList
                                defaultIndex={String(index)}
                                tabIndex={this.state.tabIndex}
                                editData={this.state.editData}
                                changeCheck={this.handlechangeCheck}
                                ></PermissionList>:null
                            }
                            <div style={{position:'absolute',width:'100%',bottom:0,left:0,textAlign:"right"}}>
                                <Button onClick={this.handleSave} type='primary'>保存</Button>
                            </div>
                        </div>
                    </TabPane>)
                }                                       
            </Tabs>
        )
    }
}
