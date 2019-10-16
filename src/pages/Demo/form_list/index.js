import React, { Component } from 'react'
import Sortable from 'react-sortablejs'
import ListConfig from '../config/list_conf'
export default class Index extends Component {
    state = {
        items: ListConfig
    };
    
    render() {        
        const items = this.state.items.map((item,index) => (<div key={index} data-id={index}>{item.title}</div>));
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
