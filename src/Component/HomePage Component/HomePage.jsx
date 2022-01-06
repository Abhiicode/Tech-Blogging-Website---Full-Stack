import React from "react";
import Blogs from "../BlogsContainer/Blogs";
import Navbar from "../Navbar-container/Navbar";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        {/* Search Bar */}
        <div className="input-container">
          <img src="Images\searchLogo.png" alt="searchLogo" id="searchLogo" />
          <input
            type="text"
            placeholder="Search.."
            id="search-container"
          ></input>
        </div>

        {/* Types Container */}
        <div className="types-container">
          <button className="Engineering type-btn">Engineering</button>
          <button className="Traveling type-btn">Travel</button>
          <button className="Foods type-btn">Foods</button>
          <button className="Crypto type-btn">Crypto</button>
          <button className="NFT type-btn">NFT</button>
          <button className="BlockChain type-btn">BlockChain</button>
        </div>

        {/* Blog Container */}
        <div className="blogContainer">
          <Blogs />
        </div>
      </div>
    </>
  );
};

export default HomePage;
