import React, { useEffect, useState } from 'react';
import app from "./../../../config/base";


const Carousel = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchFirebase = async () => {
            const db = app.firestore()
            const data: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = 
            (await db.collection("users/testUser/lists").get());
            //@ts-ignore
            setItems(data.docs.map(doc => 
                doc.data()
            ))
        }        
        fetchFirebase()
    }, [])

    return (
        <ul>
            {items.map(item => (
                //@ts-ignore
                <li key={item.name}>{item.name}</li>
            ))}
        </ul>
    )
}

export default Carousel;