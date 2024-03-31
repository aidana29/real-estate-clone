import React from "react";
import "./Hero.css";
import {HiLocationMarker} from "react-icons/hi"

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
            <div className="flexColStart hero-des">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi et omnis nisi veniam.
              </span>
              <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi et omnis nisi veniam.</span>
            </div>
            <div className="search-bar">
                <HiLocationMarker color="var(--blue)" size="25px"/>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
