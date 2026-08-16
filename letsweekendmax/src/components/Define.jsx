import React from "react";
import { Link } from "react-router-dom";
import "./Define.css";

export default function Define() {
    return (
        <section className="define">

            <div className="define-header">
                <p className="section-label">INTERESTED?</p>

                <h2>
                    See our portfolios
                </h2>

                <p className="define-intro">
                    We're travel creators who love turning limited PTO
                    into unforgettable adventures.
                </p>
            </div>


            <div className="creator-grid">

                <Link to="/alyssaxto" className="creator-card">

                    <img
                        src="/alyssa.jpeg"
                        alt="Alyssa To"
                    />

                    <div className="creator-overlay">
                        <div>
                            <p>TRAVEL UGC</p>
                            <h3>Alyssa To</h3>
                        </div>

                        <span>View Portfolio →</span>
                    </div>

                </Link>


                <Link to="/laurenhower" className="creator-card">

                    <img
                        src="/lauren.jpg"
                        alt="Lauren Hower"
                    />

                    <div className="creator-overlay">
                        <div>
                            <p>TRAVEL UGC</p>
                            <h3>Lauren Hower</h3>
                        </div>

                        <span>View Portfolio →</span>
                    </div>

                </Link>

            </div>

<div className="weekendmax-description">

    <h3>How Do You Weekendmax?</h3>

    <p>
  Who says you need two weeks off to go somewhere new? We are all about making the most of limited PTO, finding quick getaways, maximizing long weekends, and squeezing every adventure possible out of your 9 to 5 schedule.
    </p>

</div>

        </section>
    );
}