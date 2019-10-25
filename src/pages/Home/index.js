import React, { Component } from "react";
import { DragDropContext} from "react-beautiful-dnd";
import Left from './Left'
import Right from './Right'
import Middle from './Middle'
import './index.less'
class Designer extends Component {
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='form-designer'>
                    <Left/>
                    <Middle/>
                    <Right/>
                </div>
            </DragDropContext>
        );
    }
}

export default Designer