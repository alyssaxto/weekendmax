import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {

    const [flipped, setFlipped] = useState(false);

    return(

        <section className="hero">

            <div
                className={`postcard ${flipped ? "flipped" : ""}`}
                onClick={() => setFlipped(!flipped)}
            >

                {/* FRONT */}

                <div className="postcard-face postcard-front">

                    <div className="stamp">
                        ✈
                    </div>

                    <p className="lets">
                        LET'S
                    </p>

                    <h1>
                        WEEKENDMAX
                    </h1>

                    <p className="caption">
                        Make every weekend count with award travel,
                        curated itineraries, and smart points strategies
                        that help you travel farther for less.
                    </p>

                    <Link to="/itineraries">

                        <button>

                            Explore Itineraries →

                        </button>

                    </Link>

                    <span className="flip-text">

                        Click to flip ↺

                    </span>

                </div>



                {/* BACK */}

                <div className="postcard-face postcard-back">

                    <span className="flip-back">

                        Click to flip back ↺

                    </span>

                </div>

            </div>

        </section>

    )

}