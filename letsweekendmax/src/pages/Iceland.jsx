import ItineraryTemplate from "../components/ItineraryTemplate";


export default function Iceland(){

const trip = {

cover:"/iceland.jpg",

destination:"Iceland",

duration:"4 Days",

season:"Summer",

totalCost:"$650",

points:"65k Chase Points",

travelers:"2 People",


description:
"We used credit card points to experience Iceland without spending thousands. Here's exactly how we booked flights, hotels, and activities.",



costs:[

{
category:"Flights",
description:"Houston → Reykjavik round trip",
price:"65k Chase Points + $100 fees"
},

{
category:"Hotel",
description:"Boutique hotel near downtown",
price:"$420 total"
},

{
category:"Rental Car",
description:"4 day SUV rental",
price:"$180"
},

{
category:"Food",
description:"Restaurants + groceries",
price:"$250"
}

],



days:[

{
title:"Arrive in Reykjavik",
activities:
"Pick up rental car, explore downtown, visit Hallgrimskirkja, and grab dinner."
},

{
title:"Golden Circle",
activities:
"Visit waterfalls, geysers, and geothermal pools."
},

{
title:"South Coast",
activities:
"Explore black sand beaches and glaciers."
}

],



photos:[

"/iceland1.jpg",
"/iceland2.jpg",
"/iceland3.jpg",
"/iceland4.jpg"

],



tips:[

"Book hotels early during summer months",

"Use points for flights and save cash for experiences",

"Rent a car instead of booking tours"

]


}


return(
    <ItineraryTemplate trip={trip}/>
)

}