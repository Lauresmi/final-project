import ProductCard from "../Components/ProductCard"
import getMakeupData from "../API/getMakeupData"
import getCategoryData from "../API/getCategoryData"
import { Link } from "react-router-dom"
import "./Products.css"

function Makeup() {

    const makeupProducts = getMakeupData()

    const makeupCard = makeupProducts.map((makeupProduct, index) => {
        // const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        // const addToCartButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 ml-2" key={index}>
                <ProductCard productImage={makeupProduct.productImage}
                    brand={makeupProduct.brand}
                    description={makeupProduct.description}
                    regularPrice={makeupProduct.regularPrice}
                    description={makeupProduct.description}
                    memberPrice={makeupProduct.memberPrice} />
                <Link to={`/makeup/${index}`}>{makeupProduct.brand}</Link>
            </div >
        )
    })

    const makeupCategory = getCategoryData()
    const categoryList = [];

    for (const i in makeupCategory) {
        const category = makeupCategory[i]

        categoryList.push(
            <div key={i}>
                <div className="text-justify">
                    <div className="row pb-3 mb-1 text-justify">
                        <div className="col-3 text-justify">
                            <img src={category.categoryImage} className="img-fluid" />
                        </div>
                        <div className="col-9 text-justify">
                            <h5 className="titles">{category.categoryTitle}</h5>
                            <p className="text-justify">{category.categoryDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <form className="d-flex mt-4">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="row mt-3">
                {categoryList[2]}
            </div>
            <div className="row product-row text-center">
                {makeupCard}
            </div>
        </div>
    )
}

export default Makeup