import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const whitePages = [
    "/",
    "/laurenhower",
    "/alyssaxto"
  ];

  const isWhitePage = whitePages.includes(location.pathname);

  return (
    <nav
      className={`navbar ${
        isWhitePage ? "navbar-white" : "navbar-brown"
      }`}
    >

      <div className="navbar__container">

        <div
          className={`navbar__hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>


        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>

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