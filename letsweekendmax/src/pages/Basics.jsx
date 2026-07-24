import { useState } from "react";
import "./Basics.css";


export default function LearnBasics(){

    const [open, setOpen] = useState(null);


    const faqs = [
        {
            q:"What is an award flight?",
            a:"An award flight is a flight booked using points or miles directly through an airline's loyalty program instead of through your credit card travel portal."
        },

        {
            q:"What are the benefits of an award flight?",
            a:"Credit card portals usually value points around 1–1.5 cents each. Booking directly with airlines can sometimes give you significantly higher value."
        },

        {
            q:"What is considered a good redemption?",
            a:"A redemption above 1.5 cents per point is generally considered good. The higher the value, the more your points are working for you."
        },

        {
            q:"How do you calculate your credit card point redemption?",
            a:"Use our calculator or this formula:\n\n(Cash Price ÷ Points Used) × 100 = Value Per Point"
        },

        {
            q:"How do you find a good redemption?",
            a:"• Look at airline hubs\n• Be flexible with timing\n• Check early, check late, and check often\n• Don't be afraid to reposition"
        },

        {
            q:"What is repositioning?",
            a:"Repositioning means traveling to another airport to take advantage of a better award flight deal."
        },

        {
            q:"How do you find good award flights?",
            a:"Use award search tools like PointsYeah or Seats.aero, but always verify the flight directly on the airline's website before transferring points."
        },

        {
            q:"How do you book an award flight?",
            a:"Find the flight, confirm availability with the airline, create an airline account, transfer your points, and book. Always allow time for transfers."
        },

        {
            q:"When should you use the portal vs booking an award flight?",
            a:"Compare both options. Sometimes portals are easier, but direct airline bookings often provide better value."
        },

        {
            q:"What are airline alliances?",
            a:"Airline alliances allow partner airlines to share benefits and award availability. Examples include United partners like Air Canada and Turkish Airlines."
        },

        {
            q:"Why should I check the airline website?",
            a:"Award search engines do not always show every available flight. Searching directly with airlines can uncover additional options."
        },

        {
            q:"What should I know before transferring points?",
            a:"Create loyalty accounts early, check transfer times, and make sure the award seat is available before moving points."
        }
    ];


    const resources = [
        {
            title:"Points Calculator",
            text:"Calculate how much value you are getting from your points before booking."
        },

        {
            title:"Award Search Tools",
            text:"Find available award flights using tools that search across airline programs."
        },

        {
            title:"Airline Transfer Partners",
            text:"Learn which credit card points transfer to which airline programs."
        }
    ];


return(

<section className="learn-page">


    <div className="learn-header">

        <span>
            ✈ TRAVEL SCHOOL
        </span>

        <h1>
            Learn the Basics
        </h1>

        <p>
            Everything you need to know about booking award flights,
            maximizing points, and turning everyday spending into travel.
        </p>

    </div>



    <div className="faq-header">

        <h2>
            Learn the Basics
        </h2>

        <p>
            New to award travel? Learn how credit card points work,
            how to find flights, and how to maximize your redemptions.
        </p>

    </div>



    <div className="faq-grid">

        {faqs.map((item,index)=>(

            <div
                className={`faq-item ${open === index ? "open":""}`}
                key={index}
            >

                <button
                    className="faq-question"
                    onClick={() =>
                        setOpen(open === index ? null : index)
                    }
                >

                    <span>
                        {item.q}
                    </span>


                    <div className="faq-icon">

                        {open === index ? "−":"+"}

                    </div>

                </button>



                <div className="faq-answer">

                    <p>
                        {item.a}
                    </p>

                </div>

            </div>

        ))}

    </div>



    <div className="learning-resources">

        {
            resources.map((item,index)=>(

                <div 
                    className="resource-card" 
                    key={index}
                >

                    <h2>
                        {item.title}
                    </h2>


                    <p>
                        {item.text}
                    </p>


                    <button>
                        Explore →
                    </button>

                </div>

            ))
        }

    </div>


</section>

)

}