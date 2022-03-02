import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";
import Makeup from "../Pages/Makeup";
import Perfumes from "../Pages/Perfumes";
import ProductCategories from "../Pages/ProductCategories";
import Skincare from "../Pages/Skincare";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfumes" element={<Perfumes />} />
                <Route path="/skincare" element={<Skincare />} />
                <Route path="/makeup" element={ <Makeup />} />
                <Route path="/products" element={ <ProductCategories />} />
                <Route path="/aboutus" element={ <AboutUs /> } />

            </Routes>
        </div>
    )
}

export default Content