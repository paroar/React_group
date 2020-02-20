import React from 'react';
import ListGridItem from './ListGridItem/ListGridItem';
// import { ListProps } from '../CarouselItem';

type ListGridProps = {
    items: {name: string, path: string, id: string}[],
    colId: string
}
const ListGrid = (props: ListGridProps) => (
    
    <div className="list-grid-container">
        <div className="list-images">
            {props.items.map((item) => {
                return <ListGridItem item={item} key={item.id} colId={props.colId}/>
            })}
        </div>
    </div>
)

export default ListGrid;