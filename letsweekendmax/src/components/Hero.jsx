export default function Hero(){

return(

<section className="hero">

    <div className="hero-overlay">


        <div className="hero-text">

            <h1>
                Let's<br/>
                Weekendmax
            </h1>


            <p>
                Travel guides, credit card points,
                and weekend adventures.
            </p>


            <button>
                Explore Trips →
            </button>

        </div>



        <div className="postcard">

            <img
                src="/postcard-venice.png"
                alt="Venice postcard"
            />


            <div className="postcard-info">

                <h3>
                    Greetings from Venice 🇮🇹
                </h3>


                <p>
                    48 hours exploring canals,
                    cafes, and hidden streets.
                </p>

            </div>


        </div>


    </div>


</section>

)

}