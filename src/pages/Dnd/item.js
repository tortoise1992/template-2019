import React from 'react'
import { useDrag } from 'react-dnd'

function DraggableComponent(props) {
  const [collectedProps, drag] = useDrag({
    item: { id:1, type:'11' },
    begin(monitor){
        console.log(monitor)
    },
    end(item, monitor){
        console.log(item)
    }
  })
  return <div ref={drag}>我可以拖动，你信吗</div>
}

export default DraggableComponent