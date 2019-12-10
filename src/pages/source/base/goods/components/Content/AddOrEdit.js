import React, { Component } from 'react'
import { Form, Input, Select, Modal, Row, Col, Collapse } from 'antd'
const FormItem = Form.Item, Option = Select.Option, { Panel } = Collapse
class AddOrEdit extends Component {
    state = {
        select1: [
            {
                name: '粮油',
                value: '1'
            },
            {
                name: '服装',
                value: '2'
            },
            {
                name: '数码',
                value: '3'
            }
        ],

        select2: [
            {
                name: '仓库1',
                value: '1'
            },
            {
                name: '仓库2',
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
                width={1200}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form layout='inline' labelAlign='left'>
                    <Collapse bordered={false} defaultActiveKey={['1', '2']}>
                        <Panel header="基本资料" key="1">
                            <Row gutter={10}>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='商品编号'>
                                        {
                                            getFieldDecorator('field2', {
                                                initialValue: editData ? editData.field2 : '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '商品编号不能为空'
                                                    }
                                                ]
                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} label='商品名称' {...layout}>
                                        {
                                            getFieldDecorator('field1', {
                                                initialValue: editData ? editData.field1 : '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '商品名称不能为空'
                                                    }
                                                ]
                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='商品条码'>
                                        {
                                            getFieldDecorator('field20', {
                                                initialValue: editData ? editData.field20 : '',

                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='商品类别'>
                                        {
                                            getFieldDecorator('field3', {
                                                initialValue: editData ? editData.field3 : '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '商品类别不能为空'
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
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='规格型号'>
                                        {
                                            getFieldDecorator('field4', {
                                                initialValue: editData ? editData.field4 : ''
                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='首选仓库'>
                                        {
                                            getFieldDecorator('field21', {
                                                initialValue: editData ? editData.field21 : '',

                                            })(<Select style={{ width: '100%' }}>
                                                {
                                                    select2.map((item, index) => <Option value={item.value} key={index}>{item.name}</Option>)
                                                }
                                            </Select>)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel header="价格策略" key="2">
                            <Row gutter={10}>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='零售价'>
                                        {
                                            getFieldDecorator('field11', {
                                                initialValue: editData ? editData.field11 : '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '零售价不能为空'
                                                    }
                                                ]
                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='批发价'>
                                        {
                                            getFieldDecorator('field12', {
                                                initialValue: editData ? editData.field12 : '',
                                                
                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='会员价'>
                                        {
                                            getFieldDecorator('field13', {
                                                initialValue: editData ? editData.field13 : '',
                                                
                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='折扣率1'>
                                        {
                                            getFieldDecorator('field22', {
                                                initialValue: editData ? editData.field22 : '',
                                                
                                            })(<Input addonAfter={'%'} />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='折扣率2'>
                                        {
                                            getFieldDecorator('field23', {
                                                initialValue: editData ? editData.field23 : ''
                                            })(<Input addonAfter={'%'} />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem style={{ width: '100%' }} {...layout} label='预计采购价'>
                                        {
                                            getFieldDecorator('field10', {
                                                initialValue: editData ? editData.field10 : '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '预计采购价'
                                                    }
                                                ]
                                            })(<Input />)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        </Panel>
                    </Collapse>

                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AddOrEdit)
