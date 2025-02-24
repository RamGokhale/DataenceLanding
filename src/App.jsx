import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import AboutUs from "./Component/AboutUs";
import Products from "./Component/Products";
import Location from "./Component/Location";

function App() {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/product" element={<Products/>}/>
                <Route path="/contact" element={<Location/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        <Footer />  
        </>
    );
}

export default App;
