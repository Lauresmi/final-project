import ProductCard from "../Components/ProductCard"
import getSkinCareData from "../API/getSkinCareData"
import getCategoryData from "../API/getCategoryData"
import { Link } from "react-router-dom"

function Skincare() {

    const skincareProductsCard = getSkinCareData()

    const skincareCard = skincareProductsCard.map((skincareProduct, index) => {
        // const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        // const addToCartButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4" >
                <ProductCard productImage={skincareProduct.productImage}
                    brand={skincareProduct.brand}
                    description={skincareProduct.description}
                    regularPrice={skincareProduct.regularPrice}
                    description={skincareProduct.description}
                    memberPrice={skincareProduct.memberPrice} />
                <Link to={`/skincare/${index}`}>{skincareProduct.brand}</Link>
            </div >
        )
    })

    const skinCareCategory = getCategoryData()
    const categoryList = [];

    for (const i in skinCareCategory) {
        const category = skinCareCategory[i]

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
            <div className="row mt-2">
                {categoryList[0]}
            </div>
            <div className="row product-row text-center">
                {skincareCard}
            </div>
        </div>
    )
}

export default Skincare