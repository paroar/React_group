import React from "react";
import app from "../../config/base";
import firebase from "firebase";
import NewList from "./MovieList/NewList";

// firebase.firestore().collection('favorites').add({
//     title: "hello",
//     description: "pruebecica",
//     default: "no"
// })

firebase.firestore().collection('favorites').where("title", "==", "hello")

const Dashboard = () => {
    return (
        <div>
            <h1>Hey there</h1>
            <NewList></NewList>
            <div className="list-container">

            </div>
            <div className="picks-container"></div>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard;