import React, { Component } from 'react'
import { Card } from 'antd'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Box from './box'
import Item from './item'
export default class Index extends Component {
    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Card title='dnd demo'>
                    <Box/>
                    <Item/>
                </Card>
            </DndProvider>
            
        )
    }
}
