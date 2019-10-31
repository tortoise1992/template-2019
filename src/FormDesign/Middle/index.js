import React,{useCallback} from 'react'
import {useDrop} from 'react-dnd'
import update from 'immutability-helper'
import {Types} from '../types'
import Item from './item'
export default (props)=> {
    const [, drop ] = useDrop({
        accept: Types.BOX
    });
    const moveItem = useCallback((dragIndex, hoverIndex) => {
        /**
         * 1、如果此时拖拽的组件是 Box 组件，则 dragIndex 为 undefined，则此时修改，则此时修改 cardList 中的占位元素的位置即可
         * 2、如果此时拖拽的组件是 Card 组件，则 dragIndex 不为 undefined，此时替换 dragIndex 和 hoverIndex 位置的元素即可
         */
        if (dragIndex === undefined) {
            const lessIndex = props.compList.findIndex((item) => item.id === -1);
            props.changeList(update(props.compList, {
                $splice: [[lessIndex, 1], [hoverIndex, 0, { bg: "aqua", category: '放这里', id: -1 }]],
            }));
        } else {
            const dragCard = props.compList[dragIndex];
            props.changeList(update(props.compList, {
                $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
            }));
        }
        // eslint-disable-next-line
    }, [props.compList])
    return (
        <div style={{height:'100%'}}  ref={drop} >
            {
                props.compList.map((item,index)=>{
                    return <Item item={item} key={index} moveItem={moveItem} index={index} />
                })
            }
        </div>
        
    )
}
