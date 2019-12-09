import React, { Component } from 'react'
import { Form, Input, Button, Card,Select } from 'antd'
const FormItem = Form.Item,Option=Select.Option
class Filter extends Component {
	state={
		select1:[
			{
				name:'全部',
				value:''
			},
			{
				name:'等级1客户',
				value:'1'
			},
			{
				name:'等级2客户',
				value:'2'
			}
		]
	}
	// 搜索过滤
	handleSearch=()=>{
		this.props.form.validateFields((err,values)=>{
			// 拿到填的值
		})
	}
	render() {
		const { getFieldDecorator } = this.props.form
		const {select1}=this.state
		return (
			<Card bodyStyle={{paddingBottom:0}}>
				<Form layout='inline'>
					<FormItem label='客户类别'>
						{
							getFieldDecorator('type', {
								initialValue:''
							})(<Select style={{width:180}}>
								{
									select1.map((item,index)=><Option value={item.value} key={index}>{item.name}</Option>)
								}
							</Select>)
						}
					</FormItem>
					<FormItem label='客户名称'>
						{
							getFieldDecorator('name', {
								initialValue:''
							})(<Input placeholder='请输入客户名称'></Input>)
						}
					</FormItem>
					<FormItem>
						<Button type='primary' icon='search' onClick={this.handleSearch}>搜索</Button>
					</FormItem>
				</Form>
			</Card>
		)
	}
}

export default Form.create()(Filter)