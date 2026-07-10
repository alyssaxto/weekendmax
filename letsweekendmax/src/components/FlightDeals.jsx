import "./FlightDeals.css";

export default function FlightDeals(){

    return (

        <section className="flight-deals">

            <div className="flight-header">

                <h2>
                    Discover the best flights with points
                </h2>

                <p>
                    Find award flights, compare points programs,
                    and plan your next adventure for less.
                </p>

            </div>


            <div className="flight-search">


                {/* TRIP TYPE */}
                <div className="search-field">

                    <label>
                        Trip Type
                    </label>

                    <select>

                        <option>
                            Round Trip
                        </option>

                        <option>
                            One Way
                        </option>

                        <option>
                            Multi City
                        </option>

                    </select>

                </div>



                {/* FROM */}
                <div className="search-field">

                    <label>
                        From
                    </label>

                    <select>

                        <option>
                            Houston (IAH)
                        </option>

                        <option>
                            Miami (MIA)
                        </option>

                        <option>
                            New York (JFK)
                        </option>

                        <option>
                            Los Angeles (LAX)
                        </option>

                    </select>

                </div>



                {/* TO */}
                <div className="search-field">

                    <label>
                        To
                    </label>

                    <select>

                        <option>
                            Destination
                        </option>

                        <option>
                            Tokyo (NRT)
                        </option>

                        <option>
                            London (LHR)
                        </option>

                        <option>
                            Paris (CDG)
                        </option>

                        <option>
                            Rome (FCO)
                        </option>

                    </select>

                </div>



                {/* LEAVE */}
                <div className="search-field">

                    <label>
                        Leave
                    </label>

                    <input
                        type="date"
                    />

                </div>



                {/* RETURN */}
                <div className="search-field">

                    <label>
                        Return
                    </label>

                    <input
                        type="date"
                    />

                </div>



                {/* PASSENGERS */}
                <div className="search-field">

                    <label>
                        Passengers
                    </label>

                    <select>

                        <option>
                            1 Passenger
                        </option>

                        <option>
                            2 Passengers
                        </option>

                        <option>
                            3 Passengers
                        </option>

                        <option>
                            4 Passengers
                        </option>

                    </select>

                </div>



                {/* CABIN */}
                <div className="search-field">

                    <label>
                        Cabin
                    </label>

                    <select>

                        <option>
                            Economy
                        </option>

                        <option>
                            Premium Economy
                        </option>

                        <option>
                            Business
                        </option>

                        <option>
                            First Class
                        </option>

                    </select>

                </div>



                {/* POINTS PROGRAM */}
                <div className="search-field">

                    <label>
                        Points Program
                    </label>

                    <select>

                        <option>
                            All Programs
                        </option>

                        <option>
                            Chase Ultimate Rewards
                        </option>

                        <option>
                            Amex Membership Rewards
                        </option>

                        <option>
                            Capital One Miles
                        </option>

                        <option>
                            Citi ThankYou Points
                        </option>

                    </select>

                </div>



                {/* AIRLINE */}
                <div className="search-field">

                    <label>
                        Airline
                    </label>

                    <select>

                        <option>
                            All Airlines
                        </option>

                        <option>
                            United
                        </option>

                        <option>
                            Delta
                        </option>

                        <option>
                            American Airlines
                        </option>

                        <option>
                            Air Canada
                        </option>

                    </select>

                </div>



                {/* SEARCH BUTTON */}
                <button className="search-button">

                    Search Deals ✈

                </button>


            </div>


        </section>

    );

}