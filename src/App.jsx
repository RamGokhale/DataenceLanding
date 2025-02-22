import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ImageCarousel from "./Component/imageCarousel";

const Home = () => <h1></h1>;
const About = () => <h1></h1>;
const Products = () => <h1></h1>;
const Contact = () => <h1></h1>;

function App() {
    return (
        <>
            <Navbar />

            
         
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
