import React, { Component } from 'react'
import { Modal,Form,Input,message } from 'antd'
const FormItem =Form.Item
class AddOrEdit extends Component {    
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
                title={'新增角色'}
                visible={this.props.visible}
                onCancel={this.onCancel}
                onOk={this.onOk}
            >
                <Form {...formItemLayout}>
                    <FormItem label='角色名称'>
                        {
                            getFieldDecorator('roleName',{
                                initialValue:'',
                                rules:[{
                                    required:true,
                                    message:'角色名称不能为空'
                                }]
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='角色编号'>
                        {
                            getFieldDecorator('roleCode',{
                                initialValue:'',
                                rules:[{
                                    required:true,
                                    message:'角色编号不能为空'
                                }]
                            })(<Input/>)
                        }
                    </FormItem>                                 
                </Form>
            </Modal>
        )
    }
}


export default Form.create()(AddOrEdit)
