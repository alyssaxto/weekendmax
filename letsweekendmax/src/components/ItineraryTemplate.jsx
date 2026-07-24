import { useState } from "react";
import "./ItineraryTemplate.css";

export default function ItineraryTemplate({ trip }) {

    const [selectedPhoto, setSelectedPhoto] = useState(null);
const closeNav = () => setNavOpen(false);
const [navOpen, setNavOpen] = useState(true);
    return (

        <>

        <section className="itinerary-page">


            {/* ================= TRIP NAV ================= */}

<nav className={`trip-nav ${navOpen ? "open" : ""}`}>

    <button
        className="nav-toggle"
        onClick={() => setNavOpen(!navOpen)}
    >
        ✈
    </button>


    <h3>
        ✈ Trip Passport
    </h3>


    <a href="#overview" onClick={closeNav}>
        The Trip
    </a>


    <a href="#cost" onClick={closeNav}>
        Cost Breakdown
    </a>


    {trip.hotel && (

        <a href="#hotel" onClick={closeNav}>
            Where We Stayed
        </a>

    )}


    <a href="#itinerary" onClick={closeNav}>
        Itinerary
    </a>



    {trip.days.map((day,index)=>(

        <a
            key={index}
            href={`#day-${index+1}`}
            className="day-link"
            onClick={closeNav}
        >

            Day {index+1}: {day.title}

        </a>

    ))}



    <a href="#tips" onClick={closeNav}>
        ✨ Weekendmax Tips
    </a>



    <a href="#verdict" onClick={closeNav}>
        📝 Final Thoughts
    </a>


</nav>




            {/* ================= COVER ================= */}


            <div
                className="itinerary-cover"
                style={{
                    backgroundImage:`url(${trip.cover})`
                }}
            >

                <div className="cover-overlay">

                    <p>
                        TRAVEL JOURNAL
                    </p>


                    <h1>
                        {trip.destination}
                    </h1>


                    <span>
                        {trip.duration} • {trip.season}
                    </span>


                </div>


            </div>



{/* ================= SUMMARY ================= */}

<div className="trip-summary">


    <div>

        <label>
            Total Cost
        </label>

        <h2>
            {trip.totalCost}
        </h2>

    </div>



    <div>

        <label>
            Points Used
        </label>

        <h2>
            {trip.points}
        </h2>

    </div>



    <div>

        <label>
            Travelers
        </label>

        <h2>
            {trip.travelers}
        </h2>

    </div>

{trip.flightLink && (

    <a
        href={trip.flightLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flight-icon flight-deal"
    >
        ✈
    </a>

)}
</div>






            {/* ================= OVERVIEW ================= */}


            <div
                className="journal-section"
                id="overview"
            >

                <h2>
                    The Trip
                </h2>


                <p className="trip-description">
                    {trip.description}
                </p>


            </div>









            {/* ================= COST ================= */}


            <div
                className="journal-section"
                id="cost"
            >


                <h2>
                    Cost Breakdown
                </h2>



                <div className="cost-grid">


                    {trip.costs.map((item,index)=>(

                        <div
                            className="cost-card"
                            key={index}
                        >

                            <h3>
                                {item.category}
                            </h3>


                            <p>
                                {item.description}
                            </p>


                            <strong>
                                {item.price}
                            </strong>


                        </div>


                    ))}


                </div>


            </div>









            {/* ================= HOTEL ================= */}


            {trip.hotel && (

            <div
                className="journal-section"
                id="hotel"
            >


                <h2>
                    Where We Stayed
                </h2>



                <div className="hotel-card">


                    <h3>
                        {trip.hotel.name}
                    </h3>



                    <p>
                        {trip.hotel.description}
                    </p>




                    {trip.hotel.photos && (

                        <div className="hotel-photo-grid">


                            {trip.hotel.photos.map((photo,index)=>(

                                <img
                                    key={index}
                                    src={photo}
                                    alt="hotel"
                                    onClick={() =>
                                        setSelectedPhoto(photo)
                                    }
                                />

                            ))}


                        </div>

                    )}



                </div>


            </div>

            )}











            {/* ================= ITINERARY ================= */}



            <div
                className="journal-section"
                id="itinerary"
            >


                <h2>
                    Itinerary
                </h2>



                {trip.days.map((day,index)=>(


                    <div
                        className="day-entry"
                        id={`day-${index+1}`}
                        key={index}
                    >



                        <div className="day-header">


                            <span>
                                DAY {index+1}
                            </span>



                            <h3>
                                {day.title}
                            </h3>



                        </div>





                        <div className="day-description">


                            {Array.isArray(day.description)

                            ?

                            day.description.map((text,i)=>(

                                <p key={i}>
                                    {text}
                                </p>

                            ))

                            :

                            <p>
                                {day.description}
                            </p>

                            }


                        </div>

<div className="day-photo-grid">

    {day.photos.map((photo,i)=>{

        const imageSrc = typeof photo === "string"
            ? photo
            : photo.src;


        const overlayText = typeof photo === "object"
            ? photo.overlayText
            : null;


        return (

            <div
                className="photo-wrapper"
                key={i}
                onClick={() =>
                    setSelectedPhoto(imageSrc)
                }
            >

                <img
                    src={imageSrc}
                    alt={`${trip.destination} day ${index+1}`}
                />


                {overlayText && (

                    <div className="photo-hover-overlay">

                        <p>
                            {overlayText}
                        </p>

                    </div>

                )}

            </div>

        );

    })}

</div>



                    </div>


                ))}



            </div>









            {/* ================= TIPS ================= */}



            <div
                className="tips-card"
                id="tips"
            >


                <h2>
                    Weekendmax Tips
                </h2>



                <ul>

                {trip.tips.map((tip,index)=>(

                    <li key={index}>
                        {tip}
                    </li>

                ))}


                </ul>


            </div>









            {/* ================= VERDICT ================= */}



            <div
                className="journal-section verdict-section"
                id="verdict"
            >

                <h2>
                    Why {trip.destination} is Worth Weekendmaxing
                </h2>


                <p className="trip-description">
                    {trip.verdict}
                </p>


            </div>






        </section>









        {/* ================= LIGHTBOX ================= */}



        {selectedPhoto && (

            <div
                className="photo-modal"
                onClick={() => setSelectedPhoto(null)}
            >

                <img
                    src={selectedPhoto}
                    alt="expanded"
                    onClick={(e)=>e.stopPropagation()}
                />


                <button>
                    ✕
                </button>


            </div>

        )}



        </>

    );

}