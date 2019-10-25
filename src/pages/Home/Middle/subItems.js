import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    display: "inline-flex",
    width: "120px",
    background: isDragging ? "lightgreen" : "grey",
    margin: "0 10px 10px 0",
    border: "1px solid grey",
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    margin: "10px 0"
});

export default class SubItems extends React.Component {   
    render() {
        return (
            <Droppable droppableId={this.props.type} type={`droppableSubItem`}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {this.props.subItems.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div>
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            {item.content}
                                            <span
                                                {...provided.dragHandleProps}
                                                style={{
                                                    display: "block",
                                                    margin: "0 10px",
                                                    border: "1px solid #000"
                                                }}
                                            >
                                                Drag
                                            </span>
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}
