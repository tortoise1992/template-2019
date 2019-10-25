import React from 'react'
import { useDrop } from 'react-dnd'
function DropTarget(props) {
  const [collectedProps, drop] = useDrop({
        accept:'test',
  })

  return <div ref={drop}>Drop Target</div>
}

export default DropTarget