import React, { Component } from 'react'
import './index.less'
import { Form, Icon, Input, Button } from 'antd'
class Login extends Component {
    state = {
        list: [
            'html', 'react', 'vue', 'javascript', 'css', 'node', 'webpack', 'umi', 'ahuife', 'antd'
        ],
        loading:false
    }
    handleLogin=()=>{
        this.props.form.validateFields((err, fieldsValue)=>{
            if(!err){
                // console.log(fieldsValue)
                let res=require('./data.json')
                if(res.success){

                }
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="bruce">
                <ul className="bubble-bgwall">
                    {
                        this.state.list.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
                <div className='login-box'>
                    <div class="fire">
                        <div class="flames">
                            <div class="flame"></div>
                            <div class="flame"></div>
                            <div class="flame"></div>
                            <div class="flame"></div>
                        </div>
                        <div class="logs"></div>
                    </div>
                    <div className='web-font title'>
                        后台管理系统
                    </div>
                    <Form className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            
                            <Button onClick={this.handleLogin} type="primary" block loading={this.state.loading}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login)