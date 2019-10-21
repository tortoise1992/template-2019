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
    handleSortChange=(order, sortable, evt)=>{
        let sourceIndex=evt.oldIndex
        if(evt.type === 'add'){
            // 新增组件
            let type=ListConfig[sourceIndex].type
            this.setState({
                list:[...this.state.list,propDict[type]]
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
