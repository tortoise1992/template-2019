import React, { Component,Suspense } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
// import Login from '@/pages/Login'
const Home = React.lazy(() => import('@/pages/Home'))

const GenerateCommonComponent=React.lazy(() => import('@/pages/GenerateComponent/Common'))
const GenerateEchartComponent=React.lazy(() => import('@/pages/GenerateComponent/Echart'))
const GenerateBizchartComponent=React.lazy(() => import('@/pages/GenerateComponent/BizChart'))
const GenerateCss=React.lazy(() => import('@/pages/GenerateCss'))
class RouterPage extends Component {    
    checkAuth=()=>{
        // return localStorage.getItem('userInfo')
        return true
    }
    componentDidMount() {
        let data={
            "name":"admim",
            "menu":[
                {
                    "_id": "1",
                    "title": "首页",
                    "url": "/home",
                    "icon": "dashboard",
                    "children": []
                },
                {
                    "_id": "2",
                    "title":"组件",
                    "url": "/generate/component",
                    "icon": "setting",
                    "children": [{
                        "_id": "21",
                        "title":"常规组件",
                        "url": "/generate/component/common",
                        "icon": "setting",
                        "children":[]
                    },{
                        "_id": "22",
                        "title":"Echart",
                        "url": "/generate/component/echart",
                        "icon": "setting",
                        "children":[]
                    },{
                        "_id": "23",
                        "title":"BizChart",
                        "url": "/generate/component/bizchart",
                        "icon": "setting",
                        "children":[]
                    }]
                },
                {
                    "_id": "3",
                    "title":"CSS",
                    "url": "/generate/css",
                    "icon": "setting",
                    "children": []
                }
            ]
        }
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    
    render() {     
        
        return (
                <Switch>
                    {/* <Route path="/login" render={props => (this.checkAuth() ? <Redirect to="/"/> : <Login/>)}/>                     */}
                    <Route
                        path="/"
                        render={props => (this.checkAuth() ? <BasicLayout>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                                <Route path="/home" exact component={Home}/>  
                                <Route path="/generate/component/common" exact component={GenerateCommonComponent}/>
                                <Route path="/generate/component/echart" exact component={GenerateEchartComponent}/>
                                <Route path="/generate/component/bizchart" exact component={GenerateBizchartComponent}/>
                                <Route path="/generate/css" exact component={GenerateCss}/>                             
                            </Suspense>
                        </BasicLayout> : <Route render={() => <Redirect to="/login"/>}/>)}
                    />
                </Switch>
                
           )
    }
}

export default RouterPage
