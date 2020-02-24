import React, { Component } from 'react'
import './index.less'
import { Form, Icon, Input, Button,message } from 'antd'
import withRouter from 'umi/withRouter'
import {setLocal} from '../../util'
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
                this.setState({
                    loading:true
                })
                let res=require('./data/data.json')
                if(res.success){
                    this.setState({
                        loading:false
                    })
                    setLocal('userInfo',res.data)
                    message.success('登录成功')
                    setTimeout(() => {
                        this.props.history.replace('/')
                    }, 1000);
                }else{
                    message.err(res.data)
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
                    <div className="fire">
                        <div className="flames">
                            <div className="flame"></div>
                            <div className="flame"></div>
                            <div className="flame"></div>
                            <div className="flame"></div>
                        </div>
                        <div className="logs"></div>
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

export default withRouter(Form.create()(Login))