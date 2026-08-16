import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">

            {/* Background Video */}
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay for text readability */}
            <div className="hero-overlay"></div>

            {/* Hero Content */}
            <div className="hero__content">

                <p className="hero-small">
                    LET'S
                </p>

                <h1 className="hero-title">
                    WEEKENDMAX
                </h1>

                <p className="hero-description">
                    Making the most of limited PTO, finding quick getaways,
                    and squeezing every adventure possible out of your 9 to 5.
                </p>

            </div>

        </section>
    );
}