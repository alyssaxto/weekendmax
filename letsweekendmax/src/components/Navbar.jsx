import { Link } from "react-router-dom";


export default function Navbar(){

return(

<nav className="navbar">

    <div className="logo">
        ✈ Let's Weekendmax
    </div>


    <div className="links">

        <Link to="/">
            Home
        </Link>


        <Link to="/destinations">
            Destinations
        </Link>


        <Link to="/deals">
            Flight Deals
        </Link>


        <Link to="/about">
            About
        </Link>

    </div>


</nav>

)

}