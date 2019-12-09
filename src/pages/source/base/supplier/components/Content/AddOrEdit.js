import React, { Component } from 'react'
import { Form, Input, Select, Modal, Row, Col } from 'antd'
const FormItem = Form.Item, Option = Select.Option
class AddOrEdit extends Component {
    state = {
        select1: [
            {
                name: '等级1',
                value: '1'
            },
            {
                name: '等级2',
                value: '2'
            }
        ],

        select2: [
            {
                name: '启用',
                value: '1'
            },
            {
                name: '禁用',
                value: '0'
            }
        ]
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
        const { select1, select2 } = this.state
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
                            <FormItem style={{ width: '100%' }} {...layout} label='供应商类别'>
                                {
                                    getFieldDecorator('field1', {
                                        initialValue: editData ? editData.field1 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '供应商类别不能为空'
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
                            <FormItem style={{ width: '100%' }} label='供应商编号' {...layout}>
                                {
                                    getFieldDecorator('field2', {
                                        initialValue: editData ? editData.field2 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '供应商编号不能为空'
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='供应商名称'>
                                {
                                    getFieldDecorator('field3', {
                                        initialValue: editData ? editData.field3 : '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '供应商名称不能为空'
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>

                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='联系人'>
                                {
                                    getFieldDecorator('field4', {
                                        initialValue: editData ? editData.field4 : ''
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='手机号'>
                                {
                                    getFieldDecorator('field5', {
                                        initialValue: editData ? editData.field5 : ''
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='应付款'>
                                {
                                    getFieldDecorator('field6', {
                                        initialValue: editData ? editData.field6 : ''
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='地址'>
                                {
                                    getFieldDecorator('field7', {
                                        initialValue: editData ? editData.field7 : ''
                                    })(<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem style={{ width: '100%' }} {...layout} label='状态'>
                                {
                                    getFieldDecorator('field8', {
                                        initialValue: editData ? editData.field8 : '',

                                    })(<Select style={{ width: '100%' }}>
                                        {
                                            select2.map((item, index) => <Option value={item.value} key={index}>{item.name}</Option>)
                                        }
                                    </Select>)
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
