// components/Banner.js

import React from "react";
import "./Banner.css";
import PoliceBoat from "../media/police_boat.mp4";

const Banner = () => {
    return (
        <div className="banner">
            <video className="banner-video" autoPlay loop muted>
                <source src={PoliceBoat} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="banner-content">
                <h1>Welcome to CyberSecurity Awareness</h1>
                <p>Protect yourself and your data from cyber threats.</p>
            </div>
        </div>
    );
};

export default Banner;
