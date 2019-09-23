import React, { Component,Suspense } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import Login from '@/pages/Login'
const Home = React.lazy(() => import('@/pages/Home'))
// const UserManage= React.lazy(() => import('@/pages/System/User'))
// const PermissionManage= React.lazy(() => import('@/pages/System/Permission'))

// 资料管理
const CustomManage=React.lazy(() => import('@/pages/Resource/Base/Custom'))
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
                                {/* <Route path="/admin/system/user" exact component={UserManage}/>
                                <Route path="/admin/system/permission" exact component={PermissionManage}/> */}
                                <Route path="/resource/base/custom" exact component={CustomManage}/>
                            </Suspense>
                        </BasicLayout> : <Route render={() => <Redirect to="/login"/>}/>)}
                    />
                </Switch>
                
           )
    }
}

export default RouterPage
