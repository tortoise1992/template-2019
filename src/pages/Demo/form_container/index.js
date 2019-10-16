import React, { Component } from 'react'
import Sortable from 'react-sortablejs'
import ListConfig from '../config/list_conf'
export default class Index extends Component {
    state={
        list:[]
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
                    onChange={(order, sortable, evt) => {
                        let sourceIndex=evt.oldIndex
                        if(evt.type === 'add'){
                            // 新增组件
                            console.log(ListConfig[sourceIndex])
                        }
                        this.setState({
                            list:[111,112]
                        })
                    
                    }}
                >
                    {
                        this.state.list.map((item,index)=><span key={index}>{item}</span>)
                    }
                </Sortable>
            </div>
            
        )
    }
}
