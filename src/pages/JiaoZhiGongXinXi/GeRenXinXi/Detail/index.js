import React, { Component } from 'react'
import { Tabs } from 'antd'
import GeRenDangEn from "./GeRenDangEn"
import WoDeJiaoXue from "./WoDeJiaoXue"
import XueShengGuanLi from "./XueShengGuanLi"
import KeYanXinXi from "./KeYanXinXi"
import XinZhengBanGong from "./XinZhengBanGong"
import CaiWuZiChan from './CaiWuZiChan'
import XiaoYuanKa from './XiaoYuanKa';
import '../index.module.less';

// import { postAction } from "src/axios"
const TabPane = Tabs.TabPane


export default class Index extends Component {

    state = {
        tabs: []
    }

    componentDidMount() {
        // this.gettabsfromback()
        this.setState({
            tabs: [
                {name: "个人档案", id: 311},
                {name: "我的教学", id: 312},
                {name: "学生管理", id: 313},
                {name: "科研信息", id: 314},
                {name: "行政办公", id: 315},
                {name: "财务资产", id: 316},
                {name: "校园卡", id: 317},
            ]
        })
    }

    // gettabsfromback(){
    //     const userinfo=JSON.parse(getLocal('userInfo'))
    //     let uid=userinfo.id
    //     let data={
    //         sourceCode:"pc",
    //         menuId:12,
    //         userId:uid
    //     }
    //     postAction('/bigdata/system/menu/labelList',data,0,1).then(res=>{
    //        if(res.success){
    //            this.setState({
    //               tabs:res.obj
    //            })
    //        }
    //     })
    // }

    getTabs = id => {
        switch(id){            
            case 311:
            return <GeRenDangEn/>
            case 312:
            return <WoDeJiaoXue/>
            case 313:
            return <XueShengGuanLi/>
            case 314:
            return <KeYanXinXi/>
            case 315:
            return <XinZhengBanGong/>
            case 316:
            return <CaiWuZiChan/>   
            case 317:
            return <XiaoYuanKa/>   
            default:
            return null
        }
    }

    render() {
        const {tabs}=this.state
        return (
            <Tabs defaulActiveKey={'311'}
            //  activeKey={'314'}
             >
                {
                    tabs.map(item=>(
                        <TabPane tab={item.name} key={item.id}>
                            {this.getTabs(item.id)}
                        </TabPane>
                    ))
                }  
            </Tabs>
        )
    }
}