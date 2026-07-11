import "./Footer.css";

export default function Footer(){

    return(

        <footer className="footer">

            <div className="footer-container">


                <div className="footer-brand">

                    <h2>
                        Let's Weekendmax ✈️
                    </h2>

                    <p>
                        Turning credit card points into unforgettable weekend adventures.
                    </p>

                </div>




                <div className="footer-links">

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




                <div className="footer-social">

                    <a 
                        href="https://instagram.com/letsweekendmax"
                        target="_blank"
                    >
                        ◎ Instagram
                    </a>


                    <a 
                        href="https://www.linkedin.com"
                        target="_blank"
                    >
                        💼 LinkedIn
                    </a>

                </div>


            </div>



            <div className="footer-bottom">

                © {new Date().getFullYear()} Let's Weekendmax. All rights reserved.

            </div>


        </footer>

    );

}