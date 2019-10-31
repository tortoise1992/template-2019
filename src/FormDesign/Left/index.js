import React, { useState } from 'react'
import DragItem from './item'
const Index=(props)=> {    
    const [list,]=useState([{
        type:'text',
        title:'文本'
    },{
        type:'input',
        title:'单行输入框'
    },{
        type:'textarea',
        title:'多行输入框'
    }])
    return (
        <React.Fragment>
            {
                list.map((item,index)=>{
                    return <DragItem 
                    changeList={props.changeList}
                    compList={props.compList} 
                    item={item} 
                    key={index}/>
                })
            }
        </React.Fragment>
    )
    
}

export default Index