import "./Destinations.css";

export default function Destinations() {

    const trips = [

        {
            image:"/iceland.jpg",
            location:"Iceland",
            points:"65k Chase",
            season:"Summer",
            region:"Europe",
            duration:"4 Days"
        },

        {
            image:"/roatan.jpg",
            location:"Roatan",
            points:"40k Capital One",
            season:"Spring",
            region:"Caribbean",
            duration:"5 Days"
        },

        {
            image:"/seattle.jpg",
            location:"Seattle",
            points:"28k United",
            season:"Fall",
            region:"North America",
            duration:"Weekend"
        },

        {
            image:"/puertorico.jpg",
            location:"Puerto Rico",
            points:"18k Venture",
            season:"Winter",
            region:"North America",
            duration:"Weekend"
        },

        {
            image:"/michigan.jpg",
            location:"Michigan",
            points:"18k Venture",
            season:"Winter",
            region:"North America",
            duration:"Weekend"
          },

        {
            image:"/elsalvador.jpg",
            location:"El Salvador",
            points:"18k Venture",
            season:"Winter",
            region:"North America",
            duration:"Weekend"
        }

        
    ];

    return(

        <section className="destinations">

            <div className="destination-header">

                <h1>Explore Our Itineraries</h1>

                <p>
                    Browse destination guides, discover how we booked flights with points, and see how we made the most of every adventure.
                </p>

            </div>

            <div className="filters">

                <input
                    type="text"
                    placeholder="Search destinations..."
                />

                <select>
                    <option>All Seasons</option>
                    <option>Spring</option>
                    <option>Summer</option>
                    <option>Fall</option>
                    <option>Winter</option>
                </select>

                <select>
                    <option>All Regions</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Caribbean</option>
                </select>

                <select>
                    <option>All Points Programs</option>
                    <option>Chase</option>
                    <option>Capital One</option>
                    <option>Amex</option>
                    <option>Bilt</option>
                </select>

                <select>
                    <option>Trip Length</option>
                    <option>Weekend</option>
                    <option>4–5 Days</option>
                    <option>One Week</option>
                </select>

            </div>

            <div className="destination-grid">

                {trips.map((trip,index)=>(

                    <div className="trip-card" key={index}>

                        <img
                            src={trip.image}
                            alt={trip.location}
                        />

                        <div className="trip-overlay">

                            <h2>{trip.location}</h2>

                            <div className="trip-details">

                                <span>{trip.points}</span>

                                <span>{trip.duration}</span>

                                <span>{trip.season}</span>

                            </div>

                            <button>
                                View Itinerary →
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}