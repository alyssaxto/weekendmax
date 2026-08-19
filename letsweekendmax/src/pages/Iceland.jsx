import ItineraryTemplate from "../components/ItineraryTemplate";

export default function Iceland() {

    const trip = {

        cover: "/iceland.jpg",

        destination: "Iceland",

        duration: "4 Days",

        season: "Summer",

        totalCost: "$650",

        points: {
            type: "points",
            value: "65k Chase Points"
        },

        travelers: "2 People",

        flightLink: "https://www.chase.com/",


        description:
            "We spent four days exploring Iceland, using Chase points to make the trip much more affordable. From exploring Reykjavík and driving the Golden Circle to seeing waterfalls, black sand beaches, and glaciers along the South Coast, we packed as much as possible into a long weekend. Renting a car gave us the flexibility to explore at our own pace without relying on expensive tours.",



        /* =========================
           COST BREAKDOWN
        ========================= */

        costs: [

            {
                category: "Flights",

                description:
                    "Roundtrip flights from Houston to Reykjavík booked with Chase points.",

                price: "65k Chase Points + $100 Fees"
            },


            {
                category: "Hotel",

                description:
                    "Four nights at a boutique hotel near downtown Reykjavík.",

                price: "$420 Total"
            },


            {
                category: "Rental Car",

                description:
                    "Four-day SUV rental for exploring Iceland's major sights.",

                price: "$180"
            },


            {
                category: "Food",

                description:
                    "Restaurants, coffee, groceries, and snacks throughout the trip.",

                price: "$250"
            }

        ],



        /* =========================
           ITINERARY
        ========================= */

        days: [

            {

                title: "Arrive in Reykjavík",

                description: [

                    <>
                        We landed in Iceland and picked up our rental car before
                        heading into Reykjavík. Having a car immediately made it
                        easy to explore the city while also preparing for the
                        road trips later in the trip.
                    </>,

                    <>
                        We spent the afternoon exploring downtown Reykjavík,
                        visiting Hallgrímskirkja, walking around the colorful
                        streets, and stopping at local shops and cafés.
                    </>,

                    <>
                        We ended our first day with dinner in the city before
                        heading back to the hotel to rest for an early start
                        the next morning.
                    </>

                ],

                photos: [

                    "/iceland1.jpg"

                ]

            },


            {

                title: "Golden Circle",

                description: [

                    <>
                        Our second day was spent driving the Golden Circle,
                        one of Iceland's most popular routes. Having our own
                        rental car allowed us to move at our own pace and stop
                        whenever we saw something interesting along the way.
                    </>,

                    <>
                        We visited some of Iceland's famous waterfalls,
                        geothermal areas, and geysers before continuing through
                        the scenic countryside.
                    </>,

                    <>
                        After a full day of exploring, we made our way back
                        toward Reykjavík for dinner and another night in the city.
                    </>

                ],

                photos: [

                    "/iceland2.jpg"

                ]

            },


            {

                title: "South Coast",

                description: [

                    <>
                        We spent the next day driving along Iceland's South
                        Coast, stopping at some of the country's most dramatic
                        landscapes along the way.
                    </>,

                    <>
                        We explored black sand beaches, waterfalls, and
                        glacier-covered mountains, making frequent stops to
                        take photos and enjoy the scenery.
                    </>,

                    <>
                        The South Coast ended up being one of our favorite
                        parts of the trip because every section of the drive
                        looked completely different.
                    </>

                ],

                photos: [

                    "/iceland3.jpg"

                ]

            },


            {

                title: "Final Day in Iceland",

                description: [

                    <>
                        We spent our final morning exploring Reykjavík and
                        grabbing coffee before returning our rental car.
                    </>,

                    <>
                        With only four days in Iceland, we tried to make the
                        most of every morning and evening while still leaving
                        enough time to enjoy each destination instead of
                        rushing through it.
                    </>,

                    <>
                        After returning the car, we headed to the airport for
                        our flight home, ending a packed but incredibly
                        memorable Iceland getaway.
                    </>

                ],

                photos: [

                    "/iceland4.jpg"

                ]

            }

        ],



        /* =========================
           TIPS
        ========================= */

        tips: [

            "Book hotels early if you're visiting Iceland during the summer.",

            "Use Chase points for flights and save your cash for hotels, food, and experiences.",

            "Rent a car if you want the flexibility to explore outside Reykjavík.",

            "Start your road trip early to avoid crowds at popular attractions.",

            "Pack layers even during summer because Iceland's weather can change quickly.",

            "Keep snacks and water in the car for longer drives between stops.",

            "Don't try to see the entire country in four days—focus on Reykjavík, the Golden Circle, and the South Coast."

        ],



        /* =========================
           FINAL THOUGHTS
        ========================= */

        verdict:
            "Iceland is one of the best destinations for a short adventure-filled trip. With only four days, we were still able to experience Reykjavík, the Golden Circle, waterfalls, black sand beaches, glaciers, and the incredible Icelandic countryside. Using Chase points for the flights and renting a car gave us the flexibility to see a lot without spending thousands of dollars. If you're looking for a destination where every drive feels like part of the adventure, Iceland is absolutely worth Weekendmaxing."

    };


    return (
        <ItineraryTemplate trip={trip} />
    );

}