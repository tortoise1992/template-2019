import React, { Component,Fragment } from 'react'
import Redirect from 'umi/redirect'
import { getLocal } from '../util'
export default class Auth extends Component {
        render() {
        let user=getLocal('userInfo')
        if(user){
            return (
                <Fragment>
                    {this.props.children}
                </Fragment>
            )
        }else{
            return <Redirect to='/login'/>
        }
        
    }
}
