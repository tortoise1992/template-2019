import React, { Component } from 'react'
import { Card } from 'antd'
import './index.less'
import List from './list'
import Container from './container'
export default class Index extends Component { 
    
    render() {
        
        return (
            <Card title='表单设计器'>
                <List/>
                <Container/>
            </Card>
        );
    }
}
