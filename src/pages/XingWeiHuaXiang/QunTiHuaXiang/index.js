import React, {Component, Fragment} from 'react';
import {Tabs} from 'antd';
import Filter from "./Filter";
import JiaoXueGuanLi from "./JiaoXueGuanLi";
import XueShengGuanLi from "./XueShengGuanLi";
import YiKaTong from './YiKaTong';
import JiuYeFenXi from "./JiuYeFenXi";
// import {postAction} from 'src/axios';
import './index.module.less';

const TabPane = Tabs.TabPane;

export default class Index extends Component{

	state = {
        filterValue: {},
        tabs:[]
    };
	
	getFilterValue = (filterValue) => {
		this.setState({filterValue})
	}
    
    componentDidMount() {
        this.setState({
            tabs: [
                {name: "教学管理", id: 111},
                {name: "学生管理", id: 112},
                {name: "一卡通", id: 113},
                {name: "就业分析", id: 114}
            ]
        })

        // const userinfo=JSON.parse(getLocal('userInfo'));
        // let uid=userinfo.id;
        // let data={
        //     sourceCode:"pc",
        //     menuId:11,
        //     userId:uid            
        // }
        // postAction('/bigdata/system/menu/labelList',data,0,1).then(res=>{
        //    if(res.success){
        //        this.setState({
        //           tabs:res.obj
        //        })
                
        //    }
        // })
    }
    
    getTabs = id => {
        switch(id){
            case 111:
            return <JiaoXueGuanLi filterValue = { this.state.filterValue }/>
            case 112:
            return <XueShengGuanLi filterValue = { this.state.filterValue }/>
            case 113:
            return <YiKaTong filterValue = { this.state.filterValue }/>
            case 114:
            return <JiuYeFenXi filterValue = { this.state.filterValue }/>
            default:
            return null
        }
    }
    
	render () {
        const {tabs}=this.state;
		return (
			<Fragment>
                               <Filter getFilterValue = {this.getFilterValue} />
                <Tabs defaulActiveKey={111}>
                {
                    tabs.map(item=>(
                        <TabPane tab={item.name} key={item.id}>
                            {this.getTabs(item.id)}
                        </TabPane>
                    ))
                }                    
                </Tabs>
			</Fragment>
		)
	}
}
