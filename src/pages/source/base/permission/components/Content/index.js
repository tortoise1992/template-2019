import React, { Component} from 'react'
import { Card,Button,Table,Icon,Divider,Modal,message} from 'antd'
import { columns } from './config'
import AddOrEdit from './AddOrEdit'
export default class Content extends Component {
	state={
		dataSource:[],
		columns:columns,
		pagination:{
			current:1,
			pageSize:10,
			total:0,
			showTotal:(total) => `共${total}条`
		},
		selectKeys:[],
		editData:null,
		addVisible:false,
	}
	handleDelete=(param)=>{
		if(param instanceof Array){
			if(param.length>0){
				Modal.confirm({
					title:'删除',
					content:`确定删除已选的${param.length}条记录吗？`,
					okText:'确定',
					cancelText:'取消',
					onOk:()=>{
						message.info('删除成功')
						
					}
				})
			}else{
				message.warning('请选择至少一条记录')
			}

		}else{
			Modal.confirm({
				title:'删除',
				content:'确定删除该条记录吗？',
				okText:'确定',
				cancelText:'取消',
				onOk:()=>{
					message.info('删除成功')
				}
			})
		}
		
	}
	
	showModal=(type)=>{
		this.setState({
			[`${type}Visible`]:true
		})
	}
	cancelModal=(type)=>{
		this.setState({
			[`${type}Visible`]:false,
			editData:null
		},()=>{
			this.getTableData()
		})
	}
	handleAdd=(type)=>{
		this.showModal(type)
	}
	handleEdit=(record)=>{
		this.setState({
			editData:record
		},()=>{
			this.showModal('add')
		})
	}
	
	getTableData=()=>{
		let res={
			success:true,
			obj:{
				total:1,
				page:1,
				pageSize:10,
				rows:[
					{
						id:'31318398',
						field1:'阿晖',
						field2:'2131441411'											
					}
				]
			}
		}
		if(res.success){
			let pagination={
				...this.state.pagination,
				total:res.obj.total,
				current:res.obj.page,
				pageSize:res.obj.pageSize
			}
			let dataSource=res.obj.rows.map((item,index)=>{
				item.key=index+1
				return item
			})
			this.setState({
				dataSource,
				pagination
			})
		}
	}
	componentDidMount() {
		this.getTableData()
	}
	
	handleTableChange=(pagination)=>{
		this.setState({
			pagination
		},()=>{
			this.getTableData()
		})
	}
	render() {
		const {dataSource,columns,pagination,addVisible,editData}=this.state
		let actColumns=[
			...columns,			
			{
				title:'操作',
				render:(text,record)=>{
					return <React.Fragment>
						<Icon type='edit' style={{cursor:'pointer'}} onClick={()=>{this.handleEdit(record)}}/>
						<Divider type='vertical'/>
						<Icon type='delete' style={{cursor:'pointer'}} onClick={()=>{this.handleDelete(record.id)}}/>
					</React.Fragment>
				}
			}
		]
		let curret=this.state.dataSource.length
		return (
			<Card 
				title={<React.Fragment>
					<Button icon='plus' type='primary' onClick={()=>{this.handleAdd('add')}}>
						新增子账户
					</Button>	
					<span style={{marginLeft:15}}>您还可以创建<i style={{color:'red'}}>{10-curret}</i>个子账户，共可创建<i style={{color:'red'}}>10</i>个子账户，已创建<i  style={{color:'red'}}>{curret}</i>个</span>										
				</React.Fragment>}
				
			>
				<Table
					columns={actColumns}
					dataSource={dataSource}
					rowKey={record=>record.id}
					pagination={pagination}
					onChange={this.handleTableChange}
				>

				</Table>
				{
					addVisible && <AddOrEdit editData={editData} visible={addVisible} cancelModal={this.cancelModal}/>
				}
				
			</Card>
		)
	}
}