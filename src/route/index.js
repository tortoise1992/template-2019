import React, { Component,Suspense } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import Login from '@/pages/Login'
const Home = React.lazy(() => import('@/pages/Home'))
// 系统管理
const ServerInfo=React.lazy(() => import('@/pages/System/BasicInfo/Server'))
const SiteInfo=React.lazy(() => import('@/pages/System/BasicInfo/Site'))
const LoginInfo=React.lazy(() => import('@/pages/System/BasicInfo/LoginHistory'))
const UserManagement=React.lazy(() => import('@/pages/System/User'))
const PermissionManagement=React.lazy(() => import('@/pages/System/Permission'))
const SiteManagement=React.lazy(() => import('@/pages/System/SiteSetting'))
const MenuManagement=React.lazy(() => import('@/pages/System/Menu'))

class RouterPage extends Component {    
    checkAuth=()=>{
        return localStorage.getItem('userInfo')
    }
    render() {     
        
        return (
                <Switch>
                    <Route path="/login" render={props => (this.checkAuth() ? <Redirect to="/"/> : <Login/>)}/>                    
                    <Route
                        path="/"
                        render={props => (this.checkAuth() ? <BasicLayout>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                                <Route path="/home" exact component={Home}/>                                
                                <Route path="/system/basicInfo/server" exact component={ServerInfo}/>
                                <Route path="/system/basicInfo/site" exact component={SiteInfo}/>
                                <Route path="/system/basicInfo/history" exact component={LoginInfo}/>
                                <Route path="/system/user" exact component={UserManagement}/>
                                <Route path="/system/permission" exact component={PermissionManagement}/>
                                <Route path="/system/site" exact component={SiteManagement}/>
                                <Route path="/system/menu" exact component={MenuManagement}/>
                            </Suspense>
                        </BasicLayout> : <Route render={() => <Redirect to="/login"/>}/>)}
                    />
                </Switch>
                
           )
    }
}

export default RouterPage
