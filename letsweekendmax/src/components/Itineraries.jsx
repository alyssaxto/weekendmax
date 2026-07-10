import { Link } from "react-router-dom";
import "./Itineraries.css";

export default function Itinerary(){

    const trips = [
        {
            location:"Iceland",
            points:"45,000 points",
            image:"/iceland.jpg",
            description:"Chasing waterfalls, glaciers, and the northern lights."
        },
        {
            location:"Roatan",
            points:"18,000 points",
            image:"/roatan.jpg",
            description:"A weekend escape for beaches, snorkeling, and relaxation."
        },
        {
            location:"Washington",
            points:"12,000 points",
            image:"/seattle.jpg",
            description:"Coffee shops, mountain views, and city adventures."
        },
        {
            location:"El Salvador",
            points:"10,000 points",
            image:"/elsalvador.jpg",
            description:"A quick weekend getaway using credit card points."
                },
        {
            location:"Puerto Rico",
            points:"10,000 points",
            image:"/puertorico.jpg",
            description:"A quick weekend getaway using credit card points."
                        },
        {
            location:"Michigan",
            points:"10,000 points",
            image:"/michigan.jpg",
            description:"A quick weekend getaway using credit card points."
        }
    ];


    return(

        <section className="itineraries">


            <div className="itinerary-header">


                <div className="itinerary-heading">


                    <div>

                        <h2>
                            Explore Our Itineraries
                        </h2>


                        <p>
                            See where we traveled with our points and how we made the most of our weekend!
                        </p>

                    </div>



                    <Link 
                        to="/Destinations"
                        className="view-all"
                    >
                        View All →
                    </Link>


                </div>


            </div>




            <div className="itinerary-scroll">


                {trips.map((trip,index)=>(


                    <div
                        className="itinerary-card"
                        key={index}
                        style={{
                            backgroundImage:`url(${trip.image})`
                        }}
                    >


                        <div className="itinerary-overlay">


                            <div className="itinerary-info">


                                <div className="itinerary-title">


                                    <h3>
                                        {trip.location}
                                    </h3>


                                    <span>
                                        {trip.points}
                                    </span>


                                </div>


                                <p>
                                    {trip.description}
                                </p>



                                <button>
                                    Read More
                                </button>



                            </div>


                        </div>


                    </div>


                ))}


            </div>


        </section>

    )

}