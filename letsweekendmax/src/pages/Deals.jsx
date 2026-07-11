import "./Deals.css";

export default function Deals(){

const deals = [

    {
        destination:"Tokyo",
        route:"Houston (IAH) → Tokyo (NRT)",
        airline:"United Airlines",
        points:"70,000 pts",
        cabin:"Business",
        program:"United MileagePlus",
        image:"/tokyo.jpg"
    },

    {
        destination:"Iceland",
        route:"Houston (IAH) → Reykjavik (KEF)",
        airline:"Icelandair",
        points:"35,000 pts",
        cabin:"Economy",
        program:"Flying Blue",
        image:"/iceland1.jpg"
    },

    {
        destination:"Paris",
        route:"Houston (IAH) → Paris (CDG)",
        airline:"Air France",
        points:"50,000 pts",
        cabin:"Business",
        program:"Flying Blue",
        image:"/paris.png"
    },

    {
        destination:"Roatan",
        route:"Houston (IAH) → Roatan (RTB)",
        airline:"United Airlines",
        points:"18,000 pts",
        cabin:"Economy",
        program:"United MileagePlus",
        image:"/roatan1.jpg"
    }

];

    return(

        <section className="deals">

            <div className="deals-header">

                <h1>Discover Flight Deals</h1>

                <p>
                    Browse some of our favorite award redemptions and see how far your points can take you.
                </p>

            </div>

            <div className="deal-filters">

                <input
                    type="text"
                    placeholder="Search destination..."
                />

                <select>
                    <option>All Programs</option>
                    <option>Chase</option>
                    <option>Capital One</option>
                    <option>Amex</option>
                    <option>Bilt</option>
                </select>

                <select>
                    <option>All Airlines</option>
                    <option>United</option>
                    <option>Delta</option>
                    <option>American</option>
                    <option>Air France</option>
                </select>

                <select>
                    <option>Cabin</option>
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First</option>
                </select>

                <select>
                    <option>Region</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Caribbean</option>
                </select>

            </div>

            <div className="deal-list">

                {deals.map((deal,index)=>(

                    <div className="deal-card" key={index}>

                        <img
                            src={deal.image}
                            alt={deal.destination}
                        />

                        <div className="deal-info">

                            <h2>{deal.destination}</h2>

                            <p>{deal.route}</p>

                            <div className="deal-tags">

                                <span>{deal.airline}</span>

                                <span>{deal.program}</span>

                                <span>{deal.cabin}</span>

                            </div>

                            <div className="deal-bottom">

                                <h3>{deal.points}</h3>

                                <button>
                                    View Deal →
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}