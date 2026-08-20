import ItineraryTemplate from "../components/ItineraryTemplate";

export default function Iceland() {

    const trip = {

        cover: "/iceland/21.jpg",

        destination: "Reykjavík, Iceland",

        duration: "3 Nights",

        season: "Spring",

        totalCost: "~$1,234 + Food",

        points: {
            type: "cash",
            value: "$461"
        },

        travelers: "4 People",

        flightLink: "",

        description:
            "For this trip, we're turning a long weekend into an Iceland adventure by flying through New York and maximizing every hour we have. Instead of spending a full week in Iceland, we're using overnight flights, remote work, and carefully planned tours to experience as much as possible in just three nights. Our itinerary includes the Golden Circle, Iceland's dramatic South Coast, a late-night Northern Lights hunt, a geothermal lagoon, and plenty of time exploring Reykjavík. Iceland isn't the cheapest destination, but splitting our Airbnb between four people, grocery shopping, cooking meals, and packing food for our full-day tours helps keep the trip manageable.",

        costs: [

            {
                category: "Flights to New York",
                description:
                    "Flights between Houston and New York for our Iceland stopover.",
                price: "~$64"
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
                    "Three booked GetYourGuide experiences: the Golden Circle, Northern Lights, and South Coast tours.",
                price: "$304.45 per Person"
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
                    "Food is not included in the trip total. We'll grocery shop, cook meals at the Airbnb, and pack food for our full-day excursions.",
                price: "Varies"
            },

            {
                category: "New York Stopover",
                description:
                    "Hotel and transportation for the overnight stops in New York before and after Iceland.",
                price: "~$100"
            }

        ],

        hotel: {
            name: "Reykjavík Airbnb",
            link: "",

            description: (
                <>
                    We stayed in an Airbnb in Reykjavík and split the cost between
                    four people. Since Iceland can be an expensive destination,
                    having access to a kitchen was one of the easiest ways we saved
                    money.

                    <br /><br />

                    Instead of eating every meal at restaurants, we grocery shopped
                    after arriving, cooked dinner at the Airbnb, and prepared food
                    to bring with us on our full-day excursions.

                    <br /><br />

                    Staying in Reykjavík also made it easy to join guided tours
                    without renting a car. Our Golden Circle and Northern Lights
                    tours both used Bus Stop #12 at Höfðatorg as the meeting point,
                    while our South Coast tour included pickup from our selected
                    Reykjavík location.

                    <br /><br />

                    Splitting the stay between four travelers kept accommodation
                    costs relatively low while giving us a comfortable place to
                    cook, relax, and recharge between long days of exploring.
                </>
            ),
        },

        days: [

            {
                title: "Arrival + Golden Circle + Northern Lights",

description: [ <> We arrived in Iceland early Friday morning after taking an overnight flight from New York. Since we landed around 6:30 AM, we planned to get into Reykjavík, store our luggage, and start exploring instead of waiting around for Airbnb check-in. </>, <> Our first major adventure was the{" "} <a href="https://www.getyourguide.com/reykjavik-l30/grand-golden-circle-tour-t67012/" target="_blank" rel="noopener noreferrer" > Golden Circle Full-Day Tour with Kerid Crater </a> . The 8.5-hour tour cost $181.02 for two adults and included stops at Kerid Crater, Gullfoss Waterfall, Geysir, and Þingvellir National Park. The tour met at Bus Stop #12 at Höfðatorg in Reykjavík. </>, <> After returning to Reykjavík, we headed back to the Airbnb, went grocery shopping, cooked dinner, and took some time to rest before heading back out later that night. </>, <> At 9:30 PM, we met back at Bus Stop #12 for our{" "} <a href="https://www.getyourguide.com/reykjavik-l30/iceland-northern-lights-bus-tour-from-reykjavik-w-hot-cocoa-t67019/" target="_blank" rel="noopener noreferrer" > Northern Lights Bus Tour with Hot Cocoa </a> . The four-hour experience cost $148.12 for two adults and included transportation, a guide, scenic stops for photography, and hot cocoa while we searched for the Aurora Borealis. </>, <> Seeing the Northern Lights is never guaranteed, since visibility depends on weather and solar conditions. The tour provider adjusts the route based on forecasts and offers a free retry if the lights aren't visible. </> ],

                photos: [
                    {
                        src: "iceland/2.jpg",
                    },
                    {
                        src: "iceland/3.jpg",
                    },
                    {
                        src: "iceland/4.jpg",
                    },
                    {
                        src: "iceland/5.jpg",
                    },
                    {
                        src: "iceland/8.jpg",
                        overlayText: "Group Photo"
                    },
                    {
                        src: "iceland/17.jpg",
                    }
                ],

            },

            {
                title: "South Coast Adventure",

description: [ <> Saturday was our biggest adventure day. We had an early start for a 10-hour{" "} <a href="https://www.getyourguide.com/reykjavik-l30/from-reykjavik-iceland-south-coast-small-group-adventure-t165284/" target="_blank" rel="noopener noreferrer" > Iceland South Coast Small-Group Adventure </a> . The tour cost $279.76 for two adults and included transportation and a guide. Since food can get expensive in Iceland, we packed our own lunch and snacks before leaving the Airbnb. </>, <> The tour took us along Iceland's dramatic South Coast, with stops at Skógafoss, Vík, Reynisfjara Black Sand Beach, Sólheimajökull Glacier, and Seljalandsfoss. </>, <> One of the best parts of taking a guided tour was being able to see so many major sights without renting a car or having to worry about driving Iceland's roads ourselves. The guide also shared stories and information about the different locations along the way. </>, <> We were advised to bring warm clothing, comfortable shoes, weather-appropriate layers, a daypack, sunglasses, and a packed lunch. Since March can still be cold and slippery, shoe grips or crampons were also recommended. </>, <> After spending most of the day exploring the South Coast, we returned to Reykjavík and spent the evening relaxing after another packed day. </> ],

                photos: [
                    {
                        src: "iceland/1.jpg",
                    },
                    {
                        src: "iceland/15.jpg",
                    },
                    {
                        src: "iceland/18.jpg",
                        overlayText: "Icelandic Horse"
                    },
                    {
                        src: "iceland/19.jpg",
                    },
                    {
                        src: "iceland/20.jpg",
                    },
                    {
                        src: "iceland/16.jpg",
                        overlayText: "Walking to get dinner in a snowstorm"
                    },
                    {
                        src: "iceland/6.jpg",
                        overlayText: "Northern Lights"
                    },
                    {
                        src: "iceland/7.jpg",
                        overlayText: "Northern Lights"
                    },
                    {
                        src: "iceland/14.jpg",
                        overlayText: "Walking to get dinner in a snowstorm"
                    },
                                        {
                        src: "iceland/22.jpg",
                    },
                ],

                activities: [
                    {
                        title: "Iceland South Coast Small-Group Adventure",
                        date: "March 28, 2026",
                        duration: "10 hours",
                        price: "$279.76 for 2 Adults",
                        location: "Reykjavík pickup",
                        link: "https://www.getyourguide.com/reykjavik-l30/from-reykjavik-iceland-south-coast-small-group-adventure-t165284/"
                    }
                ]
            },

            {
                title: "Reykjavík + Geothermal Lagoon",
description: [ <> We saved our final day for a slower morning in Reykjavík. After several full days of tours and late nights, we wanted time to actually enjoy the city instead of immediately rushing into another excursion. </>,
<> We started the morning with breakfast at Brauð & Co before walking around Reykjavík and exploring more of the city's colorful streets and shops. </>,
<> After checking out of the Airbnb, we stored our luggage and headed to Blue Lagoon (a geothermal lagoon) for a relaxing afternoon. After spending the previous two days chasing waterfalls, glaciers, beaches, and the Northern Lights, soaking in Iceland's warm geothermal water was the perfect way to end the trip. </>,
<> Once we finished at the lagoon, we collected our luggage and made our way toward Keflavík Airport for our evening flight back to New York. </>, <> We flew back to New York that evening, then spent Monday working remotely before eventually catching our flight back to Houston. By combining an international trip with a New York stopover and remote work, we were able to turn a few days off into a much bigger adventure. </> ],

                photos: [
                    {
                        src: "iceland/13.jpg",
                        overlayText: "Blue Lagoon"
                    },
                    {
                        src: "iceland/9.jpg",
                        overlayText: "Reykjavík Rainbow Street"
                    },
                    {
                        src: "iceland/10.jpg",
                        overlayText: "Lower Skólavörðustígur Downtown"
                    },
                    {
                        src: "iceland/11.jpg",
                        overlayText: "Blue Lagoon"
                    },
                    {
                        src: "iceland/12.jpg",
                        overlayText: "Blue Lagoon"
                    }
                ]
            }

        ],

        tips: [

            "Use overnight flights to maximize your time in Iceland when you're working with limited PTO.",

            "Store your luggage after arriving in Reykjavík so you can start exploring before Airbnb check-in.",

            "Bus Stop #12 at Höfðatorg is a major meeting point for tours, including both the Golden Circle and Northern Lights tours.",

            "Book full-day guided tours if you don't want to rent a car or worry about navigating Iceland's roads.",

            "Pack a lunch and snacks for full-day excursions. Food and drinks at tourist stops can add up quickly.",

            "Stay somewhere with a kitchen and grocery shop after arriving to save money on meals.",

            "Bring multiple warm layers. Icelandic weather can change quickly, and you may spend long periods outside.",

            "For the South Coast in March, bring comfortable waterproof shoes and consider shoe grips or crampons.",

            "Northern Lights sightings are never guaranteed. Our tour offered a free retry if we didn't see the lights.",

            "Northern Lights tours can be canceled because of poor weather, so check your email before heading to the meeting point.",

            "Compare geothermal lagoons based on your itinerary, transportation, and the type of experience you want.",

            "If you're using New York as a stopover, look for accommodations with convenient airport transportation.",

            "Bring a reusable water bottle. Iceland has excellent tap water, so there's little reason to constantly buy bottled water."

        ],

        verdict:
            "Iceland is one of those destinations that feels impossible to fully experience in just a few days, but this trip proved that a short itinerary can still pack in a lot. In only three nights, we explored the Golden Circle, chased the Northern Lights, drove along the South Coast, saw waterfalls, glaciers and black sand beaches, wandered around Reykjavík, and ended the trip with a geothermal lagoon. The key was planning around our limited time: overnight flights, guided tours, an Airbnb with a kitchen, packed lunches, and a New York stopover made it possible to turn a long weekend into a full Iceland adventure. Iceland isn't the cheapest destination, but splitting costs between four people and being strategic about food and transportation helped make it much more manageable.",
    };

    return <ItineraryTemplate trip={trip} />;

}