import { Link, useParams } from "react-router-dom"
import getPerfumeByIndex from "../API/getPerfumeByIndex"
import FancyBoxImage from "../Components/FancyBoxImage"

function PerfumeOneProduct() {

    const { index } = useParams()
    const perfume = getPerfumeByIndex(index)

    return (
        <div className="container mt-4">
            <h5>
                <Link to="/">Back</Link>
            </h5>

            <div className="row">

                <div className="col left">
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

                <div className="col right product-description-section mt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{perfume.brand}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{perfume.title}</h6>
                            <p className="card-text">{perfume.description}</p>
                            <h6 className="card-subtitle mb-2 text-muted"><i class="bi bi-currency-euro"></i>{perfume.regularPrice}</h6>
                            <h6 className="card-subtitle mb-2 text-muted"> <i class="bi bi-currency-euro"></i>{perfume.memberPrice}</h6>

                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfumeOneProduct