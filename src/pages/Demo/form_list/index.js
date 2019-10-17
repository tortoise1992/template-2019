import React, { Component } from 'react'
import { Icon } from 'antd'
import Sortable from 'react-sortablejs'
import ListConfig from '../config/list_conf'
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
                <Sortable
                    options={{
                        animation: 150,
                        sort: false,
                        group: {
                            name: 'shared',
                            pull: 'clone',
                            put: false
                        }
                    }}
                    tag="div"
                >
                    {items}
                </Sortable>
            </div>
            
        )
    }
}
