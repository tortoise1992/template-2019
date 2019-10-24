import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,

    display: "inline-flex",
    width: "120px",

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
    margin: "0 10px 10px 0",
    border: "1px solid grey",
    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    margin: "10px 0"
});

export default class ServiceCommandUnit extends React.Component {
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
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
                                    <div style={{ display: "flex" }}>
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
