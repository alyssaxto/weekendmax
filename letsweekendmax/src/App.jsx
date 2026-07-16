import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Itineraries from "./pages/Itineraries.jsx";
import Deals from "./pages/Deals.jsx";
import Iceland from "./pages/Iceland";
import Roatan from "./pages/Roatan";


function App(){

return (

<>

<Navbar />
<ScrollToTop />
<CustomCursor />

<Routes>
<Route 
    path="/iceland" 
    element={<Iceland />} 
/>
<Route 
    path="/Roatan" 
    element={<Roatan />} 
/>
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