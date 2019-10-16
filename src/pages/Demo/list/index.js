import React, { Component } from 'react'
import Sortable from 'react-sortablejs'
import uniqueId from 'lodash/uniqueId'
export default class Index extends Component {
    state = {
        items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
    };
    componentDidMount() {
        console.log(uniqueId())
    }
    
    render() {
        
        const items = this.state.items.map(val => (<li key={uniqueId()} data-id={val}>{val}</li>));
        return (
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
                tag="ul"
            >
                {items}
            </Sortable>
        )
    }
}
