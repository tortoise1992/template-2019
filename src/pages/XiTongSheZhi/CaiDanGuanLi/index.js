import React from 'react';
import { Card, Tree, Icon } from 'antd';
import EditModal from './EditModal';
import styles from '../index.module.less';

const TreeNode = Tree.TreeNode;
const iconStyle = {
	fontSize: '20px',
	color: '#aaa',
	marginLeft: '10px'
}
const iconActiveStyle = Object.assign({},iconStyle,{color:'rgb(24, 144, 255)'});

export default class Index extends React.Component {
    state = {
        menuLists: [], //菜单列表
		selectedKeys: [], //选中节点
		expandedKeys: [], //展开节点
		showEdit: false, //是否显示修改模态框
		activeData: null, //选中节点信息
    }

    componentDidMount(){
        this.getMenuLists();
    }

    getMenuLists(){
        let res = {"success":true,"msg":"成功","obj":[{"id":10,"parentId":-1,"name":"行为画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":10,"tags":null,"subMenus":[{"id":11,"parentId":10,"name":"群体画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":11,"tags":null,"subMenus":[{"id":111,"parentId":11,"name":"整体画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":111,"tags":null,"subMenus":[]},{"id":112,"parentId":11,"name":"学生分布","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":112,"tags":null,"subMenus":[]},{"id":113,"parentId":11,"name":"学业分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":113,"tags":null,"subMenus":[]},{"id":114,"parentId":11,"name":"毕业分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":114,"tags":null,"subMenus":[]},{"id":115,"parentId":11,"name":"消费分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":115,"tags":null,"subMenus":[]},{"id":116,"parentId":11,"name":"上网分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":116,"tags":null,"subMenus":[]},{"id":117,"parentId":11,"name":"上课分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":117,"tags":null,"subMenus":[]},{"id":118,"parentId":11,"name":"图书分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":118,"tags":null,"subMenus":[]}]},{"id":12,"parentId":10,"name":"个人画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":12,"tags":null,"subMenus":[{"id":121,"parentId":12,"name":"学生列表","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":121,"tags":null,"subMenus":[]},{"id":122,"parentId":12,"name":"整体画像","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":122,"tags":null,"subMenus":[]},{"id":123,"parentId":12,"name":"学业成绩","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":123,"tags":null,"subMenus":[]},{"id":124,"parentId":12,"name":"消费情况","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":124,"tags":null,"subMenus":[]},{"id":125,"parentId":12,"name":"图书借阅","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":125,"tags":null,"subMenus":[]},{"id":126,"parentId":12,"name":"上网情况","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":126,"tags":null,"subMenus":[]}]}]},{"id":20,"parentId":-1,"name":"综合预警","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":20,"tags":null,"subMenus":[]},{"id":30,"parentId":-1,"name":"精准资助","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":30,"tags":null,"subMenus":[{"id":31,"parentId":30,"name":"家庭经济困难学生分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":31,"tags":null,"subMenus":[]},{"id":32,"parentId":30,"name":"家庭经济困难学生查询","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":32,"tags":null,"subMenus":[]},{"id":33,"parentId":30,"name":"异常家庭经济困难学生","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":33,"tags":null,"subMenus":[]},{"id":34,"parentId":30,"name":"建议关爱学生","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":34,"tags":null,"subMenus":[]}]},{"id":40,"parentId":-1,"name":"心理健康","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":40,"tags":null,"subMenus":[{"id":41,"parentId":40,"name":"心理健康分析","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":41,"tags":null,"subMenus":[]},{"id":42,"parentId":40,"name":"心理健康预警","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":42,"tags":null,"subMenus":[]}]},{"id":50,"parentId":-1,"name":"系统设置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":50,"tags":null,"subMenus":[{"id":51,"parentId":50,"name":"预警设置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":51,"tags":null,"subMenus":[]},{"id":52,"parentId":50,"name":"预警白名单配置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":52,"tags":null,"subMenus":[{"id":521,"parentId":52,"name":"个人白名单","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":521,"tags":null,"subMenus":[]},{"id":522,"parentId":52,"name":"节假日白名单","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":522,"tags":null,"subMenus":[]}]},{"id":53,"parentId":50,"name":"资助达标金额配置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":53,"tags":null,"subMenus":[]},{"id":54,"parentId":50,"name":"预警处理达标配置","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":54,"tags":null,"subMenus":[]}]},{"id":60,"parentId":-1,"name":"权限管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":60,"tags":null,"subMenus":[{"id":61,"parentId":60,"name":"账号管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":61,"tags":null,"subMenus":[]},{"id":62,"parentId":60,"name":"角色权限管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":62,"tags":null,"subMenus":[]},{"id":63,"parentId":60,"name":"菜单管理","url":null,"iconUrl":null,"iconSelectedUrl":null,"seq":63,"tags":null,"subMenus":[]}]}],"errorCode":null};
        if (res.success) {
            this.setState({
                menuLists: res.obj || []
            })
        }
        // getAction('/bigdata/system/menu/list').then(res => {
		// 	if (res.success) {
		// 		this.setState({
		// 			menuLists: res.obj || []
		// 		})
		// 	}
		// })
    }

    //选中节点修改
    onSelect = (selectedKeys, info) => {
		if(selectedKeys.length > 0){
			this.setState({ selectedKeys, activeData: info.node.props.detail });
		} else {
			this.setState({ selectedKeys, activeData: null });
		}
	}

    //拖拽开始
	onDragEnter = (info) => {
		this.setState({expandedKeys: info.expandedKeys});
    }
    
	//拖拽中
	onDrop = (info) => {

		// let dragNodeDetail = info.dragNode.props.detail; //拖动节点
		// let dropNodeDetail = info.node.props.detail; //放置节点

		// const dropKey = info.node.props.eventKey; //放置节点id
		// const dragKey = info.dragNode.props.eventKey; //拖动节点id
		// const dropPos = info.node.props.pos.split('-');

		//如果是父节点不能拖动到别人节点里面
		
		// if(dragNodeDetail && dragNodeDetail.parentId<=0 && dragNodeDetail.subMenus.length>0 && (dropPos.length>2 || !info.dropToGap)){
		// 	message.warn('不能移动有子节点的节点！');
		// 	return;
		// }
		//限制不能拖动到子节点上
		// if(!info.dropToGap && dropPos.length>2){
		// 	return;
		// }
		// const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
		//参数
		// let targetSeq,targetParentId,id=dragKey;
		// if(dropPos.length===2 && !info.dropToGap){
		// 	targetParentId = dropKey;
		// 	targetSeq = dropNodeDetail.seq+1;
		// } else if(dropPos.length>2){
		// 	targetParentId = dropNodeDetail.parentId;
		// 	targetSeq = dropNodeDetail.seq+dropPosition;
		// } else if(dropPos.length===2 && info.dropToGap){
		// 	targetParentId = -1;
		// 	targetSeq = dropNodeDetail.seq+dropPosition;
		// }
		// let params = { id, targetParentId, targetSeq };
		// postAction('/bigdata/system/menu/move',params,0,1).then(res=>{
        //     if(res.success){
        //         message.success('移动成功！');
		// 		this.getMenuLists();
        //     } else {
        //         message.error(res.obj);
        //     }
        // })
    }
    
    onOk = () => {
        this.setState({showEdit:false,activeData:null, selectedKeys: []},()=>{
            this.getMenuLists();
        });
    }

    render(){
        //递归菜单列表
		const loop = data => data.map((item) => {
			if (item.subMenus && item.subMenus[0]) {
				return <TreeNode key={item.id} title={item.name} detail={item}>{loop(item.subMenus)}</TreeNode>;
			}
			return <TreeNode key={item.id} title={item.name} detail={item}/>;
        });
        
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>菜单管理</div>}
                extra={
                    <Icon type="form" style={this.state.activeData ? iconActiveStyle : iconStyle} onClick={()=>{
                        if(this.state.activeData){
                            this.setState({showEdit: true})
                        }
                    }} />}
                bordered={false}
                style={{margin: 20}}
            >
                <Tree
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                    defaultExpandedKeys={this.state.expandedKeys}
                    draggable
                    onDragEnter={this.onDragEnter}
                    onDrop={this.onDrop}
                >
                    {loop(this.state.menuLists)}
                </Tree>
                {
					this.state.showEdit
					&&
                    <EditModal
                        visible={this.state.showEdit}
                        activeData={this.state.activeData}
                        onOk={this.onOk}
                        onCancel={() => {this.setState({showEdit: false})}}
                    />
				}
            </Card>
        )
    }
}