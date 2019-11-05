import React, { Component } from 'react'
import { Form,Select } from 'antd'
const FormItem=Form.Item,Option=Select.Option
class Filter extends Component {
    state={
        types:[
            {
                name:'全部',
                value:''
            },
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
    handleSubmit = e => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Form>
                    <FormItem>
                        {
                            getFieldDecorator('type',{

                            })(<Select>
                            {
                                this.state.types.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                            }
                            </Select>)
                        }
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Form.create()(Filter)