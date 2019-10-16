import React, { Component } from 'react'
import { Card } from 'antd'
import './index.less'
import List from './form_list'
import Container from './form_container'
export default class Index extends Component { 
    
    render() {
        
        return (
            <Card title='表单设计器'>
                <div className='form-designer'>
                    <List/>
                    <Container/>
                </div>                
            </Card>
        );
    }
}
