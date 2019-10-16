import React, { Component } from 'react'
import Sortable from 'react-sortablejs'
export default class Index extends Component {
    state={
        list:[]
    }
    render() {
        return (
            <Sortable
                options={{
                    group: {
                        name:'shared',
                    },
                    animation: 150           
                                      
                }}
                tag="div"
                onChange={(order, sortable, evt) => {
                    console.log(evt)
                    this.setState({
                        list:[111,112]
                    })
                   
                }}
            >
                {
                    this.state.list.map((item,index)=><span key={index}>{item}</span>)
                }
            </Sortable>
        )
    }
}
