import React, { Component } from 'react'
import { Form,Select,Input,Button } from 'antd'
import {SelectWidth,InputWidth} from '@/config/variable'
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
                this.props.changeFilter(values)
            }
        })
    }
    
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='padding margin_b_15'>
                <Form layout='inline'>
                    <FormItem>
                        {
                            getFieldDecorator('type',{
                                initialValue:''
                            })(<Select style={{width:SelectWidth}}>
                            {
                                this.state.types.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                            }
                            </Select>)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('name',{
                                initialValue:''
                            })(<Input style={{width:InputWidth}} placeholder='请输入客户姓名或联系方式'/>)
                        }
                    </FormItem>
                    <FormItem>
                        <Button type='primary' icon='search' onClick={this.handleSubmit}>查询</Button>
                    </FormItem>                    
                </Form>
            </div>
        )
    }
}
export default Form.create()(Filter)