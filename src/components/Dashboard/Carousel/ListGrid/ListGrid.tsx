import React from 'react';
import ListGridItem from './ListGridItem/ListGridItem';
import { ListProps } from '../CarouselItem';

type ListGridProps = {
    items: ListProps[]
}
const ListGrid = (props: ListGridProps) => (
    <div className="list-grid-wrapper">
        <div className="list-grid-container">
            <div className="list-images">
                {props.items.map(item => {
                    <ListGridItem path={item.path} />
                })}
            </div>
            <button className="view-list-button">View List</button>
        </div>
    </div>
)

export default ListGrid;