import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                {/* LEFT */}
                <div className="footer-brand">

                    <h2>Let's Weekendmax</h2>

                    <p>
                        Turning credit card points into
                        unforgettable weekend adventures.
                    </p>

                    <a
                        className="footer-instagram"
                        href="https://instagram.com/letsweekendmax"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/instagram.png"
                            alt="Instagram"
                        />

                        @letsweekendmax
                    </a>

                </div>


                {/* RIGHT */}
                <div className="footer-socials">

                    <p className="footer-social-label">
                        FIND US ONLINE
                    </p>


                    {/* ALYSSA */}

                    <div className="footer-person">

                        <h3>Alyssa</h3>

                        <div className="footer-social-links">

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

                    <div className="footer-person">

                        <h3>Lauren</h3>

                        <div className="footer-social-links">

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


            <div className="footer-bottom">
                © {new Date().getFullYear()} Let's Weekendmax
            </div>

        </footer>
    );
}