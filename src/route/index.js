import React, { Component,Suspense } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import Login from '@/pages/Login'

const Home = React.lazy(() => import('@/pages/Home'))
// 商品目录
const ShangPinFenLei=React.lazy(() => import('@/pages/ShangPinMuLu/ShangPinFenLei'))
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
                                
                                <Route path="/shangpin/fenlei" exact component={ShangPinFenLei}/>
                            </Suspense>
                        </BasicLayout> : <Route render={() => <Redirect to="/login"/>}/>)}
                    />
                </Switch>
           )
    }
}

export default RouterPage
