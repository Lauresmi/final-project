import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";
import Makeup from "../Pages/Makeup";
import MakeupOneProduct from "../Pages/MakeupOneProduct";
import PerfumeOneProduct from "../Pages/PerfumeOneProduct";
import Perfumes from "../Pages/Perfumes";
import ProductCategories from "../Pages/ProductCategories";
import Register from "../Pages/Register";
import Skincare from "../Pages/Skincare";
import SkincareOneProduct from "../Pages/SkincareOneProduct";
import "./Content.css" 

function Content() {
    return (
        <div className="container-fluid general-container">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfumes" element={<Perfumes />} />
                <Route path="/perfumes/:index" element={ <PerfumeOneProduct/> } />

                <Route path="/skincare" element={<Skincare />} />
                <Route path="/skincare/:index" element={ <SkincareOneProduct /> } />

                <Route path="/makeup" element={ <Makeup />} />
                <Route path="/makeup/:index" element={ <MakeupOneProduct /> } />

                <Route path="/products" element={ <ProductCategories />} />
                <Route path="/about-us" element={ <AboutUs /> } />

                <Route path="/chat" element={ <Chat /> } />
                <Route path="/register" element={ <Register />} />
            </Routes>
        </div>
    )
}

export default Content