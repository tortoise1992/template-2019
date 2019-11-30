import React, { Component } from 'react'
import { Card,Form,Input,Button,Select } from 'antd'
const FormItem=Form.Item,Option=Select.Option
class Shuaixuan extends Component {
    state={
        list1:[
            {
                name:'全部',
                value:''
            },
            {
                name:'启用',
                value:'1'
            },
            {
                name:'禁用',
                value:'2'
            },
        ]
    }
    render() {
        const {getFieldDecorator}=this.props.form
        return (
            <Card title='筛选过滤'>
                <Form layout='inline'>
                    <FormItem label='分类名称'>
                        {
                            getFieldDecorator('field1',{
                                initialValue:''
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='状态'>
                        {
                            getFieldDecorator('field2',{
                                initialValue:''
                            })(<Select style={{width:180}}>
                                {
                                    this.state.list1.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                                }
                            </Select>)
                        }
                    </FormItem>
                    <FormItem>
                        <Button type='primary' icon='search'>搜索</Button>
                    </FormItem>
                </Form>
            </Card>
        )
    }
}

export default Form.create()(Shuaixuan)