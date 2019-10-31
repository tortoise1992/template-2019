import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag} from './utils';


class DesignBox extends Component {
    constructor() {
        super();
        this.state = {
            items1: [
                {
                    id:1,
                    type:'text',
                    name:'纯文本'
                },
                {
                    id:2,
                    type:'input',
                    name:'单行输入框'
                }
            ],
            items2: [

            ]           
        }
    }
    render() {
        return (
            <div className='main'>
                <div>
                    {/* 左侧列表 */}
                    <Container 
                        groupName="1" 
                        behaviour="copy" 
                        getChildPayload={i => this.state.items1[i]} 
                        onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}
                    >
                        {
                            this.state.items1.map((p, i) => {
                                return (
                                    <Draggable key={i}>
                                        <div className="draggable-item">
                                            {p.name}
                                        </div>
                                    </Draggable>
                                );
                            })
                        }
                    </Container>
                </div>
                <div>
                    <Container 
                        groupName="1" 
                        getChildPayload={i => this.state.items2[i]} 
                        onDrop={e => this.setState({ items2: applyDrag(this.state.items2, e) })}
                    >
                        {
                            this.state.items2.map((p, i) => {
                                return (
                                    <Draggable key={i}>
                                        <div className="draggable-item">
                                            {p.title}
                                        </div>
                                    </Draggable>
                                );
                            })
                        }
                    </Container>
                </div>                
            </div>
        );
    }
}



export default DesignBox;