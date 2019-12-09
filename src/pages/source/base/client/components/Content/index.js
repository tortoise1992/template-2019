import React, { Component} from 'react'
import { Card,Button,Table,Icon,Divider,Modal,message } from 'antd'
import { columns } from './config'
import {ExportTableData} from '@/util/index'
import AddOrEdit from './AddOrEdit'
import ImportFile from './ImportFile'
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
		uploadVisible:true
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
	handleExport=()=>{
		ExportTableData(this.state.columns,this.state.dataSource,'客户列表')
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
				total:2,
				page:1,
				pageSize:10,
				rows:[
					{
						id:'31318398',
						field1:'客户级别1',
						field2:'vip1',
						field3:'s12821',
						field4:'昊天科技',
						field5:'昊天',
						field6:'1331907491',
						field7:'100000',
						field8:'湖北省武汉市江汉区建设大道',
					},
					{
						id:'654145',
						field1:'客户级别2',
						field2:'vip2',
						field3:'s12821',
						field4:'昊天科技',
						field5:'昊天',
						field6:'1331907491',
						field7:'100000',
						field8:'湖北省武汉市江汉区建设大道',
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
		const {dataSource,columns,pagination,addVisible,uploadVisible,editData}=this.state
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
					客户管理列表
				</React.Fragment>}
				extra={
					<React.Fragment>
						<Button icon='plus' onClick={()=>{this.handleAdd('add')}}>
							新增
						</Button>
						<Button icon='sync' style={{marginLeft:10}} onClick={()=>{this.getTableData()}}>
							刷新
						</Button>
						<Button icon='export' style={{marginLeft:10}} onClick={this.handleExport}>
							导出
						</Button>
						<Button icon='import' style={{marginLeft:10}}>
							导入
						</Button>
						<Button icon='delete' style={{marginLeft:10}} onClick={()=>{this.handleDelete(this.state.selectKeys)}}>
							批量删除
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
				{
					uploadVisible && <ImportFile visible={uploadVisible} cancelModal={this.cancelModal}/>
				}
			</Card>
		)
	}
}