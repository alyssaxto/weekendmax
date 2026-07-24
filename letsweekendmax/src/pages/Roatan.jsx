import ItineraryTemplate from "../components/ItineraryTemplate";

export default function Roatan() {

    const trip = {

        cover: "/roatan/11.jpg",

        destination: "Roatán, Honduras",

        duration: "3 Nights",

        season: "Spring",

        totalCost: "Hotel Split Between 4",

        points: "30k Capital One Miles",

        travelers: "4 People",

    flightLink: "https://www.united.com/",

        description:
            "We spent three nights exploring the beautiful island of Roatán, Honduras, while only using two vacation days. By redeeming 30,000 Capital One miles for a roundtrip United Airlines flight that was selling for nearly $1,000, we turned an expensive Caribbean getaway into one of our favorite award travel redemptions. We stayed at the Arca Hotel and split the cost between four travelers, making our beachfront accommodations surprisingly affordable. Between snorkeling crystal-clear water, watching incredible sunsets, enjoying fresh seafood, and relaxing by the beach, this trip proved you don't need an entire week off work to experience paradise.",

        costs: [

            {
                category: "Flights",
                description:
                    "Roundtrip nonstop United Airlines flights from Houston (IAH) to Roatán booked entirely with Capital One miles.",
                price: "30,000 Miles (~$1,000 Value)"
            },

            {
                category: "Hotel",
                description:
                    "Three nights at Arca Hotel split between four travelers.",
                price: "Split Between 4"
            },

            {
                category: "Transportation",
                description:
                    "No rental car needed. We used local taxis throughout the trip.",
                price: "Cash Only"
            },

            {
                category: "PTO Used",
                description:
                    "Perfect long weekend itinerary.",
                price: "2 Vacation Days"
            }

        ],
hotel: {
    name: "Arca Hotel",
    link: "https://arcaroatan.com/",
    
description: (
    <>
        We stayed at{" "}
        <a
            href="https://arcaroatan.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Arca Hotel
        </a>
        , a beachfront villa-style hotel located directly on West Bay Beach.
        When we arrived, we were welcomed with complimentary watermelon juice
        and a vodka shot — the perfect start to our Caribbean getaway.

        <br /><br />

        Our villa came with a private balcony overlooking the beautiful ocean,
        giving us the perfect spot to relax and watch the waves throughout the
        day. The hotel also provided its own beach chairs and towels, making it
        easy to spend hours enjoying the beach without needing to bring anything
        with us.

        <br /><br />

        The property had an amazing beachfront location, allowing us to walk
        straight from our villa to the ocean. The hotel restaurant served fresh
        seafood and drinks, which made it convenient to enjoy great meals without
        needing transportation. The front desk was also extremely helpful with
        arranging taxis whenever we wanted to explore other parts of the island.

        <br /><br />

        Splitting the villa between four people made the stay even more affordable
        while still feeling like a luxury island escape.
    </>
),

    photos:[
        "/roatan/6.1.jpg",
        "/roatan/19.jpg",
        "/roatan/20.jpg"
    ]
},
days: [

{
    title: "Arrival + West Bay Beach + Local Food",

    description: [
        <>
            We landed early Saturday morning after a nonstop United flight from Houston,
            grabbed a taxi to{" "}
            <a 
                href="https://arcaroatan.com/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Arca Hotel
            </a>
            , and immediately changed into swimsuits. One of the biggest reasons we loved
            this trip was how little PTO it required. By planning around a long weekend
            and using points instead of cash, we turned just two vacation days into a
            Caribbean escape.
        </>,

        <>
            After checking into{" "}
            <a 
                href="https://arcaroatan.com/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Arca Hotel
            </a>
            , we walked over to Ricas Pupusas al Paso Roatán for lunch. The pupusas
            were one of our favorite meals of the trip. It was affordable, authentic,
            and conveniently located within walking distance of our hotel.
        </>,

        <>
            We spent the rest of the afternoon relaxing at West Bay Beach, swimming in
            crystal-clear water, and watching one of the island's incredible sunsets.
            Since we were staying near West Bay, we never felt the need to rent a car
            and were able to explore most places nearby on foot or by taxi.
        </>,

        <>
            That night, we got ready and headed out to experience Roatán's nightlife.
            We took a taxi to Splash Inn for dinner before continuing the night at
            Frank's Hideaway Bar. It was the perfect first night on the island.
            We had great food, good drinks, and a fun introduction to the local
            atmosphere before the rest of our adventures began.
        </>
    ],

    photos:[
        "/roatan/1.jpg",
        "/roatan/18.jpg",
        "/roatan/2.jpg",
        "/roatan/3.jpg",
        "/roatan/6.jpg",
        "/roatan/5.5.jpg",
    ]
},

    {
        title:"Beach Day + Island Dining",
        description:[
    `Our second day was all about slowing down and enjoying island life.
    We spent most of the day relaxing at West Bay Beach, swimming, snorkeling,
    and enjoying the views without rushing from activity to activity.`,

    `For lunch we stopped by Gypsy Restaurant & Cocktails, which had an amazing
    three-lobster special during our visit. It was an incredible value and
    definitely something we'd recommend checking out while visiting Roatán.`,

    `While relaxing on the beach, someone approached us advertising banana boat
    rides. For only $5 per person, we decided to do it spontaneously, and it ended
    up being one of those random travel moments that became a favorite memory.
    Sometimes the best experiences are the ones you don't plan.`,

    `For dinner, we walked to Alera, a restaurant located inside another hotel
    nearby. The ceviche was incredible and ended up being one of our favorite
    meals of the entire trip. Being able to walk to amazing restaurants from
    Arca Hotel made the location extremely convenient.`
],
        photos:[
            "/roatan/4.jpg",
            "/roatan/6.9.jpg",
            "/roatan/6.8.jpg",
            "/roatan/6.7.jpg",
            "/roatan/7.8.jpg",
            "/roatan/7.7.png",
            "/roatan/7.jpg",
            "/roatan/6.jpg",
            "/roatan/8.jpg",
        ]
    },


{
    title:"Snorkeling on a Private Boat",

    description:[

        <>
            We saved the biggest adventure for our final day, which was a private boat charter
            with{" "}
            <a
                href="https://www.tripadvisor.com/Attraction_Review-g292019-d7267438-Reviews-Jackson_Marine_Adventures-Roatan_Bay_Islands.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Jackson Marine Adventures
            </a>
            . The two brothers who run the tours were incredibly welcoming, funny, and
            made the entire experience unforgettable.
        </>,


        <>
            Since we purchased alcohol at Duty Free before arriving, we were able to
            bring our own drinks onboard while spending the day snorkeling beautiful
            coral reefs with our own private guide.
        </>,


        <>
            One tip we highly recommend: bring a portable speaker and create your own
            boat playlist before the trip. Having your favorite songs playing while
            cruising through the Caribbean made the experience feel even more special.
        </>,


        <>
            Scheduling the boat excursion on our last day ended up working perfectly.
            After spending hours snorkeling, swimming, and being out on the water,
            we were completely exhausted (in the best way possible) and ready to head
            straight to the airport for our afternoon flight back to Houston.
        </>

    ],

    photos:[
        "/roatan/11.jpg",
        "/roatan/12.jpg",
        "/roatan/13.jpg",
        "/roatan/14.jpg",
        "/roatan/15.jpg",
        "/roatan/16.jpg",
        "/roatan/17.jpg"
    ]
},

],


tips: [

    "Redeeming 30,000 Capital One miles for a nearly $1,000 flight gave us over 3¢ per point in value.",

    "Plan this trip over a long weekend—you only need two vacation days.",

    "Bring cash before arriving since there is no Uber and most taxis only accept cash.",

    "Avoid airport ATM fees by withdrawing cash before your trip.",

    "Skip the rental car if you're staying near West Bay.",

    "Ricas Pupusas al Paso is a must-try for affordable and authentic local food.",

    "Alera had some of the best ceviche we tried and was conveniently walkable from Arca Hotel.",

    "Check out Gypsy Restaurant & Cocktails for their lobster specials.",

    "Book Jackson Marine Adventures for a private snorkeling experience.",

    "Bring a portable speaker and your own boat playlist—the little details make the day unforgettable."

],

        verdict:
            "Roatán is one of our favorite Weekendmax destinations. With just two PTO days, we were able to enjoy nearly four days in the Caribbean, stay at a beautiful beachfront hotel, snorkel some of the clearest water we've ever seen, and save hundreds of dollars by using points instead of cash. If you're looking for a tropical getaway that feels much longer than a weekend, Roatán is hard to beat."

    };

    return <ItineraryTemplate trip={trip} />;

}