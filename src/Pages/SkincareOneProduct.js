import { Link, useParams } from "react-router-dom"
import getSkicareByIndex from "../API/getSkicareByIndex"
import FancyBoxImage from "../Components/FancyBoxImage"

function SkincareOneProduct() {

    const { index } = useParams()
    const skincare = getSkicareByIndex(index)

    return (
        <div className="container mt-4">
            <h5>
                <Link to="/skincare">Back</Link>
            </h5>

            <div className="row d-flex justify-content-center">

                <div className="col-md-5 left">
                    <div className="fancy-box-section">

                        <div className="row my-3 justify-content-center">
                            <div className="col-9 pb-3">
                                <FancyBoxImage fancyImage={skincare.productImage} />
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={skincare.fbimage1} />
                                    </div>
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={skincare.fbimage2} />
                                    </div>
                                </div>
                                <div className="row d-flex my-3 justify-content-center">
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={skincare.fbimage3} />
                                    </div>
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={skincare.fbimage4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 right product-description-section mt-4">
                    <div className="card one-product-card">
                        <div className="card-body">
                            <h5 className="card-title">{skincare.brand}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{skincare.title}</h6>
                            <p className="card-text">{skincare.description}</p>
                            <p className="card-text"><span className="regular-price"><i className="bi bi-currency-euro"></i>{skincare.regularPrice} </span><span>Regular price</span> <i className="bi bi-tag"></i></p>
                            <p className="card-text"> <span className="member-price"><i className="bi bi-currency-euro"></i>{skincare.memberPrice} </span> <span>Member price</span> <i className="bi bi-emoji-heart-eyes"></i></p>
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

export default SkincareOneProduct