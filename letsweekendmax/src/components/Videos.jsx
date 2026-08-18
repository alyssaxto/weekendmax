import React, { useRef, useState } from "react";
import "./Video.css";

export default function Video() {

    const videos = [
        "/alyssa/1.mp4",
        "/alyssa/stockholm.mp4",
        "/alyssa/nyc.mp4",
        "/alyssa/sweden.mp4",
        "/alyssa/2.mp4",
        "/alyssa/3.mp4"
    ];


    const VideoCard = ({ src }) => {

        const videoRef = useRef(null);

        const [isPlaying, setIsPlaying] = useState(true);
        const [isMuted, setIsMuted] = useState(true);
        const [showControls, setShowControls] = useState(false);


        const togglePlay = () => {

            const video = videoRef.current;

            if (!video) return;

            if (video.paused) {

                video.play();
                setIsPlaying(true);

            } else {

                video.pause();
                setIsPlaying(false);

            }

            // Show controls when clicked
            setShowControls(true);

            // Hide them again after a moment
            setTimeout(() => {
                setShowControls(false);
            }, 1500);
        };


        const toggleMute = (e) => {

            e.stopPropagation();

            const video = videoRef.current;

            if (!video) return;

            video.muted = !video.muted;

            setIsMuted(video.muted);

            setShowControls(true);

            setTimeout(() => {
                setShowControls(false);
            }, 1500);
        };


        return (

            <div
                className={`video-card ${
                    showControls ? "show-controls" : ""
                }`}

                onClick={togglePlay}

                onMouseEnter={() =>
                    setShowControls(true)
                }

                onMouseLeave={() =>
                    setShowControls(false)
                }
            >

                <video
                    ref={videoRef}

                    src={src}

                    autoPlay

                    muted

                    loop

                    playsInline
                />


                <div className="video-controls">

                    <button
                        type="button"
                        className="video-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePlay();
                        }}
                        aria-label={
                            isPlaying
                                ? "Pause video"
                                : "Play video"
                        }
                    >
                        {isPlaying ? "❚❚" : "▶"}
                    </button>


                    <button
                        type="button"
                        className="video-button"
                        onClick={toggleMute}
                        aria-label={
                            isMuted
                                ? "Turn sound on"
                                : "Mute video"
                        }
                    >
                        {isMuted ? "🔇" : "🔊"}
                    </button>

                </div>

            </div>
        );
    };


    return (

        <section className="video-section">

            <div className="video-header">

                <p className="video-label">
                    TRAVEL WITH US
                </p>

                <h2>
                    Weekendmaxxing in action
                </h2>

            </div>


            <div className="video-row">

                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        src={video}
                    />
                ))}

            </div>

        </section>
    );
}