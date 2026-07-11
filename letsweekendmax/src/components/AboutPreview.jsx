import "./abt.css";

export default function AboutPreview(){

return(

<section className="about-preview">


    <div className="about-postcard">


        <img 
            className="stamp-image"
            src="/preview.jpeg"
            alt="postcard stamp"
        />



        <div className="postcard-content">


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
target="_blank"
rel="noreferrer"
className="social-icon-link"
>
<img 
src="/instagram.png"
alt="LinkedIn"
/>
        
                @letsweekendmax
            </a>


        </div>



        <div className="postcard-lines">

            <span></span>
            <span></span>
            <span></span>

        </div>



    </div>


</section>

)

}