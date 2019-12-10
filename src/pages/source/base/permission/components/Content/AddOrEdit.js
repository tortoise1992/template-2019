import React, { Component } from 'react'
import { Form, Input, Select, Modal, Row, Col,DatePicker  } from 'antd'
const FormItem = Form.Item, Option = Select.Option
class AddOrEdit extends Component {
    state = {
        select1: [
            {
                name: '普通账户',
                value: '普通账户'
            },
            {
                name: '特殊账户',
                value: '特殊账户'
            }
        ],

    }
    handleOk = () => {
        this.props.form.validateFields((err, values) => {
            // 拿到填的值
            if (!err) {
                console.log(values)
                this.props.cancelModal('add')
            }
        })
    }
    handleCancel = () => {
        this.props.cancelModal('add')
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const { select1 } = this.state
        const { visible, editData } = this.props
        let layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        }
        return (
            <Modal
                visible={visible}
                title={editData ? '编辑' : '新增'}
                width={1000}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form layout='inline' labelAlign='left'>
                    <Row gutter={20}>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='账户编号'>
                                {
                                    getFieldDecorator('field1', {
                                        initialValue: editData ? editData.field1 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '账户编号不能为空'
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} label='账户名称' {...layout}>
                                {
                                    getFieldDecorator('field2', {
                                        initialValue: editData ? editData.field2 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '账户名称不能为空'
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='账户类别'>
                                {
                                    getFieldDecorator('field6', {
                                        initialValue: editData ? editData.field6 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '账户类别不能为空'
                                            }
                                        ]
                                    })(<Select style={{ width: '100%' }}>
                                    {
                                        select1.map((item, index) => <Option value={item.value} key={index}>{item.name}</Option>)
                                    }
                                </Select>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} label='期初余额' {...layout}>
                                {
                                    getFieldDecorator('field4', {
                                        initialValue: editData ? editData.field4 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '期初余额不能为空'
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} label='余额日期' {...layout}>
                                {
                                    getFieldDecorator('field7', {
                                        initialValue: editData ? editData.field7 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '余额日期不能为空'
                                            }
                                        ]
                                    })(<DatePicker  />)
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
