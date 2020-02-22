import React, { Component,Suspense } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import Login from '@/pages/Login'

const Home = React.lazy(() => import('@/pages/Home'))

const XiTongXinXi = React.lazy(() => import('@/pages/XiTong/XiTongXinXi'))
const XiTongJianCe=React.lazy(() => import('@/pages/XiTong/XiTongJianCe'))
const ZuZhiJiGou=React.lazy(() => import('@/pages/XiTong/ZuZhiJiGou'))

// 行为画像
const Quntihuaxiang = React.lazy(() => import ('@/pages/XingWeiHuaXiang/QunTiHuaXiang'));
const Gerenhuaxiang = React.lazy(() => import ('@/pages/XingWeiHuaXiang/GeRenHuaXiang'));
const GerenhuaxiangDetail = React.lazy(() => import ('@/pages/XingWeiHuaXiang/GeRenHuaXiang/Detail'));

// 教职工信息
const GeRenXinXi = React.lazy(() => import ('@/pages/JiaoZhiGongXinXi/GeRenXinXi'));
const GeRenXinXiDetail = React.lazy(() => import ('@/pages/JiaoZhiGongXinXi/GeRenXinXi/Detail'));
const ZongHeFenXi = React.lazy(() => import ('@/pages/JiaoZhiGongXinXi/ZongHeFenXi'));
// 财产资产
const CaiChanZiChan = React.lazy(() => import ('@/pages/CaiChanZiChan'));
// 后勤服务
const HouQinFuWu = React.lazy(() => import ('@/pages/HouQinFuWu'));
// 系统设置
const ZhangHuGuanLi = React.lazy(() => import ('@/pages/XiTongSheZhi/ZhangHuGuanLi'));
const JueSeQuanXianGuanLi = React.lazy(() => import ('@/pages/XiTongSheZhi/JueSeQuanXianGuanLi'));
const CaiDanGuanLi = React.lazy(() => import ('@/pages/XiTongSheZhi/CaiDanGuanLi'));
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
                                
                                <Route path="/xitong/xinxi" exact component={XiTongXinXi}/>
                                <Route path="/xitong/xitongjiance" exact component={XiTongJianCe}/>
                                <Route path="/xitong/zuzhijigou" exact component={ZuZhiJiGou}/>

                                {/* 行为画像 */}
                                    <Route exact path="/main/xingweihuaxiang/quntihuaxiang" component={Quntihuaxiang} />
                                    <Route exact path="/main/xingweihuaxiang/gerenhuaxiang" component={Gerenhuaxiang} />
                                    <Route exact path="/main/xingweihuaxiang/gerenhuaxiang/detail" component={GerenhuaxiangDetail} />

                                    

                                    {/* 教职工信息 */}
                                    <Route exact path="/main/jiaozhigongxinxi/gerenxinxi" component={GeRenXinXi} />
                                    <Route exact path="/main/jiaozhigongxinxi/gerenxinxi/detail" component={GeRenXinXiDetail} />
                                    <Route exact path="/main/jiaozhigongxinxi/zonghefenxi" component={ZongHeFenXi} />

                                    {/* 财产资产 */}
                                    <Route exact path="/main/caichanzichan" component={CaiChanZiChan} />

                                    {/* 后勤服务 */}
                                    <Route exact path="/main/houqinfuwu" component={HouQinFuWu} />

                                    {/* 系统设置 */}
                                    <Route exact path="/main/xitongshezhi/zhanghuguanli" component={ZhangHuGuanLi} />
                                    <Route exact path="/main/xitongshezhi/juesequanxianguanli" component={JueSeQuanXianGuanLi} />
                                    <Route exact path="/main/xitongshezhi/caidanguanli" component={CaiDanGuanLi} />
                            </Suspense>
                        </BasicLayout> : <Route render={() => <Redirect to="/login"/>}/>)}
                    />
                </Switch>
           )
    }
}

export default RouterPage
