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
        list:[]
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
    reorder  =  (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);      
        return result;
    };
    handleSortChange=(order, sortable, evt)=>{
        console.log(sortable)
        console.log(evt)
        let sourceIndex=evt.oldIndex,targetIndex=evt.newIndex
        let tmpList=this.deepCopy(this.state.list)        
        if(evt.type === 'add'){
            // 新增组件
            let type=ListConfig[sourceIndex].type    
            propDict[type].id=`a${new Date().getTime()}-${Math.random()}`   
            tmpList.splice(targetIndex,0,propDict[type])    
            this.setState({
                list:tmpList
            })        
        }else if(evt.type === 'update'){            
            tmpList=this.reorder(tmpList,sourceIndex,targetIndex)
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
