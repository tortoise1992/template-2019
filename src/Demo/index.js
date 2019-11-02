import React, { Component } from 'react'
import Top from './Top'
import DesignBox from './DesignBox'
import './index.less'
export default class Index extends Component {
    render() {
        return (
            <div className='design-wrapper'>
                <Top/>
                <DesignBox/>
                
            </div>
        )
    }
}
