import React, { Component } from 'react'
import { Modal,Form,Input,message,Select,Row,Col } from 'antd'
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
                span: 7
            },
            wrapperCol: {
                span: 17
            }
        }
        let editData=this.props.editData
        return (
            <Modal
                visible={this.props.visible}
                title={`${this.props.editData?'编辑':'新建'}客户`}
                closable={false}
                onCancel={this.props.handleCancelModal}
                onOk={this.handleOk}
                width={800}
            >
                <Form {...layout}>
                    <Row>
                        <Col span={12}>
                            <FormItem label='客户编号'>
                                {
                                    getFieldDecorator('custom_no',{
                                        initialValue:editData?editData.custom_no:'',
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
                            <FormItem label='客户名称'>
                                {
                                    getFieldDecorator('custom_name',{
                                        initialValue:editData?editData.custom_name:'',
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
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem label='客户类别'>
                                {
                                    getFieldDecorator('custom_type',{
                                        initialValue:editData?editData.custom_type:''
                                    })(<Select>
                                        {
                                            this.state.roles.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                                        }
                                    </Select>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label='客户等级'>
                                {
                                    getFieldDecorator('custom_level',{
                                        initialValue:editData?editData.custom_level:''
                                    })(<Select>
                                        {
                                            this.state.roles.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                                        }
                                    </Select>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem label='余额日期'>
                                {
                                    getFieldDecorator('date',{
                                        initialValue:editData?editData.date:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'余额日期不能为空'
                                            }
                                        ]
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label='期初应收款'>
                                {
                                    getFieldDecorator('start_should',{
                                        initialValue:editData?editData.start_should:'',
                                        
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                    </Row>             
                    <Row>
                        <Col span={12}>
                            <FormItem label='期初预收款'>
                                {
                                    getFieldDecorator('start_had',{
                                        initialValue:editData?editData.start_had:'',
                                       
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label='纳税人识别号'>
                                {
                                    getFieldDecorator('tax_no',{
                                        initialValue:editData?editData.tax_no:'',
                                        
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem label='开户银行'>
                                {
                                    getFieldDecorator('bank',{
                                        initialValue:editData?editData.bank:'',
                                       
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label='银行账号'>
                                {
                                    getFieldDecorator('bank_no',{
                                        initialValue:editData?editData.bank_no:'',
                                        
                                    })(<Input/>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <FormItem label='备注信息' labelCol={4} wrapperCol={20}>
                            {
                                    getFieldDecorator('remark',{
                                        initialValue:editData?editData.remark:'',
                                        
                                    })(<Input.TextArea/>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AModal)
