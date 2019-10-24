import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ServiceCommandUnit from "./inner";
import { static_items } from "./data";
import Left from './Left'
import Right from './Right'
import './index.less'
const grid = 0;
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};
const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "grey",
    ...draggableStyle
});

const getContainerStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    margin: '0 10px',
    width: '100%',
    flex:1
});

class Designer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: static_items
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        console.log(result);
        console.log("innner drag");
        if (!result.destination) {
            return;
        }
        const sourceIndex = result.source.index;
        const destIndex = result.destination.index;
        if (result.type === "droppableItem") {
            const items = reorder(this.state.items, sourceIndex, destIndex);

            this.setState({
                items
            });
        } else if (result.type === "droppableSubItem") {
            const itemSubItemMap = this.state.items.reduce((acc, item) => {
                acc[item.id] = item.subItems;
                return acc;
            }, {});

            const sourceParentId = parseInt(result.source.droppableId);
            const destParentId = parseInt(result.destination.droppableId);

            const sourceSubItems = itemSubItemMap[sourceParentId];
            const destSubItems = itemSubItemMap[destParentId];

            let newItems = [...this.state.items];

            /** In this case subItems are reOrdered inside same Parent */
            if (sourceParentId === destParentId) {
                const reorderedSubItems = reorder(
                    sourceSubItems,
                    sourceIndex,
                    destIndex
                );
                newItems = newItems.map(item => {
                    if (item.id === sourceParentId) {
                        item.subItems = reorderedSubItems;
                    }
                    return item;
                });
                this.setState({
                    items: newItems
                });
            } else {
                let newSourceSubItems = [...sourceSubItems];
                const [draggedItem] = newSourceSubItems.splice(sourceIndex, 1);

                let newDestSubItems = [...destSubItems];
                newDestSubItems.splice(destIndex, 0, draggedItem);
                newItems = newItems.map(item => {
                    if (item.id === sourceParentId) {
                        item.subItems = newSourceSubItems;
                    } else if (item.id === destParentId) {
                        item.subItems = newDestSubItems;
                    }
                    return item;
                });
                this.setState({
                    items: newItems
                });
            }
        }
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='form-designer'>
                    <Left/>
                    <Droppable droppableId="droppable" type="droppableItem">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getContainerStyle(snapshot.isDraggingOver)}
                            >
                                {this.state.items.map((item, index) => (
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
                                                            display: "inline-block",
                                                            margin: "0 10px",
                                                            border: "1px solid #000"
                                                        }}
                                                    >
                                                        Drag
                                                    </span>
                                                    <ServiceCommandUnit
                                                        subItems={item.subItems}
                                                        type={item.id}
                                                    />
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
                    <Right/>
                </div>
            </DragDropContext>
        );
    }
}

export default Designer