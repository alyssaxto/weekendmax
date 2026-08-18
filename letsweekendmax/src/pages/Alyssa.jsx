import "./Alyssa.css";
import { useState, useRef } from "react";

const heroImage = "/alyssa/20.jpg";

function VideoCard({ video, poster, title }) {

    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);


    const togglePlay = () => {

        const videoElement = videoRef.current;

        if (!videoElement) return;

        if (videoElement.paused) {

            videoElement.play();
            setPlaying(true);

        } else {

            videoElement.pause();
            setPlaying(false);

        }

    };


    const toggleSound = () => {

        const videoElement = videoRef.current;

        if (!videoElement) return;

        videoElement.muted = !videoElement.muted;

        setMuted(videoElement.muted);

    };


    const fullscreen = () => {

        const videoElement = videoRef.current;

        if (!videoElement) return;

        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        }

    };


    return (

        <div className="portfolio-video-item">

            {/* TITLE ABOVE VIDEO */}

            <h3 className="portfolio-video-title">
                {title}
            </h3>


            {/* VIDEO */}

            <div className="portfolio-video-card">

                <video
                    ref={videoRef}
                    src={video}
                    poster={poster}
                    preload="metadata"
                    muted={muted}
                    loop
                    playsInline
                    onClick={togglePlay}
                />


                {/* PLAY / PAUSE */}

                <div className="portfolio-video-controls">

                    <button
                        className="portfolio-video-play"
                        onClick={togglePlay}
                    >
                        {playing ? "❚❚" : "▶"}
                    </button>

                </div>


                {/* SOUND + FULLSCREEN */}

                <div className="portfolio-video-actions">

                    <button onClick={toggleSound}>
                        {muted ? "🔇" : "🔊"}
                    </button>

                    <button onClick={fullscreen}>
                        ⛶
                    </button>

                </div>

            </div>

        </div>

    );

}


/* =========================
   MAIN PAGE
========================= */

export default function Alyssa() {

    const [selectedImage, setSelectedImage] = useState(null);

    const [hotelLocation, setHotelLocation] = useState("All");

    const [travelLocation, setTravelLocation] = useState("All");


    /* =========================
       HOTEL PHOTOGRAPHY
    ========================= */

    const hotels = [

        {
            image: "/alyssa/1.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/2.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/3.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/4.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },


        {
            image: "/alyssa/6.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/7.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/8.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/6.1.jpg",
            caption: "Hotel Arca",
            location: "Roatan"
        },
               {
            image: "/alyssa/sweden/5.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
               {
            image: "/alyssa/sweden/6.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
               {
            image: "/alyssa/sweden/7.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
               {
            image: "/alyssa/sweden/8.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
       {
            image: "/alyssa/sweden/9.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
               {
            image: "/alyssa/sweden/10.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
               {
            image: "/alyssa/sweden/11.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
    ];


    /* =========================
       VIDEO CONTENT
    ========================= */

    const tiktoks = [

        {
            video: "/alyssa/1.mp4",
            poster: "/alyssa/thum1.png",
            title: "Travel Experience"
        },

        {
            video: "/alyssa/2.mp4",
            poster: "/alyssa/thum2.png",
            title: "Hotel Experience"
        },

        {
            video: "/alyssa/3.mp4",
            poster: "/alyssa/thum3.png",
            title: "Destination Content"
        }

    ];


    /* =========================
       TRAVEL PHOTOGRAPHY
    ========================= */

    const photography = [

        {
            image: "/alyssa/10.jpg",
            caption: "Mountain Landscapes",
            location: "Canada"
        },

        {
            image: "/alyssa/13.jpg",
            caption: "Travel Moments",
            location: "Canada"
        },


        {
            image: "/alyssa/11.jpg",
            caption: "Local Experiences",
            location: "Canada"
        },



        {
            image: "/alyssa/14.jpg",
            caption: "Adventure & Culture",
            location: "Canada"
        },
        {
            image: "/alyssa/12.jpg",
            caption: "Scenic Views",
            location: "Canada"
        },



        {
            image: "/alyssa/16.jpg",
            caption: "Destination Storytelling",
            location: "Canada"
        },
        {
            image: "/alyssa/15.jpg",
            caption: "Hidden Gems",
            location: "Canada"
        },
        {
            image: "/alyssa/17.jpg",
            caption: "Memorable Moments",
            location: "Canada"
        },
               {
            image: "/alyssa/sweden/3.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
        {
            image: "/alyssa/sweden/1.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
        
        {
            image: "/alyssa/sweden/2.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
        
        
 
        
        
        {
            image: "/alyssa/sweden/4.jpg",
            caption: "Memorable Moments",
            location: "Sweden"
        },
        

    ];


    /* =========================
       FILTERS
    ========================= */

    const hotelLocations = [
        "All",
        "Canada",
        "Sweden",
        "Roatan",
    ];


    const travelLocations = [
        "All",
        "Canada",
        "Sweden",
    ];


    const filteredHotels =
        hotelLocation === "All"
            ? hotels
            : hotels.filter(
                hotel =>
                    hotel.location === hotelLocation
            );


    const filteredPhotography =
        travelLocation === "All"
            ? photography
            : photography.filter(
                photo =>
                    photo.location === travelLocation
            );



    return (

        <div className="ugc-page">


            {/* =========================
                HERO
            ========================= */}

            <section
                className="ugc-hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0,0,0,.25),
                            rgba(0,0,0,.25)
                        ),
                        url(${heroImage})
                    `
                }}
            >

                <div className="ugc-hero-content">

                    <p className="hero-tag">
                        TRAVEL CONTENT CREATOR
                    </p>


                    <h1>
                        Alyssa To
                    </h1>


                    <p className="hero-description">
         Creating professional hotel photography, destination TikToks, and authentic content that showcases the full travel experience.
                    </p>


                    <div className="contact-links">

                        <a
                            href="https://instagram.com/alyssaa.to"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/instagram1.png"
                                alt="Instagram"
                            />

                            <span>
                                @alyssaa.to
                            </span>

                        </a>


                        <a
                            href="https://tiktok.com/@alyssaa.to"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/tiktok1.png"
                                alt="TikTok"
                            />

                            <span>
                                @alyssaa.to
                            </span>

                        </a>


                        <a href="mailto:alyssaxto@gmail.com">

                            <img
                                src="/mail1.png"
                                alt="Email"
                            />

                            <span>
                                alyssaxto@gmail.com
                            </span>

                        </a>

                    </div>

                </div>

            </section>



            {/* =========================
                HOTEL PHOTOGRAPHY
            ========================= */}

            <section className="ugc-section">

                <div className="section-header">

                    <p>
                        HOTEL CONTENT
                    </p>


                    <h2>
                        Hotel Photography
                    </h2>


                    <div className="location-filters">

                        {hotelLocations.map((location) => (

                            <button
                                key={location}
                                className={
                                    hotelLocation === location
                                        ? "location-pill active"
                                        : "location-pill"
                                }
                                onClick={() =>
                                    setHotelLocation(location)
                                }
                            >
                                {location}
                            </button>

                        ))}

                    </div>


                    <span>
                        Capturing spaces, details, and experiences
                        that make guests want to book.
                    </span>

                </div>


                <div className="photo-grid">

                    {filteredHotels.map((hotel, index) => (

                        <div
                            className="photo-wrapper"
                            key={index}
                            onClick={() =>
                                setSelectedImage(hotel.image)
                            }
                        >

                            <img
                                src={hotel.image}
                                alt={hotel.caption}
                            />


                            <div className="photo-hover-overlay">

                                <p>
                                    {hotel.caption}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>



            {/* =========================
                TRAVEL TIKTOKS
            ========================= */}

            <section className="ugc-section">

                <div className="section-header">

                    <p>
                        SOCIAL CONTENT
                    </p>


                    <h2>
                        Travel TikToks
                    </h2>


                    <span>
                        Short-form videos designed to inspire,
                        engage, and drive travel decisions.
                    </span>

                </div>

<div className="portfolio-video-grid">

    {tiktoks.map((video, index) => (

        <VideoCard
            key={index}
            video={video.video}
            poster={video.poster}
            title={video.title}
        />

    ))}

</div>

            </section>



            {/* =========================
                TRAVEL PHOTOGRAPHY
            ========================= */}

            <section className="ugc-section">

                <div className="section-header">

                    <p>
                        DESTINATION CONTENT
                    </p>


                    <h2>
                        Travel Photography
                    </h2>


                    <div className="location-filters">

                        {travelLocations.map((location) => (

                            <button
                                key={location}
                                className={
                                    travelLocation === location
                                        ? "location-pill active"
                                        : "location-pill"
                                }
                                onClick={() =>
                                    setTravelLocation(location)
                                }
                            >
                                {location}
                            </button>

                        ))}

                    </div>


                    <span>
                        Storytelling through landscapes,
                        culture, and unforgettable moments.
                    </span>

                </div>


                <div className="travel-grid">

                    {filteredPhotography.map((photo, index) => (

                        <div
                            className="photo-wrapper"
                            key={index}
                            onClick={() =>
                                setSelectedImage(photo.image)
                            }
                        >

                            <img
                                src={photo.image}
                                alt={photo.caption}
                            />


                            <div className="photo-hover-overlay">

                                <p>
                                    {photo.caption}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>



            {/* =========================
                IMAGE MODAL
            ========================= */}

            {selectedImage && (

                <div
                    className="photo-modal"
                    onClick={() =>
                        setSelectedImage(null)
                    }
                >

                    <img
                        src={selectedImage}
                        alt="Expanded travel photo"
                    />

                </div>

            )}

        </div>

    );

}