import ItineraryTemplate from "../components/ItineraryTemplate";

export default function Canada() {
const trip = {

    cover: "/alyssa/9.jpg",

    destination: "Banff, Canada",

    duration: "5 Nights",

    season: "Summer",

    totalCost: "Split Between 5",

    points: {
        type: "cash",
        value: "$200–$300"
    },

    travelers: "5 People",

    flightLink: "https://www.westjet.com/en-us",

    description:
        "We spent four nights exploring the Canadian Rockies, using Canmore as our home base for some of the most beautiful landscapes in Alberta. From driving the Icefields Parkway and seeing Peyto Lake to kayaking at Moraine Lake, exploring Banff, and hiking through Johnston Canyon, this trip was packed with scenic stops without constantly changing hotels. Staying in Canmore made it easy to explore Banff National Park while still having a comfortable place to come back to each night.",

    costs: [

            {
                category: "Flights",
                description:
                    "Roundtrip flights to Calgary International Airport, followed by a drive to Canmore.",
                price: "$200-300"
            },

            {
                category: "Hotel",
                description:
                    "Four nights at an Airbnb in Canmore, only a 20 minute drive from Banff since staying directly in Banff was more expensive.",
          
            },

            {
                category: "Transportation",
                description:
                    "We used Turo instead of a traditional rental car company since it was cheaper in Canada.",
        
            },

            {
                category: "PTO Used",
                description:
                    "A long weekend-style trip packed with full days of exploring.",
                price: "3 days"
            }

        ],
hotel: {

    name: "Canadian Rockies Chalets",

    link: "https://www.canadianrockieschalets.com/",

    description: (
        <>
            We stayed at{" "}
            <a
                href="https://www.canadianrockieschalets.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Canadian Rockies Chalets
            </a>
            , a cozy mountain property in Canmore that made the perfect home
            base for exploring the Canadian Rockies.

            <br /><br />

            The location was especially convenient because we could easily
            drive into Banff while still being close to Canmore's restaurants,
            cafes, grocery stores, and shops.

            <br /><br />

            Having a comfortable place to come back to each night made it easy
            to pack snacks, prepare for our early mornings, and relax after
            spending the entire day exploring the mountains.
        </>
    ),

    photos: [

        {
            image: "/alyssa/1.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/2.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/3.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/4.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/6.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

        {
            image: "/alyssa/7.jpg",
            caption: "Canadian Rockies Chalets",
            location: "Canada"
        },

 

    ],

    video: "/alyssa/2.mp4"

},
        days: [

            {
                title: "Arrival + Canmore",

                description: [

                    <>
                        We arrived in the Canmore area and headed straight to our
                        Airbnb at {" "}
            <a
                href="https://www.canadianrockieschalets.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Canadian Rockies Chalets
            </a>
                        . Check-in was at 2:00 PM, giving us plenty of time to settle in
                        before exploring the town.
                    </>,

                    <>
                        Before checking in, we stopped at{" "}
                        <strong>Toro Toro Sushi and Poke</strong> for lunch.
                        After the drive, it was the perfect quick meal before getting
                        settled into the Airbnb.
                    </>,

                    <>
                        Once we checked in, we headed out to explore Canmore.
                        We walked around town, checked out the shops and cafes, and
                        picked up groceries for the rest of the trip.
                    </>,

                    <>
                        We ended our first day with dinner in Canmore and an early
                        night so we could get up for our first full day in the
                        Canadian Rockies.
                    </>

                ],

                photos: [
             
                ]

            },

            {
                title: "Icefields Parkway + Peyto Lake",

                description: [

                    <>
                        We left the condo early in the morning and started driving
                        north along the Icefields Parkway. This was one of the
                        biggest days of the trip, so getting an early start helped
                        us fit in as much as possible.
                    </>,

                    <>
                        Our first stop was{" "}
                        <strong>Bow Lake</strong>.
                        We parked at Bow Lake Parking Lot A and took some time to
                        take in the turquoise water and surrounding mountain views.
                    </>,

                    <>
                        From Bow Lake, we continued to{" "}
                        <strong>Peyto Lake Viewpoint</strong>.
                        The viewpoint gave us one of the most recognizable views of
                        the Canadian Rockies, with the bright blue lake surrounded
                        by mountains.
                    </>,

                    <>
                        After Peyto Lake, we continued south toward{" "}
                        <strong>Mistaya Canyon</strong>.
                        We took a short hike through the canyon and stopped at the
                        viewpoints along the trail.
                    </>,

                    <>
                        Our final major stop was{" "}
                        <strong>Sunwapta Falls</strong>.
                        The waterfall is located in Jasper National Park and is
                        especially impressive during the summer when the river is
                        fed by glacial melt.
                    </>,

                    <>
                        After a full day on the Icefields Parkway, we made the long
                        drive back to Canmore and arrived around 5–6 PM for dinner
                        and a much-needed rest.
                    </>

                ],

                photos: [

                ]

            },

            {
                title: "Banff + Lake Louise + Moraine Lake",

                description: [

                    <>
                        We woke up around 6:00 AM and left the condo early so we
                        could stop at the famous{" "}
                        <strong>Banff sign </strong>
                        before heading to Lake Louise.
                    </>,

                    <>
                        We drove to the{" "}
                        <strong>Banff Train Station </strong>
                        and arrived around 6:40 AM. From there, we took the bus
                        toward Lake Louise for the morning.
                    </>,

                    <>
                        Once we arrived at{" "}
                        <strong>Lake Louise</strong>,
                        we immediately took the connecting bus toward{" "}
                        <strong>Moraine Lake</strong>.
                    </>,

                    <>
                        We spent the morning around Moraine Lake, walking the
                        Rockpile Trail, taking photos, and checking out the area.
                        We also planned time for kayaking before heading back toward
                        Lake Louise.
                    </>,

                    <>
                        We took the connector bus back to Lake Louise and made sure
                        to be at the bus area by 1:40 PM for our 1:50 PM departure.
                    </>,

                    <>
                        After returning to Banff, we spent the afternoon exploring
                        the town. We walked around, checked out the shops, grabbed
                        food, and enjoyed the atmosphere before driving back to
                        Canmore around 7–8 PM.
                    </>

                ],

                photos: [

                ]

            },

            {
                title: "Johnston Canyon + Emerald Lake",

                description: [

                    <>
                        We left the condo around 7:00 AM and drove to{" "}
                        <strong>Johnston Canyon </strong>
                        for an early morning hike.
                    </>,

                    <>
                        Johnston Canyon is known for its trails and bridges that
                        follow the canyon through the forest toward its waterfalls.
                        Starting early gave us a quieter experience and helped us
                        avoid spending the hottest part of the day on the trail.
                    </>,

                    <>
                        From Johnston Canyon, we continued toward{" "}
                        <strong>Marble Canyon</strong>.
                        We walked around the canyon and enjoyed the dramatic
                        limestone formations and surrounding mountain scenery.
                    </>,

                    <>
                        Our final destination was{" "}
                        <strong>Emerald Lake</strong>.
                        The bright green-blue water surrounded by mountains made
                        this one of our favorite scenic stops of the trip.
                    </>,

                    <>
                        After spending the day exploring the area, we headed back
                        toward Canmore and relaxed for the evening.
                    </>

                ],

                photos: [

                ]

            }

        ],

        tips: [

            "Stay in Canmore if you want a convenient home base without staying directly in Banff.",

            "Start the Icefields Parkway day early—the drive is long and there are a lot of scenic stops worth pulling over for.",

            "Bring snacks and water for the Icefields Parkway because you'll be spending a large portion of the day on the road.",

            "Give yourself extra time when driving between destinations. The scenery is so beautiful that you'll probably want to stop for photos.",

            "For Lake Louise and Moraine Lake, plan your transportation ahead of time and pay close attention to your bus departure times.",

            "Get to Banff early if you want photos at the Banff sign without a large crowd.",

            "Wear comfortable shoes since several of the stops involve walking or hiking.",

            "Keep your camera ready—the drive itself is just as scenic as many of the official viewpoints.",

            "Pack layers even during summer because temperatures can change quickly in the mountains.",

            "If you're doing a packed itinerary like this, staying in one Airbnb for the entire trip makes things much easier."

        ],

        verdict:
            "The Canadian Rockies made for one of our favorite adventure-filled trips. Staying in Canmore gave us the perfect home base for exploring Banff, Lake Louise, Moraine Lake, and the Icefields Parkway without constantly packing and unpacking. From turquoise alpine lakes and dramatic canyons to waterfalls and mountain views around every turn, this trip was packed with incredible scenery. If you're looking for a destination where you can fit an insane amount of exploring into just a few days, Canmore and Banff are absolutely worth adding to your Weekendmax list."

    };

    return <ItineraryTemplate trip={trip} />;

}