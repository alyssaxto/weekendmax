import "./ItineraryTemplate.css";

export default function ItineraryTemplate({trip}){

    return(
        <section className="itinerary-page">

            {/* COVER */}
            <div 
                className="itinerary-cover"
                style={{backgroundImage:`url(${trip.cover})`}}
            >
                <div className="cover-overlay">

                    <p>✈ TRAVEL JOURNAL</p>

                    <h1>{trip.destination}</h1>

                    <span>
                        {trip.duration} • {trip.season}
                    </span>

                </div>
            </div>



            {/* SUMMARY */}
            <div className="trip-summary">

                <div>
                    <label>Total Cost</label>
                    <h2>{trip.totalCost}</h2>
                </div>

                <div>
                    <label>Points Used</label>
                    <h2>{trip.points}</h2>
                </div>

                <div>
                    <label>Travelers</label>
                    <h2>{trip.travelers}</h2>
                </div>

            </div>



            {/* OVERVIEW */}
            <div className="journal-section">

                <h2>
                    The Trip ✉️
                </h2>

                <p>
                    {trip.description}
                </p>

            </div>



            {/* COST BREAKDOWN */}
            <div className="journal-section">

                <h2>
                    Cost Breakdown 💳
                </h2>


                <div className="cost-grid">

                    {trip.costs.map((item,index)=>(

                        <div className="cost-card" key={index}>

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




            {/* DAILY ITINERARY */}
            <div className="journal-section">

                <h2>
                    Itinerary 📍
                </h2>


                <div className="timeline">

                    {trip.days.map((day,index)=>(

                        <div className="day-card" key={index}>

                            <span>
                                DAY {index+1}
                            </span>

                            <h3>
                                {day.title}
                            </h3>

                            <p>
                                {day.activities}
                            </p>


                        </div>

                    ))}

                </div>


            </div>





            {/* PHOTO GALLERY */}
            <div className="journal-section">

                <h2>
                    Photo Journal 📸
                </h2>


                <div className="photo-grid">

                    {trip.photos.map((photo,index)=>(

                        <img
                            key={index}
                            src={photo}
                            alt=""
                        />

                    ))}

                </div>


            </div>





            {/* TIPS */}
            <div className="tips-card">

                <h2>
                    Weekendmax Tips ✈️
                </h2>


                <ul>

                {trip.tips.map((tip,index)=>(

                    <li key={index}>
                        {tip}
                    </li>

                ))}

                </ul>


            </div>


        </section>
    )

}