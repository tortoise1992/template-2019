import React, { Component } from 'react'
import CompList from './CompList'
import TreeView from './TreeView'
export default class Left extends Component {
    render() {
        return (
            <div className='left design-left'>
                <CompList/>
                <TreeView/>
            </div>
        )
    }
}
