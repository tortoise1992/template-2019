import React, { Component } from 'react'
import { Modal,Form,Input,message,Select } from 'antd'
const FormItem=Form.Item,{Option}=Select
class AModal extends Component {
    state={
        roles:[{
            name:'系统管理员',
            value:'admin'
        }]
    }
    handleOk=()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.info('保存数据')
                this.props.handleOk()
            }
        });
    }
    render() {
        const {getFieldDecorator}=this.props.form,layout={
            labelCol: {
                span:5
            },
            wrapperCol: {
                span:19
            }
        }
        let editData=this.props.editData
        return (
            <Modal
                visible={this.props.visible}
                title={`${this.props.editData?'编辑':'新建'}用户`}
                closable={false}
                onCancel={this.props.handleCancelModal}
                onOk={this.handleOk}
            >
                <Form {...layout}>                   
                       
                    <FormItem label='账号'>
                        {
                            getFieldDecorator('account',{
                                initialValue:editData?editData.account:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'账号不能为空'
                                    }
                                ]
                            })(<Input/>)
                        }
                    </FormItem>
                
                    <FormItem label='姓名'>
                        {
                            getFieldDecorator('name',{
                                initialValue:editData?editData.name:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'姓名不能为空'
                                    }
                                ]
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='邮箱'>
                        {
                            getFieldDecorator('email',{
                                initialValue:editData?editData.email:'',
                               
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='手机'>
                        {
                            getFieldDecorator('phone',{
                                initialValue:editData?editData.phone:'',
                               
                            })(<Input/>)
                        }
                    </FormItem>
                
                    <FormItem label='角色'>
                        {
                            getFieldDecorator('role',{
                                initialValue:editData?editData.role:''
                            })(<Select>
                                {
                                    this.state.roles.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                                }
                            </Select>)
                        }
                    </FormItem>
                
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AModal)
