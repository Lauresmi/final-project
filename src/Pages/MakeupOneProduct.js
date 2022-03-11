import { Link, useParams } from "react-router-dom"
import getMakeupByIndex from "../API/getMakeupByIndex"
import FancyBoxImage from "../Components/FancyBoxImage"
import "./Products.css"

function MakeupOneProduct() {

    const { index } = useParams()
    const makeup = getMakeupByIndex(index)

    return (
        <div className="container mt-4">
            <h5>
                <Link to="/makeup">Back</Link>
            </h5>

            <div className="row d-flex justify-content-center">

                <div className="col-md-5 left">
                    <div className="fancy-box-section">

                        <div className="row my-3 justify-content-center">
                            <div className="col-9 pb-3">
                                <FancyBoxImage fancyImage={makeup.productImage} />
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={makeup.fbimage1} />
                                    </div>
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={makeup.fbimage2} />
                                    </div>
                                </div>
                                <div className="row d-flex my-3 justify-content-center">
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={makeup.fbimage3} />
                                    </div>
                                    <div className="col-4">
                                        <FancyBoxImage fancyImage={makeup.fbimage4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 right product-description-section mt-4">
                    <div className="card one-product-card">
                        <div className="card-body">
                            <h5 className="card-title">{makeup.brand}</h5>
                            <p className="card-text">{makeup.description}</p>
                            <p className="card-text"><span className="regular-price"><i class="bi bi-currency-euro"></i>{makeup.regularPrice} </span><span>Regular price</span> <i class="bi bi-tag"></i></p>
                            <p className="card-text"> <span className="member-price"><i class="bi bi-currency-euro"></i>{makeup.memberPrice} </span> <span>Member price</span> <i class="bi bi-emoji-heart-eyes"></i></p>
                        </div>
                    </div>
                    <div>
                        <button className="btn text-white product-btn m-2">Add to bag</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeupOneProduct