import React, { Component } from 'react'
import { Form,Input,Select,Button } from 'antd'
const FormItem=Form.Item,{Option}=Select
class Filter extends Component {
    state={
        options:[{
            name:'全部',
            value:''
        },{
            name:'正常',
            value:'1'
        },{
            name:'禁用',
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
            <div  className='margin_b_15' style={{backgroundColor:'#fff',padding:'10px 20px'}}>
                <Form layout='inline'>                    
                    <FormItem label='登录名'>
                        {
                            getFieldDecorator('name',{
                                initialValue:''
                            })(<Input/>)
                        }
                    </FormItem>                   
                    <FormItem label='用户名'>
                        {
                            getFieldDecorator('username',{
                                initialValue:''
                            })(<Input/>)
                        }
                    </FormItem>   
                    <FormItem label='用户状态'>
                        {
                            getFieldDecorator('status',{
                                initialValue:''
                            })(<Select style={{width:180}}>
                                {
                                    this.state.options.map((item,index)=><Option key={index} value={item.value}>{item.name}</Option>)
                                }
                            </Select>)
                        }
                    </FormItem>

                    <FormItem>
                        <Button type='primary' icon='search' onClick={this.handleSearch}>搜索</Button>
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
