import "./Footer.css";

export default function Footer(){

    return(

        <footer className="footer">


            <img 
                src="/stamp.png"
                className="footer-stamp"
                alt="stamp"
            />


            <div className="footer-main">


                <div className="footer-brand">

                    <h2>
                        Let's Weekendmax ✈️
                    </h2>


                    <p>
                        Turning credit card points into
                        unforgettable weekend adventures.
                    </p>



                    <div className="newsletter">

                        <h3>
                            Join the travel postcard ✉️
                        </h3>

                        <p>
                            Get flight deals, points tips,
                            and weekend getaway ideas.
                        </p>


                        <div className="newsletter-input">

                            <input
                                type="email"
                                placeholder="Your email"
                            />

                            <button>
                                Subscribe
                            </button>

                        </div>


                    </div>


                </div>





                <div className="footer-divider"></div>





                <div className="footer-message">


                    <p>
                        Explore
                    </p>


                    <div className="footer-nav">

                        <a href="/">
                            Home
                        </a>

                        <a href="/itineraries">
                            Itineraries
                        </a>

                        <a href="/deals">
                            Flight Deals
                        </a>

                        <a href="/about">
                            About Us
                        </a>

                    </div>



                    <a 
                        className="instagram"
                        href="https://instagram.com/letsweekendmax"
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