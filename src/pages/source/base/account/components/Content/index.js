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
		console.log(this.props.filterValue) //筛选条件参数
		console.log(this.state.pagination) //分页参数
		let res={
			success:true,
			obj:{
				total:1,
				page:1,
				pageSize:10,
				rows:[
					{
						id:'31318398',
						field1:'166',
						field2:'湖南科技',
						field3:'100000',
						field4:'80000',
						field5:'2019-10-20',
						field6:'普通账户',						
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
		
		return (
			<Card 
				title={<React.Fragment>
					账户列表
				</React.Fragment>}
				extra={
					<React.Fragment>
						<Button icon='plus' onClick={()=>{this.handleAdd('add')}}>
							新增
						</Button>
						<Button icon='sync' style={{marginLeft:10}} onClick={()=>{this.getTableData()}}>
							刷新
						</Button>						
					</React.Fragment>
				}
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