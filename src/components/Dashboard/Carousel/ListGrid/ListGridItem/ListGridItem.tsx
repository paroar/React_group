import React from 'react';
// import { ListProps } from '../../CarouselItem';
import { FaTrash } from 'react-icons/fa';
import firebase from './../../../../../config/base';

type ItemProps = {
    item: {
        name: string,
        path: string,
        id: string
    },
    colId: string
}
const deleteMovie = (e: any, id: string, colId: string) => {
    e.preventDefault();
    if (colId && id){
        firebase.firestore()
        .collection("users/testUser/lists")
        .doc(colId)
        .collection('movies')
        .doc(`${id}`)
        .delete()    
    }
}

const ListGridItem = (props: ItemProps) => {
    console.log("LISTGRIDITEM", props.item.path)
    const path = `https://image.tmdb.org/t/p/w500/${props.item.path}`;
    console.log(props.item)

    return (
        <div className="list-grid-item">
            <img src={path} />
            <FaTrash size={'1.8rem'} color={'#c32a2a'} className="list-grid-icon" onClick={(e: any) => deleteMovie(e, props.item.id, props.colId)}/>
        </div>
    )
}

export default ListGridItem;