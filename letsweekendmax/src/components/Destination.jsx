import "./Destination.css";

const destinations = [
    {
        location: "STOCKHOLM, SWEDEN",
        images: [
            "/alyssa/sweden/4.jpg",
            "/alyssa/sweden/1.jpg",
            "/alyssa/sweden/2.jpg",
            "/alyssa/sweden/5.jpg",
        ],
    },
    {
        location: "BANFF, CANADA",
        images: [
            "/alyssa/13.jpg",
            "/alyssa/9.jpg",
            "/alyssa/14.jpg",
            "/alyssa/16.jpg",
        ],
    },
        {
        location: "ROATAN, HONDURAS",
        images: [
            "/roatan/1.jpg",
            "/roatan/11.jpg",
                        "/roatan/6.1.jpg",
            "/roatan/6.7.jpg",
        ],
    },
];

function DestinationContent() {
    return (
        <section className="destination-content">

            {destinations.map((destination, index) => (
                <div
                    className={`destination-location ${
                        index % 2 === 0
                            ? "destination-location-left"
                            : "destination-location-right"
                    }`}
                    key={destination.location}
                >

                    {/* Location heading */}
                    <div className="destination-location-heading">
                        <span>{destination.location}</span>
                    </div>

                    {/* Image grid */}
                    <div className="destination-image-grid">
                        {destination.images.map((image, imageIndex) => (
                            <div
                                className="destination-image-card"
                                key={imageIndex}
                            >
                                <img
                                    src={image}
                                    alt={`${destination.location} ${imageIndex + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            ))}

        </section>
    );
}

export default DestinationContent;