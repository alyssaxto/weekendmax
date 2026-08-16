import React from "react";
import "./Video.css";

export default function Video() {

    const videos = [
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4",
        "/videos/video4.mp4",
        "/videos/video5.mp4",
        "/videos/video6.mp4"
    ];

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

                    <div
                        className="video-card"
                        key={index}
                    >

                        <video
                            src={video}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                    </div>

                ))}

            </div>

        </section>
    );
}