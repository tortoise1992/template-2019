import React, { Component } from 'react'
import { Modal,Form,Input,Select,message } from 'antd'
const FormItem =Form.Item,Option=Select.Option
class AddOrEdit extends Component {
    state={
        roleList:[{
            name:'超级管理员',
            value:'admin'
        },{
            name:'Vip用户',
            value:'vip'
        },{
            name:'普通用户',
            value:'guest'
        }]
    }
    onOk=()=>{
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(JSON.stringify(values))
                this.props.form.resetFields()
                this.props.handleOk()
            }
        })
        
    }
    onCancel=()=>{
        // 重置表单
        this.props.form.resetFields()
        this.props.handleCancel()
    }
    render() {
        const {getFieldDecorator}=this.props.form
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Modal
                title={this.props.editData?'编辑用户':'新增用户'}
                visible={this.props.visible}
                onCancel={this.onCancel}
                onOk={this.onOk}
            >
                <Form {...formItemLayout}>
                    <FormItem label='用户名'>
                        {
                            getFieldDecorator('username',{
                                initialValue:this.props.editData?this.props.editData.username:'',
                                rules:[{
                                    required:true,
                                    message:'用户名不能为空'
                                }]
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='邮箱'>
                        {
                            getFieldDecorator('email',{
                                initialValue:this.props.editData?this.props.editData.email:'',
                                rules:[{
                                    required:true,
                                    message:'邮箱不能为空'
                                }]
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='密码'>
                        {
                            getFieldDecorator('password',{
                                initialValue:'',
                               
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='确认密码'>
                        {
                            getFieldDecorator('rePassword',{
                                initialValue:'',                               
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='角色'>
                        {
                            getFieldDecorator('role',{
                                initialValue:this.props.editData?this.props.editData.role:'',
                                rules:[{
                                    required:true,
                                    message:'角色不能为空'
                                }]
                            })(<Select>
                                {
                                    this.state.roleList.map((item,index)=>
                                        <Option key={index} value={item.value}>{item.name}</Option>
                                    )
                                }
                                
                            </Select>)
                        }
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}


export default Form.create()(AddOrEdit)
