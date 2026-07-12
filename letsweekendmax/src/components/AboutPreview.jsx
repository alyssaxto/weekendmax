import "./abt.css";

export default function AboutPreview(){

return(

<section className="about-preview">


    <div className="ticket">


        <div className="ticket-main">


            <div className="ticket-header">

                <span>
                    WEEKENDMAX AIR ✈
                </span>

                <span>
                    BOARDING PASS
                </span>

            </div>



            <h2>
                We're Alyssa & Lauren 👋
            </h2>



            <p>
                Two friends maximizing weekends
                through travel, points, and creativity.
                Follow along as we turn credit card
                points into unforgettable adventures.
            </p>



            <a href="/about">

                <button className="meet-button">
                    Meet Us →
                </button>

            </a>



            <a 
                className="weekend-instagram"
                href="https://instagram.com/letsweekendmax"
                target="_blank"
                rel="noreferrer"
            >

                <img 
                    src="/instagram.png"
                    alt="Instagram"
                />

                @letsweekendmax

            </a>


        </div>





        <div className="ticket-side">


            <img
                className="stamp-image"
                src="/stamp.png"
                alt="stamp"
            />


            <div className="flight-info">

                <p>
                    DESTINATION
                </p>

                <h3>
                    WEEKEND
                </h3>


                <p>
                    CLASS
                </p>

                <h3>
                    ADVENTURE
                </h3>


            </div>


        </div>



    </div>


</section>

)

}