import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select,Switch} from 'antd';
const { Option } = Select;
class DrawerForm extends React.Component {
	onClose=()=>{
		this.props.handleClose()
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Drawer
				title={`新增栏目`}
				width={720}
				onClose={this.onClose}
				visible={this.props.visible}
				closable={false}
				bodyStyle={{ paddingBottom: 80 }}
			>
				<Form layout="vertical" hideRequiredMark>
					<div style={{ fontSize: 16, color: '#ccc', marginBottom: 10 }}>
						常规选项
            		</div>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="栏目名称">
								{getFieldDecorator('name', {
									rules: [{ required: true, message: '请输入栏目名称' }],
								})(<Input placeholder="请输入栏目名称" />)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="栏目目录">
								{getFieldDecorator('url', {
									rules: [{ required: true, message: '请输入栏目目录' }],
								})(
									<Input
										style={{ width: '100%' }}
										placeholder="请输入栏目目录"
									/>,
								)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="内容模型">
								{getFieldDecorator('owner', {
									rules: [{ required: true, message: '请选择内容模型' }],
								})(
									<Select placeholder="请选择内容模型">
										<Option value="xiao">Xiaoxiao Fu</Option>
										<Option value="mao">Maomao Zhou</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="隐藏栏目">
								{getFieldDecorator('switch', 
									{ valuePropName: 'checked' }
								)(<Switch  checkedChildren="显示" unCheckedChildren="隐藏" />)}
							</Form.Item>
						</Col>
					</Row>

					
					<div style={{ fontSize: 16, color: '#ccc', marginBottom: 10 }}>
						高级选项
            		</div>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="列表模板">
								{getFieldDecorator('owner', {
									rules: [{ required: true, message: '请选择列表模板' }],
								})(
									<Select placeholder="请选择列表模板">
										<Option value="xiao">Xiaoxiao Fu</Option>
										<Option value="mao">Maomao Zhou</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="文档模板">
								{getFieldDecorator('owner', {
									rules: [{ required: true, message: '请选择文档模板' }],
								})(
									<Select placeholder="请选择文档模板">
										<Option value="xiao">Xiaoxiao Fu</Option>
										<Option value="mao">Maomao Zhou</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item label="SEO关键字">
								{getFieldDecorator('seo', {
									rules: [
										{
											required: true,
											message: '请输入SEO关键字',
										},
									],
								})(<Input.TextArea rows={4} placeholder="请输入SEO关键字" />)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item label="SEO描述">
								{getFieldDecorator('seoDescription', {
									rules: [
										{
											required: true,
											message: '请输入SEO描述',
										},
									],
								})(<Input.TextArea rows={4} placeholder="请输入SEO描述" />)}
							</Form.Item>
						</Col>
					</Row>
				</Form>
				<div
					style={{
						position: 'absolute',
						right: 0,
						bottom: 0,
						width: '100%',
						borderTop: '1px solid #e9e9e9',
						padding: '10px 16px',
						background: '#fff',
						textAlign: 'right',
					}}
				>
					<Button onClick={this.onClose} style={{ marginRight: 8 }}>
						取消
					</Button>
					<Button onClick={this.onClose} type="primary">
						保存
            		</Button>
				</div>
			</Drawer>
		);
	}
}

export default Form.create()(DrawerForm)
