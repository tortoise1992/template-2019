import React from 'react';
import Filter from './Filter';
import {Tabs} from 'antd';
// import { postAction } from "src/axios"
import RenShiXinXi from "./RenShiXinXi"
import KeYanXinXi from "./KeYanXinXi"

import './index.module.less';
const TabPane = Tabs.TabPane

export default class Index extends React.Component {
    state = {
        filterValue: {},
        tabs: []
    }

    componentDidMount() {
        // this.gettabsfromback()
        this.setState({
            tabs: [
                {name: "人事信息", id: 321},
                {name: "科研信息", id: 322},
            ]
        })
    }
    
    getFilterValue = (filterValue) => {
        // console.log(filterValue)
		this.setState({filterValue})
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
            case 321:
            return <RenShiXinXi/>
            case 322:
            return <KeYanXinXi/>
            default:
            return null
        }
    }

    render(){
        const {tabs}=this.state
        return (
            <React.Fragment>
                <Filter getFilterValue = {this.getFilterValue}/>
                <Tabs defaulActiveKey={'321'}
                //  activeKey={'322'}
                >
                    {
                        tabs.map(item=>(
                            <TabPane tab={item.name} key={item.id}>
                                {this.getTabs(item.id)}
                            </TabPane>
                        ))
                    }  
                </Tabs>
            </React.Fragment>
        )
    }
}