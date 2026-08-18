import Hero from "../components/Hero";
import Itineraries from "../components/Itinerariespreview";
import AboutPreview from "../components/AboutPreview";
import Us from "../components/Us";
import Videos from "../components/Videos";
import Destination from "../components/Destination.jsx";

import { useEffect } from "react";


export default function Home(){
  useEffect(() => {
    document.title = "Let's Weekendmax";
  }, []);
return(

<>

<Hero />
<Videos/>
<Us />
<Destination />
<Itineraries />


</>

)

}