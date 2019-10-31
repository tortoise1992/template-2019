import React from 'react'
import {useDrag} from 'react-dnd'
import {Types} from '../types'
const Item=(props)=> { 
    const [,drag]=useDrag({
        item:{
            type:Types.BOX,
            tag:props.item.type
        },
        begin(a){
            const useless=props.compList.find(item=>item.id === -1)
            if(!useless){
                props.changeList(
                    [
                        ...props.compList,
                        {
                            id:-1,
                            content:'放这里!!!',
                            type:'text'
                        }
                    ]
                )
            }
        },
        end(i,monitor){
            const uselessIndex = props.compList.findIndex(item=>item.id === -1)
            /**
             * 拖拽结束时，判断是否将拖拽元素放入了目标接收组件中
             *  1、如果是，则使用真正传入的 box 元素代替占位元素
             *  2、如果否，则将占位元素删除
             */
            let item
            switch(monitor.getItem().tag){
                case 'text':
                    item={}
                    break;
                default:
                    item={}
            }
            if (monitor.didDrop()) {
                props.compList.splice(uselessIndex, 1,{});
            } else {
                props.compList.splice(uselessIndex, 1);
            }
            props.changeList(props.compList)
        }
    })   
    return (
        <div className='item' ref={drag}>
            {props.item.title}
        </div>
    )
}

export default Item
