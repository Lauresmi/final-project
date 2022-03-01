import carimageikon from "../images/carimage1.jpg"
import carimagevalentino from "../images/carimage2.jpg"
import carimagegautier from "../images/carimage3.jpg"
import carimagedaisy from "../images/carimage4.jpg"
import carimagescent from "../images/carimage5.jpg"
import "./Carousel.css"

function Carousel() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">

                <div className="carousel-item active" data-bs-interval="10000">
                    <div class="card carousel-card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button className="btn btn-lg btn-primary">SHOP NOW</button>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src={carimageikon} class="card-img" alt="..." />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div class="card carousel-card mb-3">
                        <div class="row no-gutters">

                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button className="btn btn-lg btn-primary">SHOP NOW</button>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src={carimagevalentino} class="card-img" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div class="card carousel-card mb-3">
                        <div class="row no-gutters">

                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button className="btn btn-lg btn-primary">SHOP NOW</button>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src={carimagegautier} class="card-img d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div class="card carousel-card mb-3">
                        <div class="row no-gutters">

                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button className="btn btn-lg btn-primary">SHOP NOW</button>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src={carimagedaisy} class="card-img d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div class="card carousel-card mb-3">
                        <div class="row no-gutters">

                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button className="btn btn-lg btn-primary">SHOP NOW</button>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src={carimagescent} class="card-img d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel