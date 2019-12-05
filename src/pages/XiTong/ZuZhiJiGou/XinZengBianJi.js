import React, { Component } from 'react'
import { Modal,Form } from 'antd'
const FormItem=Form.Item,Option=Select.Option
class XinZengBianJi extends Component {
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
            <Modal visible={true}>
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
            </Modal>
        )
    }
}


export default Form.create()(XinZengBianJi)