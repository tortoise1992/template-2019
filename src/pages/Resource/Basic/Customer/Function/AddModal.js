import React, { Component } from 'react'
import { Modal,Form,Select,Input, } from 'antd'
const FormItem=Form.Item,Option=Select.Option
class AddModal extends Component {
    state={
        types:[
            {
                name:'普通客户',
                value:'common'
            },
            {
                name:'Vip客户',
                value:'vip'
            }
        ]
    }
    handleOK=()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                // 提交接口调用之后再调用handleOk关闭弹窗并刷新列表
                this.props.handleOk('add')
            }
        })
    }
    render() {
        const {visible}=this.props
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                span:4
            },
            wrapperCol: {
                span:20
            }
        }
        return (
            <Modal
                visible={visible}
                title='新增客户'
                onCancel={()=>{this.props.handleCancel('add')}}
                onOk={this.handleOK}
            >
                <Form {...formItemLayout}>
                    <FormItem label='客户编号'>
                        {
                            getFieldDecorator('no',{
                                initialValue:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'客户编号不能为空'
                                    }
                                ]
                            })(<Input placeholder='请输入客户编号'/>)
                        }
                    </FormItem>
                    <FormItem label='客户姓名'>
                        {
                            getFieldDecorator('name',{
                                initialValue:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'客户姓名不能为空'
                                    }
                                ]
                            })(<Input placeholder='请输入客户姓名'/>)
                        }
                    </FormItem>
                    
                    <FormItem label='客户类别'>
                        {
                            getFieldDecorator('type',{
                                initialValue:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'客户类别不能为空'
                                    }
                                ]
                            })(<Select>
                            {
                                this.state.types.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                            }
                            </Select>)
                        }
                    </FormItem>
                    <FormItem label='客户等级'>
                        {
                            getFieldDecorator('level',{
                                initialValue:''
                            })(<Select>
                            {
                                this.state.types.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                            }
                            </Select>)
                        }
                    </FormItem>  
                    <FormItem label='备注'>
                        {
                            getFieldDecorator('remark',{
                                initialValue:'',
                                
                            })(<Input/>)
                        }
                    </FormItem>                               
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AddModal)
