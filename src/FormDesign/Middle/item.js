import React,{useRef} from 'react'
import {useDrag,useDrop} from 'react-dnd'
import { XYCoord } from 'dnd-core'
import {Types} from '../types'
const Item=(props)=> { 
    const ref=useRef(null)
    const [{isDragging},drag]=useDrag({
        item:{
            type:Types.BOX,
            index:props.index
        },
        collect(monitor){
            return{
                isDragging: monitor.isDragging()
            }
        }
    })   
    const [, drop ] = useDrop({
        accept: Types.BOX,
        hover(item, monitor) {
            if (!ref.current) {
				return;
            }
			const dragIndex = item.index;
            const hoverIndex = props.index;
            
            // 拖拽元素下标与鼠标悬浮元素下标一致时，不进行操作
			if (dragIndex === hoverIndex) {
				return;
            }

			// 确定屏幕上矩形范围
			const hoverBoundingRect = ref.current.getBoundingClientRect();

			// 获取中点垂直坐标
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			// 确定鼠标位置
			const clientOffset = monitor.getClientOffset();

			// 获取距顶部距离
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            /**
             * 只在鼠标越过一半物品高度时执行移动。
             *
             * 当向下拖动时，仅当光标低于50%时才移动。
             * 当向上拖动时，仅当光标在50%以上时才移动。
             *
             * 可以防止鼠标位于元素一半高度时元素抖动的状况
             */

             // 向下拖动
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

            // 向上拖动
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
            }

            // 执行 move 回调函数
            props.moveItem(dragIndex, hoverIndex);

            /**
             * 如果拖拽的组件为 Box，则 dragIndex 为 undefined，此时不对 item 的 index 进行修改
             * 如果拖拽的组件为 Card，则将 hoverIndex 赋值给 item 的 index 属性
             */
            if (item.index !== undefined) {
                item.index = hoverIndex;
            }
        },
    });
    // 使用 drag 和 drop 对 ref 进行包裹，则组件既可以进行拖拽也可以接收拖拽组件
    drag(drop(ref));
    return (
        <div className='item-wrapper' ref={ref}>
            <div className='item'>
                {props.item.content}
            </div>
        </div>
    )
}

export default Item
