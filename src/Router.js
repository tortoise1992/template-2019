import React, { Component,Suspense } from 'react'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import BlankLayout from '@/layout/BlankLayout'

const Login = React.lazy(() => import('./pages/Login'))
const Home = React.lazy(() => import('./pages/Home'))
export default class RouterPage extends Component {
    state={
        hash:''
    }
    componentDidMount() {
        this.setState({
            hash:window.location.hash.substring(1)
        })
    }
    componentDidUpdate(prevProps, prevState) {
        
    }
    
    render() {
        let {hash}=this.state
        let conetnt=null
        let userInfo=localStorage.getItem('userInfo')
        if(/^\/admin/.test(hash)){
            conetnt=<BasicLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/admin/home" exact component={Home}/>    
                        {
                            !userInfo&&<Route path="/"  render={props=><Redirect to='/login'/>}/> 
                        }                    
                    </Switch>
                </Suspense>
            </BasicLayout>
        }else if(/^\/login/.test(hash)){
            conetnt=<BlankLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/login" exact component={Login}/>    
                        {
                            userInfo&&<Route path="/"  render={props=><Redirect to='/admin/home'/>}/> 
                        }               
                    </Switch>
                </Suspense>
            </BlankLayout>
        }else{
            conetnt=<Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {
                        userInfo&&<Route path="/"  render={props=><Redirect to='/admin/home'/>}/> 
                    }  
                    {
                        !userInfo&&<Route path="/"  render={props=><Redirect to='/login'/>}/> 
                    }              
                </Switch>
            </Suspense>
        }
        return <Router>
            {conetnt}
        </Router>
    }
}
