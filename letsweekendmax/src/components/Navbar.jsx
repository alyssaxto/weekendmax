import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
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
            <Link to="/" className="navbar__links">
              Home
            </Link>
          </li>

          <li>
            <Link to="/laurenhower" className="navbar__links">
              Lauren
            </Link>
          </li>

          <li>
            <Link to="/alyssaxto" className="navbar__links">
              Alyssa
            </Link>
          </li>

                    <li>
            <Link to="/itineraries" className="navbar__links">
              Itineraries
            </Link>
          </li>

          <li>
            <Link to="/Basics" className="navbar__links">
              Basics
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}