import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <p className="hero-small">
          LET'S
        </p>

        <h1 className="hero-title">
          WEEKENDMAX
        </h1>

        <p className="hero-description">
          Make every weekend count with award travel, curated itineraries,
          and smart points strategies to help you travel farther for less.
        </p>

        <Link to="/itineraries">
          <button className="hero-button">
            Explore Itineraries →
          </button>
        </Link>

      </div>

    </section>
  );
}