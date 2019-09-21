import React, { Component } from 'react'
import {HashRouter as Router} from 'react-router-dom';
import BasicLayout from '@/layout/BasicLayout'
import BlankLayout from '@/layout/BlankLayout'
export default class RouterPage extends Component {
    state={
        hash:''
    }
    componentDidMount() {
        this.setState({
            hash:window.location.hash.substring(1)
        })
    }
    
    render() {
        let {hash}=this.state
        let conetnt=null
        if(/^\/admin/.test(hash)){
            conetnt=<BasicLayout>
                
            </BasicLayout>
        }else if(/^\/login/.test(hash)){
            conetnt=<BlankLayout>

            </BlankLayout>
        }
        return <Router>
            {conetnt}
        </Router>
        
        
    }
}
