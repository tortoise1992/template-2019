import React, { Component,Fragment } from 'react'
import { Card } from 'antd'
import ATable from './table'

export default class Index extends Component {
    
    
    render() {
        return (
            <Fragment>
                
                <Card 
                    title='登录记录'
                    
                > 
                    <ATable
                    />
                    
                </Card>
            </Fragment>
            
        )
    }
}
