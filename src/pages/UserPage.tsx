import React, { useState } from "react";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignInForm from "../components/SignUp/SignInForm";

const UserPage = () => {
    const [setClass, setClassState] = useState("");

    const toggleClass = () => {
        setClassState(setClass === "" ? "right-panel-active" : "");
    }

    return (
        <div className={`user-container ${setClass}`} id="user-container">
            <SignUpForm />
            <SignInForm />

            <div className="form-overlay-container">
                <div className="form-overlay">
                    <div className="overlay-panel overlay-left">
                        <h2>Already have an account?</h2>
                        <button className="form-overlay-btn" id="signIn" onClick={toggleClass}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h2>Create an account</h2>
                        <button className="form-overlay-btn" id="signUp" onClick={toggleClass}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;