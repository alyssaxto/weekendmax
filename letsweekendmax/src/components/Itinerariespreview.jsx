import { Link } from "react-router-dom";
import "./Itinerariespreview.css";
import { useRef, useState } from "react";


export default function Itinerary(){


    const sliderRef = useRef(null);


    const [activeCard, setActiveCard] = useState(null);

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);



    const handleMouseDown = (e) => {

        setIsDown(true);

        sliderRef.current.classList.add("dragging");

        setStartX(
            e.pageX - sliderRef.current.offsetLeft
        );

        setScrollLeft(
            sliderRef.current.scrollLeft
        );

    };



    const handleMouseLeave = () => {

        setIsDown(false);

        sliderRef.current.classList.remove("dragging");

    };



    const handleMouseUp = () => {

        setIsDown(false);

        sliderRef.current.classList.remove("dragging");

    };



    const handleMouseMove = (e) => {

        if(!isDown) return;

        e.preventDefault();

        const x = e.pageX - sliderRef.current.offsetLeft;

        const walk = (x - startX) * 1.5;

        sliderRef.current.scrollLeft = scrollLeft - walk;

    };



    const trips = [
        {
            location:"Roatan",
            points:"30,000 points",
            image:"./roatan/11.jpg",
            description:"A weekend escape for beaches, snorkeling, and relaxation.",
            link:"/roatan"
        },

        {
            location:"Iceland",
            points:"45,000 points",
            image:"/iceland.jpg",
            description:"Chasing waterfalls, glaciers, and the northern lights.",
            link:"/iceland"
        },


        {
            location:"Seattle",
            points:"12,000 points",
            image:"/seattle.jpg",
            description:"Coffee shops, mountain views, and city adventures.",
            link:"/filler"
        },


        {
            location:"El Salvador",
            points:"10,000 points",
            image:"/elsalvador.jpg",
            description:"A quick weekend getaway using credit card points.",
            link:"/filler"
        },


        {
            location:"Puerto Rico",
            points:"10,000 points",
            image:"/puertorico.jpg",
            description:"Exploring beaches, food, and tropical adventures.",
            link:"/filler"
        },


        {
            location:"Michigan",
            points:"10,000 points",
            image:"/michigan.jpg",
            description:"A scenic weekend escape filled with nature and views.",
            link:"/filler"
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
                        to="/destinations"
                        className="view-all"
                    >
                        View All →
                    </Link>


                </div>


            </div>





            <div

                className="itinerary-scroll"

                ref={sliderRef}

                onMouseDown={handleMouseDown}

                onMouseLeave={handleMouseLeave}

                onMouseUp={handleMouseUp}

                onMouseMove={handleMouseMove}

            >



            {trips.map((trip,index)=>(


                <div

                    className="itinerary-card"

                    key={index}

                    style={{
                        backgroundImage:`url(${trip.image})`
                    }}


                    onClick={() => 
                        setActiveCard(
                            activeCard === index ? null : index
                        )
                    }

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




                            <Link

                                to={trip.link}

                                onClick={(e)=>e.stopPropagation()}

                            >

                                <button>
                                    Read More →
                                </button>


                            </Link>



                        </div>


                    </div>





                    {activeCard === index && (

                        <div className="itinerary-summary">


                            <h3>
                                {trip.location}
                            </h3>


                            <p>
                                {trip.description}
                            </p>


                            <span>
                                ✈ {trip.points}
                            </span>


                        </div>

                    )}



                </div>


            ))}



            </div>


        </section>

    );

}