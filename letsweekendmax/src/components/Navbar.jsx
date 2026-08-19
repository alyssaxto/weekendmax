import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();

    /*
    ========================================
    BROWN NAVBAR PAGES
    ========================================

    Everything else defaults to WHITE.
    */

    const brownPages = [
        "/itineraries",
        "/Basics"
    ];

    /*
    ========================================
    INDIVIDUAL ITINERARY PAGES
    ========================================

    Any page under /itineraries/ will also
    automatically use the brown navbar.
    */

    const isItineraryPage =
        location.pathname.startsWith("/itineraries/");

    const isBrownPage =
        brownPages.includes(location.pathname) ||
        isItineraryPage;


    return (

        <nav
            className={`navbar ${
                isBrownPage
                    ? "navbar-brown"
                    : "navbar-white"
            }`}
        >

            <div className="navbar__container">


                {/* =========================
                    HAMBURGER
                ========================= */}

                <button
                    className={`navbar__hamburger ${
                        menuOpen ? "active" : ""
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >

                    <div></div>
                    <div></div>
                    <div></div>

                </button>


                {/* =========================
                    MENU
                ========================= */}

                <ul
                    className={`navbar__menu ${
                        menuOpen ? "active" : ""
                    }`}
                >

                    <li>
                        <Link
                            to="/"
                            className="navbar__links"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/laurenhower"
                            className="navbar__links"
                            onClick={() => setMenuOpen(false)}
                        >
                            Lauren
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/alyssaxto"
                            className="navbar__links"
                            onClick={() => setMenuOpen(false)}
                        >
                            Alyssa
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/itineraries"
                            className="navbar__links"
                            onClick={() => setMenuOpen(false)}
                        >
                            Itineraries
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/Basics"
                            className="navbar__links"
                            onClick={() => setMenuOpen(false)}
                        >
                            Basics
                        </Link>
                    </li>

                </ul>

            </div>

        </nav>

    );

}