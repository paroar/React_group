import React from 'react';
import ListGridItem from './ListGridItem/ListGridItem';
// import { ListProps } from '../CarouselItem';

type ListGridProps = {
    items: {name: string, path: string}[]
}
const ListGrid = (props: ListGridProps) => (
    <div className="list-grid-container">
        <div className="list-images">
            {props.items.map((item) => {
                return <ListGridItem item={item} key={item.name}/>
            })}
        </div>
    </div>
)

export default ListGrid;