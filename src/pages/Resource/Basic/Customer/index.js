import React, { Component } from 'react'
import Filter from './Filter'
import Function from './Function'
import MTable from './Table'
export default class Customer extends Component {
    render() {
        return (
            <div>
                <Filter/>
                <Function/>
                <MTable/>
            </div>
        )
    }
}
