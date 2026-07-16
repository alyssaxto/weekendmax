import "./Itineraries.css";
import { Link } from "react-router-dom";

export default function Destinations() {

    const trips = [
        {
            image:"/roatan/11.jpg",
            location:"Roatan",
            points:"30k Capital One",
            season:"Spring",
            region:"Caribbean",
            duration:"4 Days",
            link:"/roatan"
        },
        {
            image:"/iceland.jpg",
            location:"Iceland",
            points:"65k Chase",
            season:"Summer",
            region:"Europe",
            duration:"4 Days",
            link:"/iceland"
        },


        {
            image:"/seattle.jpg",
            location:"Seattle",
            points:"28k United",
            season:"Fall",
            region:"North America",
            duration:"Weekend",
            link:"/filler"
        },

        {
            image:"/puertorico.jpg",
            location:"Puerto Rico",
            points:"18k Venture",
            season:"Winter",
            region:"North America",
            duration:"Weekend",
            link:"/filler"
        },

        {
            image:"/michigan.jpg",
            location:"Michigan",
            points:"18k Venture",
            season:"Winter",
            region:"North America",
            duration:"Weekend",
            link:"/filler"
          },

        {
            image:"/elsalvador.jpg",
            location:"El Salvador",
            points:"18k Venture",
            season:"Winter",
            region:"North America",
            duration:"Weekend",
            link:"/filler"
        }

        
    ];

    return(

        <section className="destinations">

            <div className="destination-header">

                <h1>Explore Our Itineraries</h1>

                <p>
                    Browse destination guides, discover how we booked flights with points and cheap cash deals, and see how we made the most of every adventure.
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

                      <Link to={trip.link}>
    <button>
        View Itinerary →
    </button>
</Link>

                        </div>

                    </div>

                ))}

            </div>
<section className="partner-section">

    <div className="partner-card">

        <img
            src="/stamp.png"
            className="partner-stamp"
            alt="travel stamp"
        />


        <div className="partner-content">

            <span className="partner-tag">
                ✈ WORK WITH US
            </span>


            <h2>
                Want your hotel or destination featured?
            </h2>


            <p>
                We're always looking for unique hotels, boutique stays,
                resorts, and unforgettable weekend destinations to share
                with our audience. If you'd like us to feature your property,
                collaborate on a trip, or create travel content, we'd love
                to hear from you.
            </p>


            <a href="mailto:hello@letsweekendmax.com">

                <button>
                    Contact Us →
                </button>

            </a>

        </div>


        <div className="partner-details">

            <p>
                FEATURED PARTNER
            </p>

            <h3>
                LET'S WEEKENDMAX
            </h3>

            <span>
                TRAVEL • HOTELS • EXPERIENCES
            </span>

        </div>


    </div>

</section>
        </section>

    )

}