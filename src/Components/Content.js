import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Makeup from "../Pages/Makeup";
import Perfumes from "../Pages/Perfumes";
import Skincare from "../Pages/Skincare";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfumes" element={<Perfumes />} />
                <Route path="/skincare" element={<Skincare />} />
                <Route path="/makeup" element={ <Makeup />} />
            </Routes>
        </div>
    )
}

export default Content