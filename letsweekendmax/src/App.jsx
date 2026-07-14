import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Destinations from "./pages/Destinations.jsx";
import Deals from "./pages/Deals.jsx";


function App(){

return (

<>

<Navbar />
      <ScrollToTop />


<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/destinations" element={<Destinations />} />

<Route path="/deals" element={<Deals />} />

</Routes>


<Footer />


</>

)

}

export default App;