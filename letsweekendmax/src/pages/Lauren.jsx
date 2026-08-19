import "./Alyssa.css";
import { useState, useRef } from "react";
const heroImage = "/lauren.jpg";

function VideoCard({ video, poster, title }) {
    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);

const togglePlay = () => {
    if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.play();
        setMuted(false);
        setPlaying(true);
    } else {
        videoRef.current.pause();
        setPlaying(false);
    }
};

    const toggleSound = () => {

        videoRef.current.muted = !videoRef.current.muted;

        setMuted(videoRef.current.muted);

        // automatically play when sound is enabled
        if(videoRef.current.muted === false){

            videoRef.current.play();
            setPlaying(true);

        }

    };


    const fullscreen = () => {

        if(videoRef.current.requestFullscreen){

            videoRef.current.requestFullscreen();

        }

    };


return (

<div className="video-card">

    <h3 className="video-title">
        {title}
    </h3>


<video
    ref={videoRef}
    src={video}
    poster={poster}
    preload="metadata"
    muted={muted}
    loop
    playsInline
/>

    <div className="video-controls">

        <button
            className="play-button"
            onClick={togglePlay}
        >

            {playing ? "❚❚" : "▶"}

        </button>

    </div>



    <div className="video-actions">

        <button onClick={toggleSound}>

            {muted ? "🔇" : "🔊"}

        </button>


        <button onClick={fullscreen}>

            ⛶

        </button>

    </div>


</div>

);

}

export default function Alyssa() {
const [selectedImage,setSelectedImage] = useState(null);

const hotels = [
    {
        image: "/alyssa/1.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/2.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/3.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/4.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/5.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/6.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/7.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/8.jpg",
        caption: "Canadian Rockies Chalets"
    },
    {
        image: "/alyssa/6.1.jpg",
        caption: "Hotel Arca"
    }
];

const tiktoks = [
    {
        video:"/alyssa/1.mp4",
        poster: "/alyssa/thum1.png",

        title:"Travel Experience"
    },
    {
        video:"/alyssa/2.mp4",
                poster: "/alyssa/thum2.png",

        title:"Hotel Experience"
    },
    {
        video:"/alyssa/3.mp4",
                poster: "/alyssa/thum3.png",

        title:"Destination Content"
    }
];


const photography = [
    {
        image:"/alyssa/10.jpg",
        caption:"Mountain Landscapes"
    },
    {
        image:"/alyssa/9.jpg",
        caption:"Exploring New Destinations"
    },
    {
        image:"/alyssa/11.jpg",
        caption:"Local Experiences"
    },
    {
        image:"/alyssa/13.jpg",
        caption:"Travel Moments"
    },
    {
        image:"/alyssa/12.jpg",
        caption:"Scenic Views"
    },
    {
        image:"/alyssa/14.jpg",
        caption:"Adventure & Culture"
    },
    {
        image:"/alyssa/15.jpg",
        caption:"Hidden Gems"
    },
    {
        image:"/alyssa/16.jpg",
        caption:"Destination Storytelling"
    },
    {
        image:"/alyssa/17.jpg",
        caption:"Memorable Moments"
    }
];
    return (

    <div className="ugc-page">


        {/* HERO */}
<section
    className="ugc-hero"
    style={{
        backgroundImage: `linear-gradient(
            rgba(0,0,0,.25),
            rgba(0,0,0,.25)
        ), url(${heroImage})`
    }}
>

<div className="ugc-hero-content">

                <p className="hero-tag">
                    TRAVEL CONTENT CREATOR
                </p>

                <h1>
                    Lauren Hower
                </h1>

                <p className="hero-description">
                    Creating cinematic travel content that helps hotels,
                    destinations, and brands inspire their next guests.
                </p>


<div className="contact-links">

    <a
        href="https://instagram.com/laurenhower"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            src="/instagram1.png"
            alt="Instagram"
        />
        <span>@laurenhower</span>
    </a>


    <a
        href="https://tiktok.com/@laurenhowerr"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            src="/tiktok1.png"
            alt="TikTok"
        />
        <span>@laurenhowerr</span>
    </a>


    <a href="mailto:lauren.hower.lh@gmail.com">

        <img
            src="/mail1.png"
            alt="Email"
        />

        <span>lauren.hower.lh@gmail.com</span>

    </a>

</div>

            </div>

        </section>


    </div>

    );
}