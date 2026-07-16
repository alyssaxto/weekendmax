import { useState } from "react";
import "./ItineraryTemplate.css";

export default function ItineraryTemplate({ trip }) {

    const [selectedPhoto, setSelectedPhoto] = useState(null);


    return (

        <>

        <section className="itinerary-page">


            {/* COVER */}

            <div
                className="itinerary-cover"
                style={{ backgroundImage: `url(${trip.cover})` }}
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



            {/* SUMMARY */}

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

            </div>





            {/* OVERVIEW */}

            <div className="journal-section">

                <h2>
                    The Trip 
                </h2>


                <p className="trip-description">
                    {trip.description}
                </p>

            </div>





            {/* COST BREAKDOWN */}

            <div className="journal-section">

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



{/* HOTEL */}

{trip.hotel && (

    <div className="journal-section">

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
                            alt={`${trip.hotel.name} photo`}
                            onClick={() => setSelectedPhoto(photo)}
                        />

                    ))}

                </div>

            )}

        </div>

    </div>

)}



            {/* DAILY ITINERARY */}

            <div className="journal-section">

                <h2>
                    Itinerary 
                </h2>


                {trip.days.map((day,index)=>(


                    <div
                        className="day-entry"
                        key={index}
                    >


                        <div className="day-header">


                            <span>
                                DAY {index + 1}
                            </span>


                            <h3>
                                {day.title}
                            </h3>


                        </div>


<div className="day-description">

{Array.isArray(day.description) ? (

    day.description.map((paragraph, i)=>(
        <p key={i}>
            {paragraph}
        </p>
    ))

) : (

    <p>
        {day.description}
    </p>

)}

</div>



                        <div className="day-photo-grid">


                            {day.photos.map((photo,i)=>(


                                <img

                                    key={i}

                                    src={photo}

                                    alt={`${trip.destination} Day ${index + 1}`}

                                    onClick={() => setSelectedPhoto(photo)}

                                />


                            ))}


                        </div>



                    </div>


                ))}


            </div>







            {/* WEEKENDMAX TIPS */}

            <div className="tips-card">


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

{/* FINAL VERDICT */}

<div className="journal-section verdict-section">

    <h2>
        Why Roatán is Worth Weekendmaxing 
    </h2>


    <p className="trip-description">
        {trip.verdict}
    </p>

</div>


        </section>





        {/* PHOTO LIGHTBOX */}


        {selectedPhoto && (

            <div

                className="photo-modal"

                onClick={() => setSelectedPhoto(null)}

            >


                <img

                    src={selectedPhoto}

                    alt="Expanded travel photo"

                    onClick={(e)=>e.stopPropagation()}

                />



                <button

                    onClick={() => setSelectedPhoto(null)}

                >

                    ✕

                </button>


            </div>


        )}



        </>

    );

}