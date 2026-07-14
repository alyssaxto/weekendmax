import Hero from "../components/Hero";
import Itineraries from "../components/Itinerariespreview";
import FlightDeals from "../components/FlightDeals";
import AboutPreview from "../components/AboutPreview";
import Newsletter from "../components/Newsletter";
import { useEffect } from "react";


export default function Home(){
  useEffect(() => {
    document.title = "Let's Weekendmax";
  }, []);
return(

<>

<Hero />
<Itineraries />

<FlightDeals />

<AboutPreview />

<Newsletter />

</>

)

}