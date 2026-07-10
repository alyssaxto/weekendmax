import "./us.css";

export default function About(){

    const creators = [
        {
            name:"Alyssa To",
            image:"/alyssa.jpeg",

            instagram:"https://instagram.com/alyssaa.to",
            linkedin:"https://www.linkedin.com/in/lalyssaxto",
            website:"https://alyssaxto.com",

            bio:
            "Hi! I'm Alyssa, a designer, content creator, and travel lover who loves finding creative ways to make adventures more affordable. I created Let's Weekendmax to share my weekend trips, travel guides, and how I use credit card points to maximize every journey.",

            cards:
            "Capital One Venture X\nUnited Explorer"
        },


        {
            name:"Lauren Hower",
            image:"/lauren.jpeg",

            instagram:"https://instagram.com/lauren.hower",
            linkedin:"https://www.linkedin.com/in/laurenhower",

            bio:
            "Hi! I'm Lauren, a travel enthusiast who loves exploring new destinations and finding smart ways to make trips happen. Together, Alyssa and I share our itineraries, points strategies, and experiences to help others travel more often.",

            cards:
            "Capital One Venture X\nBilt Obsidian\nUnited Explorer\nUnited Quest"
        }
    ];


    return(

        <section className="about-page">

<h1>
What's this website for?
</h1>

<p>
Two friends turning credit card points into unforgettable adventures.
</p>

<a 
href="https://instagram.com/letsweekendmax"
className="brand-instagram"
target="_blank"
>
📷 @letsweekendmax
</a>


<a href="/basics">
<button className="basics-button">
Learn the Basics →
</button>
</a>

            <div className="creator-container">


                {creators.map((creator,index)=>(


                    <div 
                        className="creator-card"
                        key={index}
                    >


                        <div className="creator-image">

                            <img 
                                src={creator.image}
                                alt={creator.name}
                            />

                        </div>





                        <div className="creator-info">


                            <h2>
                                {creator.name}
                            </h2>




                            <p className="bio">
                                {creator.bio}
                            </p>






                            <div className="social-links">


                                <a 
                                    href={creator.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ◎ Instagram
                                </a>




                                <a 
                                    href={creator.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ▣ LinkedIn
                                </a>





                                {creator.website && (

                                    <a
                                        href={creator.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ◌ Website
                                    </a>

                                )}



                            </div>







                            <div className="credit-cards">


                                <h3>
                                    ▤ Credit Cards We Use
                                </h3>



                                <p>
                                    {creator.cards}
                                </p>



                            </div>



                        </div>


                    </div>


                ))}



            </div>


        </section>

    )

}