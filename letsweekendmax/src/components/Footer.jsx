import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-brand">
                    <img
                        src="/stamp.png"
                        className="footer-stamp"
                        alt="stamp"
                    />

                    <h2>Let's Weekendmax</h2>

                    <p>
                        Turning credit card points into
                        unforgettable weekend adventures.
                    </p>
                </div>


                <div className="footer-message">

                    <h3>Explore</h3>

                    <div className="footer-nav">
                        <a href="/">Home</a>
                        <a href="/itineraries">Itineraries</a>
                        <a href="/flightdeals">Flight Deals</a>
                        <a href="/about">About Us</a>
                    </div>

                    <a
                        className="instagram"
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

            </div>


            <div className="footer-bottom">
                © {new Date().getFullYear()} Let's Weekendmax
            </div>

        </footer>
    );
}