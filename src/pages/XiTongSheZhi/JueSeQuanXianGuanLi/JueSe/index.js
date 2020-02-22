import React from 'react';
import { Card, Button, List } from 'antd';
import AddOrEditModal from './AddOrEditModal';
import styles from '../../index.module.less';

export default class Index extends React.Component {
    state = {
        activeIndex: 0,
        roleLists: [],
        showAddOrEdit: false,
        editData: null,
    }

    componentDidMount(){
        this.getRoleLists();
    }

    getRoleLists(){
        let res = {"success":true,"msg":"成功","obj":[{"id":1,"roleName":"超级管理员","remark":"拥有权限管理模块的设置权限不包含菜单","createTime":1536549032000,"updateTime":1536550539000},{"id":31,"roleName":"学生","remark":"学生权限","createTime":1541034938000,"updateTime":1541034938000},{"id":33,"roleName":"校长","remark":"测试校","createTime":1542697696000,"updateTime":1542698189000},{"id":34,"roleName":"院系领导","remark":"","createTime":1543396029000,"updateTime":1544107599000},{"id":35,"roleName":"学工老师","remark":"","createTime":1544107460000,"updateTime":1544107517000},{"id":36,"roleName":"学生资助中心老师","remark":"","createTime":1544107539000,"updateTime":1544107539000},{"id":37,"roleName":"心理健康中心老师","remark":"","createTime":1544107561000,"updateTime":1544107561000},{"id":38,"roleName":"心理健康中心领导","remark":"","createTime":1574128717000,"updateTime":1574128717000},{"id":39,"roleName":"心理健康院系老师","remark":"","createTime":1574128739000,"updateTime":1574128739000}],"errorCode":null};

        if(res.success){
            let { activeIndex } = this.state;
            this.setState({
                roleLists: res.obj || []
            },()=>{
                this.props.changeRole(res.obj[activeIndex]); //把当前选中的角色信息传到父组件
            })
        }

        // getAction('/bigdata/system/role/list').then(res => {
        //     if(res.success){
        //         let { activeIndex } = this.state;
        //         this.setState({
        //             roleLists: res.obj || []
        //         },()=>{
        //             this.props.changeRole(res.obj[activeIndex]); //把当前选中的角色信息传到父组件
        //         })
        //     }
        // })
    }

    rowClick(item, activeIndex){
        this.setState({activeIndex},() => {
            this.props.changeRole(item); //把当前选中的角色信息传到父组件
        });
    }

    deleteAction(item, e){
        e.stopPropagation();
        // Modal.confirm({
        //     title: `确定删除${item.roleName}?`,
        //     onOk:()=> {
        //         postAction('/bigdata/system/role/delete',{id: item.id}, 0, 1).then(res => {
        //             if(res.success){
        //                 message.success('删除成功！');
        //                 this.setState({
        //                     activeIndex: 0
        //                 }, () => {
        //                     this.getRoleLists();
        //                 })
        //             } else {
        //                 message.error(res.obj);
        //             }
        //         })                
        //     }
        // });
    }

    onOk = () => {
        this.setState({showAddOrEdit:false}, () => {
            this.getRoleLists();
        });
    }

    render(){
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle} style={{color: '#1890ff'}}>角色</div>}
                extra={<Button icon="plus" type="primary" onClick={() => {this.setState({showAddOrEdit: true, editData: null})}}>添加角色</Button>}
                bordered={false}
                headStyle={{border: 'none'}}
                bodyStyle={{padding: 0}}
            >
                <List
                    dataSource={this.state.roleLists}
                    renderItem={(item,index) => (
                        <List.Item 
                            style={{padding: '12px 20px', background: index === this.state.activeIndex ? '#E6F7FF' : 'none'}}
                            onClick={this.rowClick.bind(this, item, index)}
                            actions={[
                                <span style={{color:'#71CF09'}} onClick={(e) => {
                                    e.stopPropagation();
                                    this.setState({showAddOrEdit: true, editData: item})}
                                }>编辑</span>, 
                                <span style={{color:'#E45A5A'}} onClick={this.deleteAction.bind(this, item)}>删除</span>
                            ]}
                        >
                            {item.roleName}
                        </List.Item>
                    )}
                />
                {
					this.state.showAddOrEdit
					&&
                    <AddOrEditModal
                        editData={this.state.editData}
                        onOk={this.onOk}
                        onCancel={() => {this.setState({showAddOrEdit: false})}}
                    />
				}
            </Card>
        )
    }
}