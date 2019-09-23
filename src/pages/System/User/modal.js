import React, { Component } from 'react'
import { Modal,Form,Input,message,Select } from 'antd'
const FormItem=Form.Item,{Option}=Select
class AModal extends Component {
    state={
        roles:[{
            name:'系统管理员',
            value:'admin'
        }],
        status:[
            {
                name:'正常',
                value:'1'
            },
            {
                name:'禁用',
                value:'2'
            }
        ]
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
                span: 4
            },
            wrapperCol: {
                span: 20
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
                width={600}
            >
                <Form {...layout}>
                    {
                        <FormItem label='登录名'>
                            {
                                getFieldDecorator('name',{
                                    initialValue:editData?editData.name:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'登录名不能为空'
                                        }
                                    ]
                                })(<Input disabled={editData?true:false}/>)
                            }
                        </FormItem>
                    }
                    <FormItem label='用户名'>
                        {
                            getFieldDecorator('username',{
                                initialValue:editData?editData.username:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'用户名不能为空'
                                    }
                                ]
                            })(<Input/>)
                        }
                    </FormItem>                    
                    <FormItem label='角色'>
                        {
                            getFieldDecorator('roles',{
                                initialValue:editData?editData.roles:''
                            })(<Select>
                                {
                                    this.state.roles.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                                }
                            </Select>)
                        }
                    </FormItem>
                    <FormItem label='出生日期'>
                        {
                            getFieldDecorator('birthday',{
                                initialValue:editData?editData.birthday:''
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='联系电话'>
                        {
                            getFieldDecorator('cellphpne',{
                                initialValue:editData?editData.cellphpne:''
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='状态'>
                        {
                            getFieldDecorator('status',{
                                initialValue:editData?editData.status:'1'
                            })(<Select>
                                {
                                    this.state.status.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
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
