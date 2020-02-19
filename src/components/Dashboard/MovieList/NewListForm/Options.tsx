import React, { useEffect, useState } from 'react';
import firebase from './../../../../config/base';

const Options = () => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const fetchFirebase = async () => {
            const db = firebase.firestore()
            const data: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = 
            (await db.collection("users/testUser/lists").get());
            //@ts-ignore
            setOptions(data.docs.map(doc => 
                doc.data()
            ))
        }        
        fetchFirebase()
    }, [])

    return (
        options.map((op) => {
            //@ts-ignore
            return <option value={op.name} key={op.name}>{op.name}</option>
        })
    )
}

export default Options;