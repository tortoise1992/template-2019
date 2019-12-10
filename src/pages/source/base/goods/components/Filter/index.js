import React, { Component } from 'react'
import { Form, Input, Button, Card,Select,Checkbox } from 'antd'
const FormItem = Form.Item,Option=Select.Option
class Filter extends Component {
	state={
		select1:[
			{
				name:'全部',
				value:''
			},
			{
				name:'已上架',
				value:'1'
			},
			{
				name:'已下架',
				value:'2'
			}
		],
		select2:[
			{
				name:'全部',
				value:''
			},
			{
				name:'粮油',
				value:'1'
			},
			{
				name:'服装',
				value:'2'
			},
			{
				name:'数码',
				value:'3'
			}
		]
	}
	// 搜索过滤
	handleSearch=()=>{
		this.props.form.validateFields((err,values)=>{
			// 拿到填的值
			this.props.changeFilter(values)
		})
	}
	render() {
		const { getFieldDecorator } = this.props.form
		const {select1,select2}=this.state
		return (
			<Card bodyStyle={{paddingBottom:0}}>
				<Form layout='inline'>
					<FormItem label='商品状态'>
						{
							getFieldDecorator('status', {
								initialValue:''
							})(<Select style={{width:180}}>
								{
									select1.map((item,index)=><Option value={item.value} key={index}>{item.name}</Option>)
								}
							</Select>)
						}
					</FormItem>
					<FormItem label='商品分类'>
						{
							getFieldDecorator('cate', {
								initialValue:''
							})(<Select style={{width:180}}>
								{
									select2.map((item,index)=><Option value={item.value} key={index}>{item.name}</Option>)
								}
							</Select>)
						}
					</FormItem>
					
					<FormItem>
						{
							getFieldDecorator('name', {
								initialValue:''
							})(<Input placeholder='请输入商品名称/编号'></Input>)
						}
					</FormItem>
					<FormItem>
						{
							getFieldDecorator('warn', {
								initialValue:[]
							})(<Checkbox.Group>
								<Checkbox value="yj">库存预警</Checkbox>
							</Checkbox.Group>)
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