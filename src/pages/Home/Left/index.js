import React, { Component } from 'react'
import { Icon } from 'antd'
import ListConfig from '../config/list'
export default class Index extends Component {
    state = {
        items: ListConfig
    };
    
    render() {        
        const items = this.state.items.map((item,index) => (
            <div className='item' key={index} data-id={index}>
                <Icon className='icon' type={item.icon}/>
                <span className='text'>
                    {item.title}
                </span>                
            </div>
        ));
        return (
            <div className='form-list'>                
                {items}
            </div>            
        )
    }
}
