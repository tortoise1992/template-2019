import React, { Component } from 'react'
import Redirect from 'umi/redirect';
export default class PrivateRoute extends Component {    
    render() {
        // 判断是否登录
        let userInfo=localStorage.getItem('userInfo')
        if(userInfo){
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }else{
            return <Redirect to="/login" />
        }
        
    }
}
