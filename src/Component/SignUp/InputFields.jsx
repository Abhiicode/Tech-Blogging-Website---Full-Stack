import React from "react";
import "./InputFields.css";
function InputFields() {
    return (
        <div className="input--container">
            <span className="name-field">
                <input
                    className="input-field-name"
                    type="text"
                    placeholder="Enter Your First Name"
                ></input>
                <input
                    className="input-field-name2"
                    type="text"
                    placeholder="Enter Your Last Name"
                ></input>
            </span>
            <input
                className="input-field"
                type="email"
                placeholder="Enter Your Email"
            ></input>
            <input
                className="input-field"
                type="password"
                placeholder="Enter password"
            ></input>
            <button className="button-40" type="submit">
                Sign up with us!
            </button>
            <button id="google-btn">
                <img
                    src="https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png"
                    alt="googleLogo"
                    id="google-logo"
                />
                Sign Up with Google
            </button>
            <button id="google-btn">
                <img
                    src="https://www.americanexecutivecenters.com/wp-content/uploads/2015/10/LinkedIn-Button.png"
                    alt="linkedInLogo"
                    id="linkedIn-logo"
                />
                Sign Up with LinkedIn
            </button>
        </div>
    );
}
export default InputFields;
