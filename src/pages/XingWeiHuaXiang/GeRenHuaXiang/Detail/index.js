import React, { Component } from 'react'
import { Tabs } from 'antd'
import ZhengTiHuaXiang from "./ZhengTiHuaXiang"
import XueYeChengJi from "./XueYeChengJi"
import YiKaTong from "./YiKaTong"
import TuShuJieYue from "./TuShuJieYue"
import ShangWangQingKuang from "./ShangWangQingKuang"
import JiangChengQingKuang from './JiangChengQingKuang'
import CaiWuXinXi from './CaiWuXinXi';
import JianKangXinXi from './JianKangXinXi';
import GeRenYuJing from './GeRenYuJing';
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
                {name: "整体画像", id: 121},
                {name: "学业成绩", id: 122},
                {name: "一卡通", id: 123},
                {name: "图书借阅", id: 124},
                {name: "上网情况", id: 125},
                {name: "奖惩情况", id: 126},
                {name: "财务信息", id: 127},
                {name: "健康信息", id: 128},
                {name: "个人预警", id: 129}
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
            case 121:
            return <ZhengTiHuaXiang/>
            case 122:
            return <XueYeChengJi/>
            case 123:
            return <YiKaTong/>
            case 124:
            return <TuShuJieYue/>
            case 125:
            return <ShangWangQingKuang/>
            case 126:
            return <JiangChengQingKuang/>   
            case 127:
            return <CaiWuXinXi/>   
            case 128:
            return <JianKangXinXi/>   
            case 129:
            return <GeRenYuJing/>        
            default:
            return null
        }
    }

    render() {
        const {tabs}=this.state
        return (
            <Tabs defaulActiveKey={121}>
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