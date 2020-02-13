import React, { useEffect, useState } from "react";
import app from "../../config/base";
import NewList from "./MovieList/NewList";
import Carousel from "./Carousel/Carousel";
import MovieReview from "./MovieReview/MovieReview";
import Submenu from "./Submenu/Submenu";
import CarouselItem from "./Carousel/CarouselItem";

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
                    <CarouselItem list={item} key={item.name}>
                    </CarouselItem>
                ))}
                <div className="carousel-item add-list">
                    <span>Create list</span>
                    <NewList></NewList>
                </div>
            </Carousel>
            <MovieReview></MovieReview>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard;