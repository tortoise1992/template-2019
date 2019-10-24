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
// import update from 'immutability-helper'
export default class Index extends Component {
    state={
        list:[],
        order:[]
    }
    getComponent=item=>{
        switch(item.type){
            case 'text':
                return <BaseText item={item}/>;
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
        if(evt.type === 'add'){
            // 新增组件
            let type=ListConfig[sourceIndex].type    
            propDict[type].id=`a${new Date().getTime()}-${Math.random()}`   
            tmpList.splice(targetIndex,0,propDict[type])    
            let order=tmpList.map(item=>item.id)
            this.setState({
                list:tmpList,
                order
            })        
        }else if(evt.type === 'update'){            
            this.setState({
                order
            },()=>{
                // 根据order重新排序list
                let realOrder=this.state.order
                let realList=realOrder.map(item=>{
                    let i=this.state.list.find(inner=>inner.id === item)
                    return i
                })
                this.setState({
                    list:realList
                })
            })
        }
        
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
                                <div className='component-item' key={item.id} data-id={item.id}>
                                    {
                                        this.getComponent(item)
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
