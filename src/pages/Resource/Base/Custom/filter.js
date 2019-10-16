import React, { Component } from 'react'
import { Form,Input,Select,Button } from 'antd'
const FormItem=Form.Item,{Option}=Select
class Filter extends Component {
    state={
        options:[{
            name:'全部类别',
            value:''
        },{
            name:'客户类别1',
            value:'1'
        },{
            name:'客户类别2',
            value:'2'
        }]
    }
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
                            getFieldDecorator('type',{
                                initialValue:''
                            })(<Select style={{width:180}} placeholder='请选择客户类别'>
                                {
                                    this.state.options.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                                }
                            </Select>)
                        }
                    </FormItem>           
                    <FormItem>
                        {
                            getFieldDecorator('name',{
                                initialValue:''
                            })(<Input placeholder='输入客户编号/名称查询'/>)
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