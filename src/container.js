import React, { useState } from 'react';
// import Box from './Box';
// import IListData from '../interface/ListData';
// import List from './List';

const boxs = [
    { id: 1, category: 'Apple', bg: 'red' },
    { id: 2, category: 'Banana', bg: 'yellow' },
    { id: 3, category: 'Orange', bg: 'orange' },
    { id: 4, category: 'Grape', bg: 'purple' },
    { id: 5, category: 'Watermelon', bg: 'green' },
    { id: 6, category: 'Peach', bg: 'pink' },
]

const Container = () => {

    const [cardList, setCardList] = useState([]);

    const changeCardList = (list) => {
        setCardList([...list]);
    }

    return (
        <div>
            {
                boxs.map((item) => <Box key={ item.id } {...item} cardList={ cardList } changeCardList={ changeCardList } />)
            }
            <List cardList={ cardList } changeCardList={ changeCardList } />
        </div>
    )
}

export default Container;