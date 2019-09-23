import React, { Component,Suspense } from 'react'
import {Switch,Route} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
const Nomatch = React.lazy(() => import('@/components/Nomatch'))
const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))
const UserManage= React.lazy(() => import('@/pages/System/User'))
class RouterPage extends Component {    
    checkAuth=()=>{
        return localStorage.getItem('userInfo')
    }
    render() {     
        
        return (
            <Suspense fallback={<div>Loading...</div>}>                
                <Switch>
                    <Route path="/login" render={props => (this.checkAuth() ? <Redirect to="/"/> : <Login/>)}/>                    
                    <Route
                        path="/"
                        render={props => (this.checkAuth() ? <BasicLayout>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/admin/home"/>}/>
                                <Route path="/admin/home" exact component={Home}/>
                                <Route path="/admin/system/user" exact component={UserManage}/>
                                <Route component={Nomatch}/>                               
                            </Switch>
                        </BasicLayout> : <Route render={() => <Redirect to="/login"/>}/>)}/>
                </Switch>
            </Suspense>           
                
           )
    }
}

export default RouterPage
