import { useState } from "react";
import "./Hero.css";

export default function Hero() {

    const [flipped, setFlipped] = useState(false);

    return (

        <section className="hero">

            <div className="hero-overlay">

                <div
                    className={`postcard-container ${flipped ? "clicked" : ""}`}
                    onClick={() => setFlipped(!flipped)}
                >

                    <div className="postcard-flipper">


                        {/* FRONT OF POSTCARD */}
                        <div className="postcard-side postcard-front">

                            <img
                                src="/front.png"
                                alt="Postcard front"
                            />

                        </div>


                        {/* BACK OF POSTCARD */}
                        <div className="postcard-side postcard-back">

                            <img
                                src="/back.png"
                                alt="Postcard back"
                            />

                        </div>


                    </div>

                </div>

            </div>

        </section>

    );

}