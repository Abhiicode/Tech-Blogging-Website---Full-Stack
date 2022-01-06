import React from "react";
import Heading from "./Heading";
import InputFields from "./InputFields";
import "./App.css";
// import SocialSVG from "./SocialSVG";
// import SocialSVG2 from "./SocialSVG2";
import ImageLeft from "./ImageLeft";
export default function SignUp() {
  return (
    <div className="main-container">
      <div className="left-container">
        <ImageLeft />
      </div>
      <div className="right-container">
        {/* <SocialSVG /> */}
        <Heading />
        <InputFields />
        {/* <SocialSVG2 /> */}
      </div>
    </div>
  )
}
