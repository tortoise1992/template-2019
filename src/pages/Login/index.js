import React, { Component } from 'react'
import './index.less'
import Logo from './logo.png'
import { Form, Input, Icon, Button ,message} from 'antd'
// import {postAction} from '../../axios'
import router from 'umi/router';
import NavConfig from '../../config/nav'
const FormItem = Form.Item
class Login extends Component {
    state = {
        rememberPwd: false,
        username: '',
        password: '',
        loginLoading:false
    }
    componentDidMount = () => {
        // 挂载完毕的时候判断是否自动登录或者记住密码
    } 
    handleLogin=()=>{        
        this.props.form.validateFields((err,values)=>{
            if(!err){
                // 逐一校验
                if(!values.username || values.username === ''){
                    message.error('用户名不能为空')
                    return
                }
                if(!values.password || values.password === ''){
                    message.error('密码不能为空')
                    return
                }
                this.setState({
                    loginLoading:true
                })

                // 静态数据
                let data=NavConfig
                localStorage.setItem('userInfo',JSON.stringify(data.obj))
                message.success('登陆成功')
                router.replace('/home')
                // postAction(
                //     '/authorize/login',
                //     {
                //         username:values.username,
                //         password:values.password
                //     }
                // ).then(res=>{
                //     this.setState({
                //         loginLoading:false
                //     })
                //     if(res.success){                        
                //         localStorage.setItem('userInfo',JSON.stringify(res.obj))
                //         message.success('登陆成功')
                //         router.replace('/')
                //     }
                // }).catch(err=>{
                //     this.setState({
                //         loginLoading:false
                //     })
                // })
            }
        })
    }    
    // 设置记住密码
    handleRememberChange=(e)=>{
        let checked=e.target.checked
        if(checked){
            if(this.state.username && this.state.password){

            }
        }else{

        }
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='login-wrapper'>                
                <div className='wrapper'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='login'>
                        <Form>
                            <FormItem>
                                {
                                    getFieldDecorator('username', {

                                    })(<Input size='large' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名'></Input>)
                                }
                            </FormItem>
                            <FormItem>
                                {
                                    getFieldDecorator('password', {

                                    })(<Input type='password' size='large' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码'></Input>)
                                }
                            </FormItem>                                
                            {/* <FormItem>
                                {
                                    getFieldDecorator('rememberPwd', {

                                    })(<Checkbox onChange={this.handleRememberChange}>记住密码</Checkbox>)
                                }
                            </FormItem> */}
                            <FormItem>
                                <Button loading={this.state.loginLoading} onClick={this.handleLogin} size='large' style={{ width: '100%' }} type='primary'>登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
Login = Form.create()(Login)
export default Login
