import React from 'react'
import {useDrag} from 'react-dnd'
import {Types} from '../types'
export default (props)=> { 
    const {collectProps,drager}=useDrag({
        item:{
            type:Types.BOX
        }
    })   
    return (
        <div className='item' ref={drager}>
            {props.item.title}
        </div>
    )
}
