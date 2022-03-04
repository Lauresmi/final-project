import { Link, useParams } from "react-router-dom"
import getMakeupByIndex from "../API/getMakeupByIndex"
import FancyBoxImage from "../Components/FancyBoxImage"

function MakeupOneProduct() {

    const { index } = useParams()
    const makeup = getMakeupByIndex(index)

    return (
        <div className="container mt-4">
            <h5>
                <Link to="/makeup">Back</Link>
            </h5>

            <div className="row">

                <div className="col left">
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

                <div className="col right product-description-section mt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{makeup.brand}</h5>
                            <p className="card-text">{makeup.description}</p>
                            <h6 className="card-subtitle mb-2 text-muted"><i class="bi bi-currency-euro"></i>{makeup.regularPrice}</h6>
                            <h6 className="card-subtitle mb-2 text-muted"> <i class="bi bi-currency-euro"></i>{makeup.memberPrice}</h6>

                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeupOneProduct