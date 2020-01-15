import React from "react";
import app from "../../config/base";
import NewList from "./MovieList/NewList";
import Carousel from "./Carousel/Carousel";
import MovieReview from "./MovieReview/MovieReview";

// firebase.firestore().collection('favorites').add({
//     title: "hello",
//     description: "pruebecica",
//     default: "no"
// })

const Dashboard = () => {
    return (
        <div>
            <h1>Hey there</h1>
            <NewList></NewList>
            <MovieReview></MovieReview>
            <div className="section-title">Popular</div>
            <div className="list-container-wrapper">
                <div className="list-container">
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                </div>
            </div>
            
            <div className="section-title">My lists</div>
            <div className="picks-container-wrapper">
                <div className="picks-container">
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                </div>
            </div>
            <Carousel />
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard;