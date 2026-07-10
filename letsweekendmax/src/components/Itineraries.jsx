import "./Itineraries.css";


const trips = [

    {
        location:"Iceland",
        points:"35,000 points",
        image:"/iceland.jpg",
    },

    {
        location:"Roatan",
        points:"18,000 points",
        image:"/roatan.jpg",
    },

    {
        location:"Washington",
        points:"12,000 points",
        image:"/seattle.jpg",
    },

    {
        location:"Puerto Rico",
        points:"15,000 points",
        image:"/puertorico.jpg",
    },
    {
        location:"El Salvador",
        points:"15,000 points",
        image:"/elsalvador.jpg",
      },
    {
        location:"Michigan",
        points:"15,000 points",
        image:"/michigan.jpg",
    }
];


export default function Itineraries(){

    return (

        <section className="itineraries">


            <div className="itinerary-header">

                <h2>
                    Explore Our Itineraries
                </h2>


                <p>
                    See where we traveled with our points and how we made the most of our weekend!
                </p>

            </div>



            <div className="itinerary-scroll">


                {
                    trips.map((trip,index)=>(

                        <div 
                            className="itinerary-card"
                            key={index}
                        >


                            <img
                                src={trip.image}
                                alt={trip.location}
                            />



                            <div className="itinerary-info">


                                <div className="itinerary-title">


                                    <h3>
                                        {trip.location}
                                    </h3>


                                    <span>
                                        {trip.points}
                                    </span>


                                </div>



                                <button>
                                    Read More
                                </button>


                            </div>


                        </div>

                    ))
                }


            </div>


        </section>

    )

}