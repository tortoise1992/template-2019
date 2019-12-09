import React, { Component} from 'react'
import { Card,Button,Table,Icon,Divider,Modal,message,Badge } from 'antd'
import { columns } from './config'
import {ExportTableData} from '@/util'
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
		uploadVisible:false
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
		ExportTableData(this.state.columns,this.state.dataSource,'供应商列表')
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
	handleImport=()=>{
		this.showModal('upload')
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
						field1:'特别的供应商',
						field2:'72913',
						field3:'沃尔玛',
						field4:'张三',
						field5:'381031831',
						field6:'5000',
						field7:'湖北省武汉市江汉区建设大道',
						field8:'1', //'0'是禁用状态，'1'是启用
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
	componentDidUpdate(prevProps, prevState) {
		if(JSON.stringify(prevProps) !== JSON.stringify(this.props)){
			this.getTableData()
		}
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
				title:'状态',
				dataIndex:'field8',
				align:'center',
				render:(text,record)=>{
					if(text === '1'){
						return <Badge status="success" />
					}else if(text === '0'){
						return <Badge status="error" />
					}
				}
			},
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
		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				this.setState({
					selectKeys:selectedRowKeys
				})
			}
		}
		return (
			<Card 
				title={<React.Fragment>
					供应商列表
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
						<Button icon='import' style={{marginLeft:10}} onClick={this.handleImport}>
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
					rowSelection={rowSelection}
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