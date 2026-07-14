import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero(){

    const [flipped,setFlipped] = useState(false);

    return(
        <section className="hero">

            <div className="hero-scene">
                <img 
                    src="/herobg.png"
                    className="hero-background"
                    alt=""
                />
            </div>


            <div className="hero__content">

                <p className="hero-small">
                    LET'S
                </p>

                <h1 className="hero-title">
                    WEEKENDMAX
                </h1>

                <p className="hero-description">
                    Make every weekend count with award travel, curated itineraries,
                    and smart points strategies to help you travel farther for less.
                </p>

                <Link to="/destinations">
                    <button className="hero-button">
                        Explore Itineraries →
                    </button>
                </Link>


<div className="postcard-wrapper">

    <div 
        className={`postcard ${flipped ? "flipped" : ""}`}
        onClick={()=>setFlipped(!flipped)}
    >

        <div className="postcard-face postcard-front">
            <img 
                src="/front.png" 
                alt="front postcard"
            />
        </div>


        <div className="postcard-face postcard-back">
            <img 
                src="/back.png" 
                alt="back postcard"
            />
        </div>

    </div>

</div>


            </div>

        </section>
    )
}