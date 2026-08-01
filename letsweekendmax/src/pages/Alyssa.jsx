import "./Alyssa.css";
import { useState, useRef } from "react";


function VideoCard({video, title}) {

    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);


    const togglePlay = () => {

        if(videoRef.current.paused){

            videoRef.current.play();
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
    preload="auto"
    playsInline
    muted={muted}
    loop
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
        title:"Travel Experience"
    },
    {
        video:"/alyssa/2.mp4",
        title:"Hotel Experience"
    },
    {
        video:"/alyssa/3.mp4",
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
        <section className="ugc-hero">

            <div className="hero-overlay">

                <p className="hero-tag">
                    TRAVEL CONTENT CREATOR
                </p>

                <h1>
                    Alyssa To
                </h1>

                <p className="hero-description">
                    Creating cinematic travel content that helps hotels,
                    destinations, and brands inspire their next guests.
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
        <span>@alyssaa.to</span>
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
        <span>@alyssaa.to</span>
    </a>


    <a href="mailto:alyssaxto@gmail.com">

        <img
            src="/mail1.png"
            alt="Email"
        />

        <span>alyssaxto@gmail.com</span>

    </a>

</div>

            </div>

        </section>



        {/* HOTEL PHOTOGRAPHY */}

        <section className="ugc-section">

            <div className="section-header">

                <p>
                    HOTEL CONTENT
                </p>

                <h2>
                    Hotel Photography
                </h2>

                <span>
                    Capturing spaces, details, and experiences that
                    make guests want to book.
                </span>

            </div>



            <div className="photo-grid">

               {hotels.map((hotel,index)=>(

<div
    className="photo-wrapper"
    key={index}
    onClick={()=>setSelectedImage(hotel.image)}
>

<img
    src={hotel.image}
    alt={hotel.caption}
/>

<div className="photo-hover-overlay">
    <p>{hotel.caption}</p>
</div>

</div>

))}

            </div>

        </section>





        {/* TRAVEL TIKTOKS */}

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


<div className="video-grid">

{
tiktoks.map((video,index)=>(

<VideoCard
    key={index}
    video={video.video}
    title={video.title}
/>

))
}

</div>

        </section>





        {/* TRAVEL PHOTOGRAPHY */}

        <section className="ugc-section">

            <div className="section-header">

                <p>
                    DESTINATION CONTENT
                </p>

                <h2>
                    Travel Photography
                </h2>

                <span>
                    Storytelling through landscapes,
                    culture, and unforgettable moments.
                </span>

            </div>



            <div className="travel-grid">

{photography.map((photo,index)=>(

<div 
    className="photo-wrapper"
    key={index}
    onClick={()=>setSelectedImage(photo.image)}
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



{selectedImage && (

<div 
className="photo-modal"
onClick={()=>setSelectedImage(null)}
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