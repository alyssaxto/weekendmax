import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Itineraries from "./pages/Itineraries.jsx";
import Deals from "./pages/Deals.jsx";


function App(){

return (

<>

<Navbar />
<ScrollToTop />
<CustomCursor />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/itineraries" element={<Itineraries />} />

<Route path="/flightdeals" element={<Deals />} />

</Routes>


<Footer />


</>

)

}

export default App;