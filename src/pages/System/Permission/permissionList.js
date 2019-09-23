import React, { Component } from 'react'
import {Tree} from 'antd'
const { TreeNode } = Tree;
export default class PermissionList extends Component {
    state={
        menus:[],
        checkedKeys:[]
    }
    componentDidMount() {
        if(localStorage.getItem('userInfo')){
            let menus=JSON.parse(localStorage.getItem('userInfo')).menu
            this.setState({
                menus
            },()=>{
                this.setState({
                    checkedKeys:this.props.editData.permission
                })
            })
        }
    }
    renderTreeNodes = (data) => {
        return data.map((item) => {
            if (item.children) {                
                return (
                    <TreeNode title={item.title} key={item._id} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    }
    // componentWillReceiveProps(nextProps,nextState){       
    //     if(JSON.stringify(this.props.editData) !== JSON.stringify(nextProps.editData)){
    //         this.setState({
    //             checkedKeys:nextProps.editData.permission
    //         })
    //     }
    // }
    // // 如果传入的两个索引不匹配就不重新渲染
    // shouldComponentUpdate(nextProps,nextState){
    //     if(this.props.defaultIndex === nextProps.tabIndex){
    //         return true
    //     }else{
    //         return false
    //     }
        
    // }
    handleChecked=(keys)=>{
        this.setState({
            checkedKeys:keys
        },()=>{
            let tmp=JSON.parse(JSON.stringify(this.props.editData))
            tmp.permission=keys
            this.props.changeCheck(tmp)
        })        
    }
    render() {
        return (
            <div style={{padding:20}}>                
                <Tree
                    checkable
                    showLine
                    blockNode
                    checkedKeys={this.state.checkedKeys}
                    onCheck={this.handleChecked}
                >
                    {
                        this.renderTreeNodes(this.state.menus)
                    }
                </Tree>                
            </div>
        )
    }
}
