import "./us.css";

export default function About(){

    const creators = [
        {
            name:"Alyssa To",
            image:"/alyssa.jpeg",

            instagram:"https://instagram.com/alyssaa.to",
            linkedin:"https://www.linkedin.com/in/alyssaxto",
            website:"https://alyssaxto.com",

            bio:
            "Hi! I'm Alyssa, a designer, content creator, and travel lover who loves finding creative ways to make adventures more affordable. I created Let's Weekendmax to share my weekend trips, travel guides, and how I use credit card points to maximize every journey.",

            cards:
            "Capital One Venture X\nUnited Explorer"
        },


        {
            name:"Lauren Hower",
            image:"/lauren.jpg",

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
    rel="noreferrer"
>
    <img 
        src="/instagram.png"
        alt="Instagram"
    />

    @letsweekendmax
</a>

<a href="/basics">
<button className="basics-button">
Learn the Basics →
</button>
</a>
<div className="creator-container">

{creators.map((creator,index)=>(

<div
className="passport"
key={index}
>

<div className="passport-header">

<div className="passport-title">
🛂 PASSPORT
</div>

<div className="passport-country">
UNITED STATES
</div>

</div>


<div className="passport-body">

<div className="passport-photo">

<img
src={creator.image}
alt={creator.name}
/>

<div className="passport-number">
No. 00{index + 1}84725
</div>

</div>


<div className="passport-info">

<div className="field">

<span>NAME</span>

<h2>{creator.name}</h2>

</div>

<div className="field">

<span>ABOUT</span>

<p className="bio">
{creator.bio}
</p>

</div>


<div className="passport-grid">

<div className="credential-box">

<h3>
Travel Credentials
</h3>

<p>
{creator.cards}
</p>

</div>

<div className="social-box">

<h3>
Connect
</h3>

<a
href={creator.instagram}
target="_blank"
rel="noreferrer"
className="social-icon-link"
>
<img 
src="/instagram.png"
alt="Instagram"
/>
Instagram
</a>


<a
href={creator.linkedin}
target="_blank"
rel="noreferrer"
className="social-icon-link"
>
<img 
src="/linkedin.png"
alt="LinkedIn"
/>
LinkedIn
</a>


{creator.website && (

<a
href={creator.linkedin}
target="_blank"
rel="noreferrer"
className="social-icon-link"
>
<img 
src="/website.png"
alt="LinkedIn"
/>
Portfolio
</a>

)}

</div>

</div>

</div>

</div>

</div>

))}

</div>

<section className="collaborate-section">

    <img
        src="/stamp.png"
        className="collab-stamp"
        alt="travel stamp"
    />

    <span>Let's Collaborate</span>

    <h2>
        Interested in working together?
    </h2>
    <p>
        We're passionate about helping people travel farther for less through
        points, weekend itineraries, and honest recommendations. If you're a
        hotel, tourism board, airline, or travel brand interested in a
        collaboration, we'd love to connect.
    </p>

    <div className="collab-buttons">

        <a href="mailto:hello@letsweekendmax.com">
            <button>Contact Us</button>
        </a>

        <a
            href="https://instagram.com/letsweekendmax"
            target="_blank"
            rel="noreferrer"
        >

        </a>

    </div>

</section>

        </section>

    )

}