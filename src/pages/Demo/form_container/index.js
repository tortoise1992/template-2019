import React, { Component } from 'react'
import Sortable from 'react-sortablejs'
import ListConfig from '../config/list_conf'
import BaseText from '../form_base/BaseText'
import BaseInput from '../form_base/BaseInput'
import BaseTextarea from '../form_base/BaseTextarea'
import BaseSelect from '../form_base/BaseSelect'
import BaseRadio from '../form_base/BaseRadio'
import BaseCheckbox from '../form_base/BaseCheckbox'
import BaseDate from '../form_base/BaseDate'
import BaseTable from '../form_base/BaseTable'
import propDict from '../config/component_prop'
import update from 'immutability-helper'
export default class Index extends Component {
    state={
        list:[]
    }
    getComponent=type=>{
        switch(type){
            case 'text':
                return <BaseText/>;
            case 'input':
                return <BaseInput/>;
            case 'textarea':
                return <BaseTextarea/>;
            case 'select':
                return <BaseSelect/>;
            case 'radio':
                return <BaseRadio/>;
            case 'checkbox':
                return <BaseCheckbox/>;
            case 'date':
                return <BaseDate/>;
            case 'table':
                return <BaseTable/>;
            default:
                return null
        }
    }
    deepCopy=(data)=>{
        return JSON.parse(JSON.stringify(data))
    }
    handleSortChange=(order, sortable, evt)=>{
        let sourceIndex=evt.oldIndex,targetIndex=evt.newIndex
        let tmpList=this.deepCopy(this.state.list)
        // console.log(evt)
        if(evt.type === 'add'){
            // 新增组件
            let type=ListConfig[sourceIndex].type            
            // 插入到指定的位置
            tmpList.splice(targetIndex,0,propDict[type])            
        }else if(evt.type === 'update'){
            // 移动的时候删除旧位置的组件插入新位置
            let item=tmpList[sourceIndex]            
            // 此处需要判断是往前面拖动还是往后面拖动
            tmpList = update(tmpList, {
                $splice: [[sourceIndex, 1], [targetIndex, 0, item]]
            })
        }
        this.setState({
            list:tmpList
        })
    }
    render() {
        return (
            <div className='form-container'>
                <Sortable
                    options={{
                        group: {
                            name:'shared',
                        },
                        animation: 150           
                                        
                    }}
                    tag="div"
                    onChange={this.handleSortChange}
                >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <div className='component-item' key={index}>
                                    {
                                        this.getComponent(item.type)
                                    }
                                </div>
                            )
                        })
                    }
                </Sortable>
            </div>
            
        )
    }
}
