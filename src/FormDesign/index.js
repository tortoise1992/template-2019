import React, { Component } from 'react'
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import { Row,Col } from 'antd'
import Left from './Left'
import Middle from './Middle'
import './form.less'
export default class FormDesign extends Component {
    state={
        compList:[{
            id:'comp1',
            type:'input',
            content:'单行输入框',            
        },{
            id:'comp2',
            type:'text',
            content:'多行输入框',
        }]
    }
    changeList=(compList)=>{
        this.setState({
            compList
        })
    }
    render() {
        return (
            <DndProvider backend={HTMLBackend}>
                <Row className='form-design'>
                    <Col span={4} className='left'>
                        <Left
                            compList={this.state.compList}
                            changeList={this.changeList}
                        />
                    </Col>
                    <Col span={20} className='middle'>
                        <Middle 
                            compList={this.state.compList}
                            changeList={this.changeList}
                        />
                    </Col>
                </Row>
                
            </DndProvider>  
        )
    }
}
