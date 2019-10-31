import React, { Component } from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'
export default class DesignBox extends Component {
    render() {
        return (
            <div className='bottom'>
                <Left/>
                <Middle/>
                <Right/>
            </div>
        )
    }
}
