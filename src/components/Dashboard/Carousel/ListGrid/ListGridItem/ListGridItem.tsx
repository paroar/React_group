import React from 'react';
// import { ListProps } from '../../CarouselItem';
import { FaTimes } from 'react-icons/fa';

type ItemProps = {
    item: {
        name: string,
        path: string
    }
}

const ListGridItem = (props: ItemProps) => {
    console.log("LISTGRIDITEM", props.item.path)
    const path = `https://image.tmdb.org/t/p/w500/${props.item.path}`;
    return (
        <div className="list-grid-item">
            <img src={path} />
            <FaTimes style={{position: 'absolute', color: 'black'}}/>
        </div>
    )
}

export default ListGridItem;