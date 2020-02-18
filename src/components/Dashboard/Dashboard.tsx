import React, { useEffect, useState } from "react";
import app from "../../config/base";
import NewList from "./MovieList/NewList";
import Carousel from "./Carousel/Carousel";
import MovieReview from "./MovieReview/MovieReview";
import Submenu from "./Submenu/Submenu";
import CarouselItem from "./Carousel/CarouselItem";

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const [tours, setTours] = useState([]);

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

    useEffect(() => {
        const fetchFirebase = async () => {
            const db = app.firestore()
            const data: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = 
            (await db.collection("tours").get());
            //@ts-ignore
            setTours(data.docs.map(doc => 
                doc.data()
            ))
        }        
        fetchFirebase()
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div style={{
            backgroundColor: '#222e3c'
        }}>
            <Submenu />
            <div className="section-title">Popular this week</div>
            
            <div className="section-title">My lists</div>
            <Carousel>
                {items.map(item => (
                    //@ts-ignore
                    <CarouselItem list={item} key={item.id} tour={false}>
                    </CarouselItem>
                ))}
                <div className="carousel-item add-list">
                    <span>Create list</span>
                    <button onClick={toggleOpen}>+</button>
                </div>
            </Carousel>
            {<NewList open={isOpen} toggle={toggleOpen}></NewList>}

            <div className="section-title">Tours</div>
            <Carousel>
                {tours.map(tour => (
                    //@ts-ignore
                    <CarouselItem list={tour} key={tour.id} tour={true}>
                    </CarouselItem>
                ))}
                <div className="carousel-item add-list">
                    <span>Create list</span>
                </div>
            </Carousel>
            <MovieReview></MovieReview>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard;