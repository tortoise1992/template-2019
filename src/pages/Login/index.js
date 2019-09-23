import React from 'react';
// import { postAction } from '@/axios';
import {withRouter} from 'react-router-dom'
import { message,Form,Input,Button,Icon } from 'antd';
import loginStyle from './login.module.less'
import Bgimg from './bg.png'
const FormItem=Form.Item
class LoginPage extends React.Component{    
    keyDown = (e) => {
        if(e.keyCode === 13){
            this.handleLogin();
        }
    }
    componentDidMount(){
        window.addEventListener("keydown",this.keyDown,false)
    }

    componentWillUnmount(){
        window.removeEventListener("keydown",this.keyDown,false)
    }

    handleLogin=()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 模拟请求接口拿到数据
                const res=require('@/data/authorize/login.json')
                if(res.success){
                    message.success('登录成功')
                    localStorage.setItem('userInfo',JSON.stringify(res.obj))
                    this.props.history.push('/home')
                }
            }
        })
    }
	
    render(){
        const {getFieldDecorator}=this.props.form        
        return (
           <div className={loginStyle.box}>               
               <div className={loginStyle.bottom}>
                    <div className={loginStyle.left}>
                        <div className={loginStyle.loginBox}>
                            <div className={loginStyle.loginTitle}>
                                请登录您的账户
                            </div>
                            <Form>
                                <FormItem>
                                    {
                                        getFieldDecorator('username',{

                                        })(<Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        />)
                                    }
                                </FormItem>
                                <FormItem>
                                    {
                                        getFieldDecorator('password',{

                                        })(<Input
                                            type='password'
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        />)
                                    }
                                </FormItem>
                                <FormItem>
                                    <Button type='primary' block onClick={this.handleLogin}>登录</Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                    <div className={loginStyle.right}>
                         <img src={Bgimg} alt=''/>
                         <p className={loginStyle.copyRight}>版权所有 Copyright &copy; 2019 www.ahuife.com</p>
                    </div>
               </div>
           </div>           
            
        )
    }
		
}



export default withRouter(Form.create()(LoginPage))
