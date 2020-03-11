import React, { Component } from 'react'
import { Form, Input, Tooltip, Icon } from 'antd'
class GongZhongHao extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span:6,
            },
            wrapperCol: {
                span:18,
            },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{width:'60%'}}>
                <Form.Item
                    label={
                        <span>
                            公众号名称&nbsp;
                            <Tooltip title="公众号名称">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            微信号&nbsp;
                            <Tooltip title="微信号">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('weixin', {
                    })(<Input />)}
                </Form.Item>
            </Form>
        )
    }
}
export default Form.create()(GongZhongHao)