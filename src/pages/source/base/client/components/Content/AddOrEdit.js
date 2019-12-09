import React, { Component } from 'react'
import { Form, Input,Select,Modal,Row,Col } from 'antd'
const FormItem = Form.Item,Option=Select.Option
class AddOrEdit extends Component {
    state={
        select1:[			
			{
				name:'等级1客户',
				value:'1'
			},
			{
				name:'等级2客户',
				value:'2'
			}
		],
        select2:[			
			{
				name:'vip1',
				value:'1'
			},
			{
				name:'vip2',
				value:'2'
			}
		]
    }
    handleOk=()=>{
        this.props.form.validateFields((err,values)=>{
            // 拿到填的值
            if(!err){
                console.log(values)
                this.props.cancelModal('add')
            }            
		})
    }
    handleCancel=()=>{
        this.props.cancelModal('add')
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const {select1,select2}=this.state
        const {visible,editData}=this.props
        let layout={
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        }
        return (
            <Modal
                visible={visible}
                title={editData?'编辑':'新增'}
                width={1000}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form layout='inline' labelAlign='left'>
                    <Row gutter={20}>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} label='客户编号' {...layout}>
                                {
                                    getFieldDecorator('field1',{
                                        initialValue:editData?editData.field1:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'客户编号不能为空'
                                            }
                                        ]
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} {...layout} label='客户名称'>
                                {
                                    getFieldDecorator('field2',{
                                        initialValue:editData?editData.field2:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'客户名称不能为空'
                                            }
                                        ]
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} {...layout} label='客户类型'>
                                {
                                    getFieldDecorator('field3',{
                                        initialValue:editData?editData.field3:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'客户类型不能为空'
                                            }
                                        ]
                                    })(<Select style={{width:'100%'}}>
                                        {
                                            select1.map((item,index)=><Option value={item.value} key={index}>{item.name}</Option>)
                                        }
                                    </Select>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} {...layout} label='客户级别'>
                                {
                                    getFieldDecorator('field4',{
                                        initialValue:editData?editData.field4:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'客户级别不能为空'
                                            }
                                        ]
                                    })(<Select style={{width:'100%'}}>
                                        {
                                            select2.map((item,index)=><Option value={item.value} key={index}>{item.name}</Option>)
                                        }
                                    </Select>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} {...layout} label='联系人'>
                                {
                                    getFieldDecorator('field5',{
                                        initialValue:editData?editData.field5:''
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} {...layout} label='手机号'>
                                {
                                    getFieldDecorator('field6',{
                                        initialValue:editData?editData.field6:''
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} {...layout} label='应收款'>
                                {
                                    getFieldDecorator('field7',{
                                        initialValue:editData?editData.field7:''
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{width:'100%'}} {...layout} label='地址'>
                                {
                                    getFieldDecorator('field8',{
                                        initialValue:editData?editData.field8:''
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AddOrEdit)
