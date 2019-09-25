import React, { Component } from 'react'
import { Form,Input,Button } from 'antd'
const FormItem=Form.Item
class Filter extends Component {
    
    handleSearch=()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSearch(values)
            }
        });
    }
    handleReset=()=>{
        this.props.form.resetFields()
        this.props.handleReset()
    }
    render() {
        const {getFieldDecorator}=this.props.form
        return (
            <div  className='margin_b_15'>
                <Form layout='inline'>         
                            
                    <FormItem>
                        {
                            getFieldDecorator('name',{
                                initialValue:''
                            })(<Input placeholder='输入账号/姓名查询'/>)
                        }
                    </FormItem>
                    <FormItem>
                        <Button type='primary' icon='search' onClick={this.handleSearch}>查询</Button>
                    </FormItem>
                    <FormItem>
                        <Button type='dashed' icon='reload' onClick={this.handleReset}>重置</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Form.create()(Filter)
