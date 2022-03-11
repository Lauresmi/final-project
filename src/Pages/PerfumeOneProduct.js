import { Link, useParams } from "react-router-dom"
import getPerfumeByIndex from "../API/getPerfumeByIndex"
import FancyBoxImage from "../Components/FancyBoxImage"
import "./Products.css"

function PerfumeOneProduct() {

    const { index } = useParams()
    const perfume = getPerfumeByIndex(index)

    return (
        <div className="container mt-4">
            <h5>
                <Link to="/perfumes">Back</Link>
            </h5>

            <div className="row d-flex justify-content-center">

                <div className="col-md-5 left">
                    <div className="fancy-box-section">

                        <div className="row my-3 justify-content-center">
                            <div className="col-9 pb-3">
                                <FancyBoxImage fancyImage={perfume.productImage} />
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={perfume.fbimage1} />
                                    </div>
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={perfume.fbimage2} />
                                    </div>
                                </div>
                                <div className="row d-flex my-3 justify-content-center">
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={perfume.fbimage3} />
                                    </div>
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={perfume.fbimage4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 right product-description-section mt-4">
                    <div className="card one-product-card">
                        <div className="card-body">
                            <h5 className="card-title">{perfume.brand}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{perfume.title}</h6>
                            <p className="card-text">{perfume.description}</p>
                            <p className="card-text"><span className="regular-price"><i class="bi bi-currency-euro"></i>{perfume.regularPrice} </span><span>Regular price</span> <i class="bi bi-tag"></i></p>
                            <p className="card-text"> <span className="member-price"><i class="bi bi-currency-euro"></i>{perfume.memberPrice} </span> <span>Member price</span> <i class="bi bi-emoji-heart-eyes"></i></p>
                        </div>
                        <div>
                            <button className="btn text-white product-btn m-2">Add to bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfumeOneProduct