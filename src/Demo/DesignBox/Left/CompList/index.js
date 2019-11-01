import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd';
export default class CompList extends Component {
    state = {
        list: [{
            id: '1',
            group: '容器',
            children: [
                {
                    id: '11',
                    type: 'layout',
                    title: '布局'
                },
                {
                    id: '12',
                    type: 'col',
                    title: '栅格'
                },
                {
                    id: '13',
                    type: 'text',
                    title: '纯文本'
                }
            ]
        }, {
            id: '2',
            group: '表单控件',
            children: [
                {
                    id: '21',
                    type: 'input',
                    title: '单行输入框'
                },
                {
                    id: '22',
                    type: 'textarea',
                    title: '多行输入框'
                }
            ]
        }]
    }
    render() {
        return (
            <div className='comp-list'>
                {
                    this.state.list.map((item,index) => {
                        return (
                            <div key={index}>
                                <div className='title'>
                                    {item.group}
                                </div>
                                <div className='content'>
                                    {
                                        item.children && item.children.length >0 &&
                                        <Container 
                                            groupName="1" 
                                            behaviour="copy" 
                                            getChildPayload={i => item.children[i]} 
                                        >
                                        {
                                            item.children.map((k,i)=>{
                                                return(
                                                    <Draggable key={i}>
                                                        <div className='item-wrapper'>
                                                            <div className='item'>
                                                                {k.title}
                                                            </div>
                                                        </div>
                                                    </Draggable>
                                                    
                                                )
                                            })
                                        }
                                        </Container>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
