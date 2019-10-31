import React, { Component } from 'react'
import Actions from './Actions'
import Main from './Main'
export default class Middle extends Component {
    render() {
        return (
            <div className='middle design-middle'>
                <Actions/>
                <Main/>
            </div>
        )
    }
}
