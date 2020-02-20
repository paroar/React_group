import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { ListProps } from './CarouselItem';
import ListGrid from './ListGrid/ListGrid';
import firebase from './../../../config/base';

type ContentProps = {
    item: ListProps[],
    id: string,
    name: string,
    description: string,
    close?: any
}

const CarouselContent = (props: ContentProps) => {
    const [elements, setElements] = useState([]);
    const [toCatalogue, setToCatalogue] = useState(false);
    const name = props.name;
    const desc = props.description;

    useEffect(() => {
        const fetchFirebase = async () => {
            const db = firebase.firestore()
            db.collection("users/testUser/lists").doc(props.id).collection('movies').onSnapshot((snapshot) => {
                //@ts-ignore
                setElements(snapshot.docs.map(doc => 
                    doc.data()
                ))
            })
        }        
        fetchFirebase()
    }, [props])

    const handleView = () => (
        setToCatalogue(!toCatalogue)
    )

    return (
        <div className="carousel-content">
            <div className="carousel-content-background">
                <div className="carousel-content-shadow"></div>
                <div className="carousel-content-image">
                </div>

            </div>
            <div className="carousel-content-area">
                <div className="carousel-content-container">
                    <div className="carousel-content-title">
                        {name}
                    </div>
                    <div className="carousel-content-description">
                        {desc}
                    </div>
                    <button onClick={handleView} className={"btn"} style={{marginTop: '2rem', position: 'relative', zIndex: 6}}>Add Films</button>
                </div>
                <ListGrid items={elements} colId={props.id}></ListGrid>
            </div>
            <button className="carousel-content-close" onClick={props.close}>
                <FaTimes size={'2em'}/>
            </button>
            {toCatalogue && <Redirect to={`/catalogue`}/>
}
        </div>
    )
}

export default CarouselContent;
