import "./OneProductPage.css"
import { Link } from "react-router-dom"

function ProductCard(props) {

    const { productImage, brand, title, size, description, regularPrice, memberPrice, url } = props

    return (
        <div className="card product-card-general h-100">
            <img src={productImage} className="card-img-top p-3" alt="product-image" />
            <div className="card-body h-100">
                <h5 className="card-title">{brand}</h5>
                <h5 className="card-title"><Link to={url}>{title}</Link></h5>
                <p className="card-text"><Link to={url}>{description}</Link></p>
                <p className="card-text">{size} <span></span></p>
                <p className="card-text">  <span className="regular-price"><i class="bi bi-currency-euro"></i>{regularPrice}</span> <span>Regular price</span> <i class="bi bi-tag"></i></p>
                <p className="card-text"> <span className="member-price"><i class="bi bi-currency-euro"></i>{memberPrice}</span> <span>Member price</span> <i class="bi bi-emoji-heart-eyes"></i></p>
            </div>
            <div>
                <button className="btn text-white product-btn mb-4">Add to bag</button>
            </div>
        </div>
    )
}

export default ProductCard