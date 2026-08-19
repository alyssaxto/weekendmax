import React from "react";
import "./Uslol.css";

export default function AboutUs() {
    return (
        <section className="about">

            {/* PHOTO */}
            <div className="about-image">
                <img
                    src="/us.png"
                    alt="Alyssa and Lauren"
                />
            </div>


            {/* CONTENT */}
            <div className="about-content">

                <div className="about-heading">

                    <p className="about-eyebrow">
                        Meet the girls behind
                    </p>

                    <h1>
                        Let's Weekendmax
                    </h1>

                </div>


                <p className="about-intro">
                    We’re Alyssa and Lauren, two friends who love
                    traveling, finding great deals, and making the
                    most out of every vacation day.
                </p>

                <p className="about-intro">
                    We created Let's Weekendmax to help people with
                    9 to 5s travel more without needing endless PTO.
                    From weekend getaways and thoughtfully planned
                    itineraries to credit card points and travel
                    tips, we’re here to make every trip count.
                </p>

                <p className="about-intro">
                    Because you don’t need two weeks off to explore
                    somewhere new. Sometimes, all you need is a
                    long weekend.
                </p>


                {/* SOCIAL LINKS */}

                <div className="about-socials">

                    <p className="social-label">
                        FIND US ONLINE
                    </p>


                    {/* ALYSSA */}

                    <div className="social-person">

                        <h3>
                            Alyssa
                        </h3>

                        <div className="social-links">

                            <a
                                href="https://instagram.com/alyssaa.to"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/instagram.png"
                                    alt=""
                                />
                                Instagram
                            </a>

                            <a
                                href="https://www.tiktok.com/@alyssaa.to"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/tiktok.png"
                                    alt=""
                                />
                                TikTok
                            </a>

                            <a
                                href="https://www.linkedin.com/in/alyssaxto"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/linkedin.png"
                                    alt=""
                                />
                                LinkedIn
                            </a>

                            <a href="/alyssaxto">

                                <img
                                    src="/website.png"
                                    alt=""
                                />

                                Portfolio

                            </a>

                        </div>

                    </div>


                    {/* LAUREN */}

                    <div className="social-person">

                        <h3>
                            Lauren
                        </h3>

                        <div className="social-links">

                            <a
                                href="https://instagram.com/lauren.hower"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/instagram.png"
                                    alt=""
                                />
                                Instagram
                            </a>
                            <a
                                href="https://www.tiktok.com/@laurenhowerr"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/tiktok.png"
                                    alt=""
                                />
                                TikTok
                            </a>
                            <a
                                href="https://www.linkedin.com/in/laurenhower"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/linkedin.png"
                                    alt=""
                                />
                                LinkedIn
                            </a>

                            <a href="/laurenhower">

                                <img
                                    src="/website.png"
                                    alt=""
                                />

                                Portfolio

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}