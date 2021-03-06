import { Link } from "react-router-dom"
import logo from "../images/logo-red-lipstick.png"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div>
                    <Link className="nav-link nav-item" aria-current="page" to="/"><img src={logo} alt="logo-link" width="100" height="65"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-between" id="navbarScroll">

                    <div className="col-5">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li><Link className="nav-link nav-item active" aria-current="page" to="/">Home</Link></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://images.pexels.com/photos/2466669/pexels-photo-2466669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link className="dropdown-item" to="/products">All categories</Link></li>
                                    <li><hr className="dropdown-divider" /></li>

                                    <li><Link className="dropdown-item" to="/skincare">Skincare</Link></li>
                                    <li><Link className="dropdown-item" to="/perfumes">Perfumes</Link></li>
                                    <li><Link className="dropdown-item" to="/makeup">Make-up</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <li><Link className="nav-link" to="/chat">Chat</Link></li>
                            </li>
                            <li className="nav-item">
                                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/about-us">About us</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 d-flex ">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item text-center">
                                <a className="nav-link" href="https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"> <i className="bi bi-geo-alt"></i> <br /> Store finder</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="https://images.pexels.com/photos/2064110/pexels-photo-2064110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"> <i className="bi bi-person-heart"></i> <br />My account</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="https://images.pexels.com/photos/870827/pexels-photo-870827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"> <i className="bi bi-bag-heart"></i> <br />My bag</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header