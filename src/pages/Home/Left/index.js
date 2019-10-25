import React, { Component } from 'react'
import { Icon } from 'antd'
import uuid from 'uuid/v4'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ListConfig from '../config/list'
export default class Index extends Component {
    state = {
        items: ListConfig
    };
    
    render() { 
        return (
            <Droppable droppableId="droppable"  type="item" isDropDisabled={true}>
                {(provided, snapshot) => (
                    <div 
                        className='form-list'
                        ref={provided.innerRef}
                    >                
                        {
                            this.state.items.map((item,index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <React.Fragment>
                                            <div 
                                                className='item' 
                                                key={index} 
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                            >
                                                <Icon className='icon' type={item.icon}/>
                                                <span className='text'>
                                                    {item.title}
                                                </span>                
                                            </div>
                                            
                                        </React.Fragment>
                                    )}
                                </Draggable>
                            ))
                        }
                        {provided.placeholder}
                    </div>   
                )}
            </Droppable>         
        )
    }
}
