import React, { useEffect, useState } from "react";
import app from "../config/base";

export const AuthContext = React.createContext({});

export const AuthProvider = (props: {children?: any}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        //@ts-ignore
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

