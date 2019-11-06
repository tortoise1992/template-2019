import React, { Component } from 'react'
import { Modal,Form,Select,Input } from 'antd'
import {SelectWidth,InputWidth} from '@/config/variable'
const FormItem=Form.Item,Option=Select.Option
class AddModal extends Component {
    state={
        types:[]
    }
    render() {
        const {visible}=this.props
        const { getFieldDecorator } = this.props.form
        return (
            <Modal
                visible={visible}
                title='新增'
            >
                <Form>
                    <FormItem label='客户类别'>
                        {
                            getFieldDecorator('type',{
                                initialValue:''
                            })(<Select>
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
                            })(<Input placeholder='请输入客户姓名或联系方式'/>)
                        }
                    </FormItem>                                      
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AddModal)
