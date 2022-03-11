import onebottle from "../images/carousel_image_2_final.jpg"
import escada from "../images/carousel_image_5_final.jpg"
import narcisso from "../images/carousel_image_4_final.jpg"
import escada2 from "../images/carousel_image_3_final.jpg"
import versacce from "../images/carousel_image_6_final.jpg"

function Carousel() {
    return (
        <div>
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
                        <div className="row">
                            <div className="col-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={narcisso} className="d-block w-100" alt="..." />
                                {/* <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row">
                            <div className="col-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={onebottle} className="d-block w-100" alt="..." />
                                {/* <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={escada} className="d-block w-100" alt="..." />
                                {/* <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title my-3">Escada</h5>
                                        <h6 class="card-subtitle mb-2 text-muted my-3">Especially Escada</h6>
                                        <p class="card-text lh-lg my-3">This luxurious and bright fragrance is floral and subtle. It is inspired by the woman who radiates femininity and lights up the room with her smile. Ready to escape to this summer’s most iconic destination? Be transported to Tokyo with the Escada Cherry in Japan Limited Edition Eau de Toilette for women! A radiant fragrance that opens with a sparkling Cherry accord, combined with natural Jasmine petals melting into an addictive Tonka base. Floral and subtle. It is inspired by the woman who radiates femininity and lights up the room with her smile. Ready to escape to this summer’s most iconic destination? Be transported to Tokyo with the Escada Cherry in Japan Limited Edition Eau de Toilette for women! A radiant fragrance that opens with a sparkling Cherry accord, combined with natural Jasmine petals melting into an addictive Tonka base.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                    <button className="btn">Add to Wishlist</button>
                                    <button className="btn">Buy now</button>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={escada2} className="d-block w-100" alt="..." />
                                {/* <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title my-3">Versace</h5>
                                        <h6 class="card-subtitle mb-2 text-muted my-3">Eros Flame</h6>
                                        <p class="card-text lh-lg my-3">A fragrance that strikes you right through the heart bearing an important message for new generations about the dignity of love and the power of diversity. Versace Eros Flame is a fragrance for a strong, Passionate, self-confident man who is deeply in touch with his emotions.The olfactory notes of Versace Eros Flameare characterised by strong contrasts in which the mostnoble and elegant ingredients enrich and enhanceone another - from lemon tangerine, orange, black pepper, wild rosemary, pepperwood, geranium, rose facet, cedar, patchouli, tonka beans and vanilla. A persistent and enveloping fragrance that is simultaneously virile, an ode to passion and a celebration of sensuous rapture.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>

                                    </div>
                                    <div className="row d-flex">
                                        <div className="col-7">
                                            <button className="btn text-white product-btn mb-4">Add to Wishlist</button>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn text-white product-btn mb-4">Buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={versacce} className="d-block w-100" alt="..." />
                                {/* <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div> */}
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
        </div>
    )
}

export default Carousel