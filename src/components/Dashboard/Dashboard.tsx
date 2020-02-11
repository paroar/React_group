import React, { useEffect, useState } from "react";
import app from "../../config/base";
import NewList from "./MovieList/NewList";
import Carousel from "./Carousel/Carousel";
import MovieReview from "./MovieReview/MovieReview";
import Submenu from "./Submenu/Submenu";

const Dashboard = () => {
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
        <div>
            <Submenu />
            <div className="section-title">Popular</div>
            <Carousel>
                {items.map(item => (
                    //@ts-ignore
                    <div className="carousel-item" key={item.name}>{item.name}
                        <button>View List</button>
                    </div>
                ))}
                <div className="carousel-item add-list">Create list
                    <NewList></NewList>
                </div>
            </Carousel>
            <MovieReview></MovieReview>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard;