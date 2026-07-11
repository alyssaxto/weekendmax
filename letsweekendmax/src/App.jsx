import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Destinations from "./pages/Destinations.jsx";
import Deals from "./pages/Deals.jsx";

function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/deals" element={<Deals />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </>

  );

}

export default App;