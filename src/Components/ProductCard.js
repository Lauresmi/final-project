import "./OneProductPage.css" 

function ProductCard(props) {

    const { productImage, brand, title, description, regularPrice, memberPrice } = props

    return (
        <div className="card h-100">
            <img src={productImage} className="card-img-top p-3" alt="product-image" />
            <div className="card-body h-100">
                <h5 className="card-title">{brand}</h5>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{regularPrice} <span>Regular price</span></p>
                <p className="card-text">{memberPrice} <span>Member price</span></p>
            </div>
            <div className="">
                <button className="btn text-white product-btn m-2">Add to bag</button>
            </div>
        </div>
    )
}

export default ProductCard