import React, { Component } from 'react'
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import { Row,Col } from 'antd'
import Left from './Left'
import Middle from './Middle'
export default class FormDesign extends Component {
    render() {
        return (
            <DndProvider backend={HTMLBackend}>
                <Row>
                    <Col span={4}>
                        <Left/>
                    </Col>
                    <Col span={20}>
                        <Middle/>
                    </Col>
                </Row>
            </DndProvider>  
        )
    }
}
