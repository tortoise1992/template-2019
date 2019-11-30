import React, { Component,Suspense } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import Login from '@/pages/Login'

const Home = React.lazy(() => import('@/pages/Home'))
// 商品目录
const ShangPinFenLei=React.lazy(() => import('@/pages/ShangPinMuLu/ShangPinFenLei'))

//凭证管理
const PingZhengXinZeng=React.lazy(() => import('@/pages/PingZheng/XinZeng'))
const PingZhengChaKan=React.lazy(() => import('@/pages/PingZheng/ChaKan'))
const PingZhengHuiZong=React.lazy(() => import('@/pages/PingZheng/HuiZong'))
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
                                <Route path="/pingzheng/xinzeng" exact component={PingZhengXinZeng}/>
                                <Route path="/pingzheng/chakan" exact component={PingZhengChaKan}/>
                                <Route path="/pingzheng/huizong" exact component={PingZhengHuiZong}/>
                            </Suspense>
                        </BasicLayout> : <Route render={() => <Redirect to="/login"/>}/>)}
                    />
                </Switch>
           )
    }
}

export default RouterPage
