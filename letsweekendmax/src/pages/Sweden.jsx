import ItineraryTemplate from "../components/ItineraryTemplate";

export default function Stockholm() {

    const trip = {

        cover: "alyssa/sweden/4.jpg",

        destination: "Stockholm, Sweden",

        duration: "3 Days",

        season: "Summer",

        totalCost: "Airbnb Split Between 6",

        points: {
            type: "cash",
            value: "$600-$700"
        },

        travelers: "6 People",

        flightLink: "",

        description:
            "We spent three days exploring Stockholm, Sweden, from historic cobblestone streets and colorful waterfront buildings to island day trips, museums, flea markets, and sunset picnics. Stockholm ended up being the perfect mix of history, nature, food, and city life. We explored Gamla Stan, took a ferry through the Stockholm archipelago to Vaxholm, visited the famous Vasa Museum, hunted for vintage finds, and ended the trip with a concert. With an unlimited public transportation pass and a little planning, we were able to see a lot of the city without needing a car.",

        costs: [

            {
                category: "Airport Transportation",
                description:
                    "Roundtrip transportation between Stockholm Arlanda Airport and Stockholm Central Station using the Arlanda Express.",
                price: "~$40 Roundtrip"
            },

            {
                category: "Public Transportation",
                description:
                    "Unlimited access to Stockholm's metro, buses, trams, commuter trains, and eligible ferries.",
                price: "~$35 for 72 Hours"
            },

            {
                category: "Accommodation",
                description:
                    "Airbnb stay in Bromma, about 30–40 minutes from central Stockholm by public transportation.",
                price: "Split Between Travelers"
            },

            {
                category: "Activities",
                description:
                    "Museum visits, exploring Gamla Stan, a day trip to Vaxholm, swimming, sightseeing, and exploring Stockholm's famous metro art.",
                price: "Varies"
            }

        ],
hotel: {
    name: "Stockholm Airbnb",
    link: "",

    description: (
        <>
            We stayed in an Airbnb in Bromma, a residential area outside of
            central Stockholm. While it took around 30–40 minutes by train to
            reach downtown, the location gave us a comfortable place to relax
            after spending long days exploring the city.

            <br /><br />

            Our Airbnb was located near public transportation, which made it
            easy to travel between Bromma and central Stockholm. Since Stockholm
            has an extensive metro, tram, bus, and ferry system, we never felt
            like we needed to rent a car.

            <br /><br />

            Staying outside of the busiest tourist areas gave us more space to
            relax between activities. We used the Airbnb as a place to get ready
            for the concert, unwind after exploring the city, and enjoy food and
            drinks before heading back out.

            <br /><br />

            If you're planning a similar trip, just keep in mind that traveling
            between downtown Stockholm and the Airbnb can take around 30–40
            minutes, so it's worth grouping activities by neighborhood when
            planning your itinerary.
        </>
    ),

    photos: [
        "/alyssa/sweden/5.jpg",
        "/alyssa/sweden/6.jpg",
        "/alyssa/sweden/7.jpg",
        "/alyssa/sweden/8.jpg",
        "/alyssa/sweden/9.jpg",
        "/alyssa/sweden/10.jpg",
        "/alyssa/sweden/11.jpg"
    ],

    video: "/alyssa/stockholm.mp4"
},

        days: [

            {
                title: "Gamla Stan + Stockholm Sunsets",

                description: [

                    <>
                        We arrived at Stockholm Central Station around 9 AM and started
                        the trip with breakfast at Komet Café, just a short walk from
                        the station. Since we had a full day ahead of us, it was the
                        perfect place to grab coffee and something to eat before heading
                        into the city.
                    </>,

                    <>
                        Our first stop was Gamla Stan, Stockholm's historic Old Town.
                        We spent the morning wandering through narrow cobblestone streets,
                        colorful buildings, and small shops while taking in some of the
                        city's most iconic views.
                    </>,

                    <>
                        Around midday, we watched the changing of the Royal Guard before
                        continuing through Gamla Stan and walking by Storkyrkan. Even
                        without a strict itinerary, this area was one of our favorite
                        places to simply explore and see where the streets took us.
                    </>,

                    <>
                        For lunch, we stopped at Restaurang Tradition before heading over
                        to Stockholm City Hall. We spent the afternoon walking around the
                        area and enjoying the waterfront before finally heading to our
                        Airbnb to check in and relax.
                    </>,

                    <>
                        That evening, we packed up a picnic and headed to Ivar Lo's Park
                        for wine and sunset views over Stockholm. It ended up being the
                        perfect way to slow down after a full first day and watch the city
                        transition from afternoon into night.
                    </>

                ],

                photos: [
                    {
    src:"/alyssa/sweden/1.jpg",
},
                    {
    src:"/alyssa/sweden/4.jpg",
},
                    {
    src:"/alyssa/sweden/12.jpg",
},
                    {
    src:"/alyssa/sweden/13.jpg",
},
                    {
    src:"/alyssa/sweden/14.jpg",
},
                    {
    src:"/alyssa/sweden/15.jpg",
},
                    {
    src:"/alyssa/sweden/16.jpg",
},
                    {
    src:"/alyssa/sweden/17.jpg",
},
                    {
    src:"/alyssa/sweden/19.jpg",
},

                ]
            },

            {
                title: "A Day Trip to Vaxholm + Stockholm Nightlife",

                description: [

                    <>
                        We woke up early and headed to Strömkajen to catch a ferry out
                        to Vaxholm, a small island town in the Stockholm archipelago.
                        The ferry ride itself was one of the highlights of the day.
                        Watching Stockholm slowly disappear behind us while passing
                        islands and waterfront homes made the journey feel like an
                        experience instead of just transportation.
                    </>,

                    <>
                        Once we arrived in Vaxholm, we spent the morning walking around
                        the Old Town and exploring the small streets and waterfront.
                        It was a completely different atmosphere from central Stockholm
                        and made for a peaceful escape from the city.
                    </>,

                    <>
                        We stopped at Vaxholms Hembygdsgårds Café for lunch and snacks
                        before spending the afternoon swimming along the coast and
                        relaxing on the rocks. Since we wanted to be back in Stockholm
                        later that afternoon, we headed back around 2 PM.
                    </>,

                    <>
                        After returning to Stockholm, we went back to the Airbnb to
                        relax and get ready for the evening. Later, we headed back into
                        the city to catch sunset at Munkbrohamnen along the waterfront.
                    </>,

                    <>
                        For dinner, we went to Corner Club before
                        heading out for drinks and potentially experiencing Stockholm's
                        nightlife. One thing to keep in mind is that many clubs in
                        Stockholm have strict age requirements and dress codes, so it's
                        worth checking the venue and guest list ahead of time.
                    </>

                ],

                photos: [
                    {
    src:"/alyssa/sweden/18.jpg",
},
                    {
    src:"/alyssa/sweden/23.jpg",
},
                    {
    src:"/alyssa/sweden/24.jpg",
},
                    {
    src:"/alyssa/sweden/25.jpg",
},
                    {
    src:"/alyssa/sweden/21.jpg",
},
                    {
    src:"/alyssa/sweden/22.jpg",
},
                    {
    src:"/alyssa/sweden/2.jpg",
},
  {
    src:"/alyssa/sweden/28.jpg",
},
                ]
            },

            {
                title: "Vintage Shopping + Museums + Concert Night",

                description: [

                    <>
                        We kept our final morning a little slower before heading out to
                        explore more of Stockholm. Our first stop was Mariatorget, where
                        we looked through a flea market filled with vintage fashion,
                        antiques, and unique finds. The surrounding Södermalm area was
                        also fun to explore, with plenty of cafés, shops, and places to
                        stop for fika.
                    </>,

                    <>
                        We spent time exploring Djurgården, walking
                        through the parks and stopping at cafés before heading back to
                        the Airbnb. Since we had a concert that evening, we decided to
                        save time by taking a rideshare back instead of relying entirely
                        on public transportation.
                    </>,

                    <>
                        We spent the evening getting ready, having dinner and drinks at
                        the Airbnb, and then heading out to the arena for the concert.
                        The venue was about 40 minutes away by train, so we made sure to
                        leave early enough to get there before the doors opened.
                    </>,

                    <>
                        It was the perfect way to end our Stockholm trip. After three
                        days of exploring historic neighborhoods, island towns, museums,
                        waterfront sunsets, and local food, finishing the trip with a
                        concert made the entire weekend feel even more special.
                    </>

                ],

                photos: [
                    {
    src:"/alyssa/sweden/20.jpg",
},
                    {
    src:"/alyssa/sweden/1.jpg",
},
                    {
    src:"/alyssa/sweden/4.jpg",
},
                    {
    src:"/alyssa/sweden/3.jpg",
},
  {
    src:"/alyssa/sweden/26.jpg",
},
  {
    src:"/alyssa/sweden/27.jpg",
},
  {
    src:"/alyssa/sweden/29.jpg",
},
  {
    src:"/alyssa/sweden/30.jpg",
},
                ]
            }

        ],

        tips: [

            "Take the Arlanda Express between Stockholm Arlanda Airport and Central Station for a quick and easy airport transfer.",

            "Get a 72-hour SL Travel Card if you plan on using public transportation frequently throughout your trip.",

            "Stockholm's metro stations are famous for their artwork, so leave extra time to explore a few of them.",

            "Plan your activities by neighborhood since traveling between downtown and outer neighborhoods can take 30–40 minutes.",

            "Take a ferry out to Vaxholm for a scenic and easy day trip into the Stockholm archipelago.",

            "Bring a swimsuit if you're visiting in the summer—swimming along the coast and on the rocks is a great way to experience Stockholm.",

            "Try a cardamom bun and coffee for fika while exploring the city.",

            "Stockholm is largely cash-free, so credit cards are accepted almost everywhere.",

            "Alcohol is not sold in regular grocery stores. If you want wine or drinks for a picnic or Airbnb, plan ahead and visit Systembolaget before it closes.",

            "Many Stockholm clubs have strict dress codes and age requirements, so check the venue before making plans.",

            "If you're traveling with luggage before check-in, Stockholm Central Station has luggage storage lockers that can be shared to save money.",

            "Don't skip Gamla Stan early in the morning—it is one of the best areas to explore before the streets get busy."

        ],

        verdict:
            "Stockholm was the perfect combination of city exploring, history, nature, and memorable experiences. In just three days, we walked through the colorful streets of Gamla Stan, took a ferry through the archipelago, swam along the coast, explored museums and vintage markets, watched sunsets over the city, and finished the trip with a concert. If you want a European city that gives you both an exciting city experience and easy access to nature, Stockholm is definitely worth adding to your list."

    };

    return <ItineraryTemplate trip={trip} />;

}