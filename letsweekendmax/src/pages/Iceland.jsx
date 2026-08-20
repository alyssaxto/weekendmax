import ItineraryTemplate from "../components/ItineraryTemplate";

export default function Iceland() {

    const trip = {

        cover: "/iceland.jpg",

        destination: "Reykjavík, Iceland",

        duration: "3 Nights",

        season: "Spring",

        totalCost: "~$1,163 + Food",

        points: {
            type: "cash",
            value: "$1,163 per Person"
        },

        travelers: "4 People",

        flightLink: "",

        description:
            "For this trip, we're turning a long weekend into an Iceland adventure with a quick stop in New York on both ends. By working remotely from New York and taking an overnight flight to Reykjavík, we're able to maximize our time without using an entire week of PTO. Over three days in Iceland, we'll explore the Golden Circle, drive along the dramatic South Coast, hunt for the Northern Lights, relax in a geothermal lagoon, and spend time wandering around Reykjavík. Iceland is definitely not the cheapest destination, but splitting accommodations, packing food for excursions, and cooking meals at the Airbnb helps make the trip much more affordable.",

        costs: [

            {
                category: "Flights to New York",
                description:
                    "Roundtrip flights between Houston and New York.",
                price: "~$193"
            },

            {
                category: "Flights to Iceland",
                description:
                    "Roundtrip flights between New York and Reykjavík.",
                price: "~$397"
            },

            {
                category: "Airport Transportation",
                description:
                    "Transportation between Keflavík Airport and Reykjavík.",
                price: "~$35"
            },

            {
                category: "Excursions",
                description:
                    "Golden Circle tour, South Coast tour, Northern Lights tour, and a geothermal lagoon experience.",
                price: "~$538"
            },

            {
                category: "Airbnb",
                description:
                    "Three-night stay in Reykjavík split between four travelers.",
                price: "~$130 per Person"
            },

            {
                category: "Food",
                description:
                    "Food is expensive in Iceland, so we plan to grocery shop, cook meals at the Airbnb, and pack food for full-day excursions.",
                price: "Varies"
            },

            {
                category: "New York Stopover",
                description:
                    "Hotel and transportation for the overnight stops in New York before and after Iceland.",
                price: "~$180"
            }

        ],

        hotel: {
            name: "Reykjavík Airbnb",
            link: "",

            description: (
                <>
                    For this trip, we're staying in an Airbnb in Reykjavík and
                    splitting the cost between four people. Since Iceland can be
                    an expensive destination, having access to a kitchen is one
                    of the easiest ways we're planning to save money.

                    <br /><br />

                    Instead of eating every meal at restaurants, we'll grocery
                    shop after arriving, cook dinner at the Airbnb, and prepare
                    food to bring with us on our full-day excursions.

                    <br /><br />

                    The Airbnb will also give us a comfortable place to relax
                    after long days exploring Iceland. With early morning tours
                    and a late-night Northern Lights excursion, having a central
                    place to come back to will be especially important.

                    <br /><br />

                    Splitting the stay between four travelers keeps the
                    accommodation cost relatively low while giving us the
                    flexibility to cook, relax, and maximize our time in
                    Reykjavík.
                </>
            ),


        },

        days: [

            {
                title: "Arrival + The Golden Circle + Reykjavík",

                description: [

                    <>
                        We arrived in Iceland early Friday morning after taking
                        an overnight flight from New York. Since we landed around
                        6:30 AM, we planned to take transportation into Reykjavík,
                        store our luggage, and head straight into our first
                        adventure instead of waiting around for check-in.
                    </>,

                    <>
                        Our first full experience in Iceland is the Golden Circle.
                        The tour takes us through some of Iceland's most famous
                        landscapes and natural attractions, making it the perfect
                        introduction to the country after arriving.
                    </>,

                    <>
                        After spending the day exploring, we'll head back to
                        Reykjavík and finally settle into our Airbnb. We'll go
                        grocery shopping, cook dinner, and take the evening to
                        relax after a long travel day.
                    </>,

                    <>
                        To end the night, we'll head to Hús máls og menningar,
                        one of Reykjavík's famous bookstore bars. After an early
                        morning arrival and a full day of sightseeing, grabbing a
                        drink surrounded by books and live music sounds like the
                        perfect first night in Iceland.
                    </>

                ],

                photos: [

                ]
            },

            {
                title: "South Coast Adventure + Northern Lights",

                description: [

                    <>
                        Saturday is our biggest adventure day of the trip. We
                        have an early start for a full-day South Coast tour, so
                        we're planning to pack our own lunch before leaving the
                        Airbnb. Food can get expensive in Iceland, and bringing
                        snacks and lunch is an easy way to save money.
                    </>,

                    <>
                        The South Coast is known for some of Iceland's most
                        dramatic scenery, from waterfalls and black sand beaches
                        to glaciers and massive cliffs. Since we only have a few
                        days in Iceland, taking a guided tour allows us to see a
                        lot without needing to rent a car or plan the logistics
                        ourselves.
                    </>,

                    <>
                        After returning to Reykjavík, we'll spend some time
                        walking around downtown before heading back to the
                        Airbnb to cook dinner and rest.
                    </>,

                    <>
                        The day doesn't end there. At 9:30 PM, we're heading back
                        out for a late-night Northern Lights tour. Seeing the
                        Northern Lights is one of the biggest reasons we wanted
                        to visit Iceland, so we're hoping the weather cooperates
                        and gives us a chance to see them in person.
                    </>

                ],

                photos: [
  
                ]
            },

            {
                title: "Reykjavík + A Geothermal Lagoon",

                description: [

                    <>
                        We saved our final day for a slower morning in Reykjavík.
                        We'll start with breakfast at Brauð & Co, one of the most
                        popular bakeries in the city, before spending some time
                        walking around and exploring more of Reykjavík.
                    </>,

                    <>
                        After checking out of the Airbnb, we'll store our luggage
                        and head to one of Iceland's famous geothermal lagoons.
                        We're deciding between the Blue Lagoon and Sky Lagoon,
                        both of which would be the perfect way to relax after
                        several busy days of sightseeing and early morning tours.
                    </>,

                    <>
                        Once we're done soaking and relaxing, we'll grab our
                        luggage and begin making our way back toward Keflavík
                        Airport. Our flight leaves around 8 PM, so we're planning
                        to leave Reykjavík with plenty of time to get through
                        transportation and airport security.
                    </>,

                    <>
                        We'll fly back to New York that evening, wrapping up our
                        Iceland adventure before spending Monday working remotely
                        and eventually catching our flight back to Houston.
                        By using New York as a stopover and working remotely
                        around the flights, we're able to turn a few days off into
                        an international adventure.
                    </>

                ],

                photos: [

                ]
            }

        ],

        tips: [

            "Flying overnight helps maximize your time in Iceland, especially if you're working around limited PTO.",

            "Store your luggage after arriving so you can start exploring immediately instead of waiting for Airbnb check-in.",

            "Book full-day tours if you don't want to rent a car or worry about navigating Iceland's roads.",

            "Pack snacks and lunch for excursions—food can be expensive in Iceland.",

            "Stay in an Airbnb with a kitchen and grocery shop after arriving to save money on meals.",

            "Bring layers. Icelandic weather can change quickly, especially during full-day outdoor tours.",

            "Plan a Northern Lights tour, but remember that sightings depend heavily on weather and visibility.",

            "Schedule the geothermal lagoon toward the end of your trip so you can relax after several busy days of exploring.",

            "Compare Blue Lagoon and Sky Lagoon based on your itinerary, transportation, and the experience you want.",

            "Book airport transportation in advance so you have plenty of time to get back to Keflavík Airport for your flight.",

            "If you're using New York as a stopover, look for hotels with free airport shuttles to make the transition between flights easier.",

            "Bring a reusable water bottle—Iceland has excellent tap water, so you don't need to constantly buy bottled water."

        ],

        verdict:
            "Iceland is one of those destinations that feels almost impossible to fully experience in just one weekend, but with overnight flights, guided tours, and a little planning, we're able to see an incredible amount in only a few days. From waterfalls and black sand beaches to Reykjavík's colorful streets, geothermal lagoons, and hopefully the Northern Lights, this itinerary is all about maximizing a short trip. Iceland isn't cheap, but splitting an Airbnb, cooking meals, and packing food for excursions helps make the experience much more manageable. If you're looking for a trip that feels completely different from anywhere else, Iceland is definitely worth the long weekend."
    };

    return <ItineraryTemplate trip={trip} />;

}