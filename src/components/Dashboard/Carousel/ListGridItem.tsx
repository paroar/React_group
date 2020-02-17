import React from 'react';

type ItemProps = {
    path?: string
}

const ListGridItem = (props: ItemProps) => (
    <div className="list-grid-item" style={{
        background: props.path
    }} />
)

export default ListGridItem;