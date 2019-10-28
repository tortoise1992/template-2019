import React, { Component } from 'react'
import DragItem from './item'
export default class Index extends Component {
    state={
        list:[
            {
                type:'tyep1',
                title:'组件1'
            },
            {
                type:'tyep2',
                title:'组件2'
            },
            {
                type:'tyep3',
                title:'组件3'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.list.map((item,index)=>{
                        return <DragItem item={item} key={index}/>
                    })
                }
            </React.Fragment>
        )
    }
}
