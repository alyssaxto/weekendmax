import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">

            {/* Hero Content */}
            <div className="hero__content">

                <p className="hero-small">
                    LET'S
                </p>

                <h1 className="hero-title">
                    WEEKENDMAX
                </h1>

                <p className="hero-description">
                    Making the most of limited PTO, finding quick getaways,
                    and squeezing every adventure possible out of your 9 to 5.
                </p>

                {/* Creator Portfolio Cards */}
                <div className="hero-creators">

                    <Link
                        to="/alyssaxto"
                        className="hero-creator-card"
                    >

                        <img
                            src="/alyssa.jpeg"
                            alt="Alyssa To"
                        />

                        <div className="hero-creator-overlay">

                            <div>
                                <p>TRAVEL UGC</p>

                                <h2>
                                    Alyssa To
                                </h2>
                            </div>

                            <span>
                                View Portfolio →
                            </span>

                        </div>

                    </Link>


                    <Link
                        to="/laurenhower"
                        className="hero-creator-card"
                    >

                        <img
                            src="/lauren.jpg"
                            alt="Lauren Hower"
                        />

                        <div className="hero-creator-overlay">

                            <div>
                                <p>TRAVEL UGC</p>

                                <h2>
                                    Lauren Hower
                                </h2>
                            </div>

                            <span>
                                View Portfolio →
                            </span>

                        </div>

                    </Link>

                </div>

            </div>

        </section>
    );
}