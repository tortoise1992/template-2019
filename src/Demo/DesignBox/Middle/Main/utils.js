let dict={
    "text":{
        "type":"text",
        "title":"拖进来的纯文本组件",
        "data":"1234"
    },
    "input":{
        "type":"input",
        "title":"拖进来的单行输入框组件",
        "data":"1234"
    }
}

export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;
    
    // 根据payload的组件类型插入要展示的组件
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }else{
        let type=payload.type
        itemToAdd=dict[type]
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
};