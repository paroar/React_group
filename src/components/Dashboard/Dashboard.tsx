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
            <div className="list-container">
            </div>
            <div className="picks-container"></div>
            <Carousel />
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard;