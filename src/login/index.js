import React from 'react';
import { postAction } from '@/axios';
import { Switch, Route, Redirect } from 'react-router-dom';
import { message } from 'antd';
// import styles from './index.module.less';
import loginStyle from './login.module.less'
import Logo from './logo.png'
import Bgimg from './bg.png'
class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    keyDown = (e) => {
        if(e.keyCode === 13){
            this.loginIn();
        }
    }

    componentDidMount(){
        window.addEventListener("keydown",this.keyDown,false)
    }

    componentWillUnmount(){
        window.removeEventListener("keydown",this.keyDown,false)
    }

    loginIn = () => {
        const { username, password } = this.state;
        if(username === ""){
            message.warning("用户名不能为空");
            return false;
        }
        if(password === ""){
            message.warning("密码不能为空");
            return false;
        }
        postAction('/ybt/auth/login',{username,password,rememberMe:"0"},1,1).then(res => {
            if(res.success){
                window.localStorage.setItem("loginStatus","true");
                window.localStorage.setItem("leftMenuList",JSON.stringify(res.obj))//将左侧菜单数据写入localstrage
                window.location.reload();
            }else{
                message.error(res.obj)
            }
        })
    }
	
    render(){
        return (
           <div className={loginStyle.box}>
               <div className={loginStyle.top}>
                    <img className={loginStyle.logo} src={Logo} alt=''/>
                    <div className={loginStyle.title}>
                        中南财经政法大学一表通系统
                    </div>
               </div>
               <div className={loginStyle.bottom}>
                    <div className={loginStyle.left}>
                        <div className={loginStyle.loginBox}>
                            <div className={loginStyle.loginTitle}>
                                请登录您的账户
                            </div>
                            <div className={loginStyle.form}>
                                <p>账号</p>
                                <input placeholder='请输入账号' autoComplete="new-password" onChange={(e)=>{this.setState({username:e.target.value})}}/>
                                <p style={{marginTop:20}}>密码</p>
                                <input placeholder='请输入密码' type="password" autoComplete="new-password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                            </div>
                            <div style={{textAlign:'center'}}>
                                <div onClick={this.loginIn} className={loginStyle.submit}>登录</div>
                            </div>
                        </div>
                    </div>
                    <div className={loginStyle.right}>
                         <img src={Bgimg} alt=''/>
                         <p className={loginStyle.copyRight}>版权所有 Copyright &copy; 2019 中南财经政法大学</p>
                    </div>
               </div>
           </div>
            // <div className={styles.bgContainer}>
            //     <div className={styles.loginContiner}>
            //         <img alt="中南财经政法大学logo" src={require('./logo.png')}/>
            //         <p className={styles.title}>大数据应用与分析平台</p>
                    
            //         <div style={{clear:"both"}}></div>
                    
            //         <div style={{clear:"both"}}></div>
                    
            //     </div>
            // </div>
            
        )
    }
		
}

class Index extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/" render={(props) => <Redirect to='/login'/>}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Index;
