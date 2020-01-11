import React from "react";
import app from "./../config/base";

const Admin = () => {
    return (
        <div>
            <h1>Hey there</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Admin;