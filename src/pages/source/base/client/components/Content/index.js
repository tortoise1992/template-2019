import React, { Component} from 'react'
import { Card,Button,Checkbox,Table } from 'antd'
export default class Content extends Component {
	state={
		dataSource:[],
		columns:[
			{
				title:'序号',
				dataIndex:'key'
			},
			{
				title:'客户类别',
				dataIndex:'field1'
			},
		]
	}
	getTableData=()=>{

	}
	render() {
		const {dataSource,columns}=this.state
		return (
			<Card 
				title={<React.Fragment>
					<Button type='primary' icon='setting' style={{marginRight:10}}>列表设置</Button>
					<Checkbox onChange={this.handleSelectAll}>全选</Checkbox>
				</React.Fragment>}
				extra={
					<React.Fragment>
						<Button icon='plus'>
							新增
						</Button>
						<Button icon='sync' style={{marginLeft:10}}>
							刷新
						</Button>
						<Button icon='export' style={{marginLeft:10}}>
							导出
						</Button>
						<Button icon='import' style={{marginLeft:10}}>
							导入
						</Button>
						<Button icon='delete' style={{marginLeft:10}}>
							批量删除
						</Button>
					</React.Fragment>
				}
			>
				<Table
					columns={columns}
					dataSource={dataSource}
				>

				</Table>
			</Card>
		)
	}
}