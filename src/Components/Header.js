import { Link } from "react-router-dom"
import logo from "../images/logo-red-lipstick.png"

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

                <div>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="100" height="65" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>

                <div className="collapse navbar-collapse justify-content-between" id="navbarScroll">

                    <div className="col-5">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li><Link className="nav-link nav-item active" aria-current="page" to="/">Home</Link></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link className="dropdown-item" to="/perfumes">Perfumes</Link></li>
                                    <li><Link className="dropdown-item" to="/skincare">Skin care</Link></li>
                                    <li><Link className="dropdown-item" to="/makeup">Make-up</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Sale items</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/aboutus">About us</Link></li>
                        </ul>
                    </div>

                    <div className="col-3 d-flex ">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"> <i class="bi bi-geo-alt"></i> <br /> Store finder</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"> <i class="bi bi-person-heart"></i> <br />My account</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"> <i class="bi bi-bag-heart"></i> <br />My bag</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header