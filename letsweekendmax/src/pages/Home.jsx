import Hero from "../components/Hero";
import Itineraries from "../components/Itinerariespreview";
import FlightDeals from "../components/FlightDeals";
import AboutPreview from "../components/AboutPreview";
import Us from "../components/Us";
import Define from "../components/Define.jsx";
import { useEffect } from "react";


export default function Home(){
  useEffect(() => {
    document.title = "Let's Weekendmax";
  }, []);
return(

<>

<Hero />
<Us />
<Define />
<Itineraries />


</>

)

}