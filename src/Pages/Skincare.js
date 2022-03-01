import ProductCard from "../Components/ProductCard"
import getSkinCareData from "../API/getSkinCareData"

function Skincare() {

    const skincareProducts = getSkinCareData()

    const skincareCard = skincareProducts.map((skincareProduct, index) => {
        // const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        // const addToCartButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4" >
                <ProductCard productImage={skincareProduct.productImage}
                    brand={skincareProduct.brand}
                    description={skincareProduct.description}
                    regularPrice={skincareProduct.regularPrice}
                    description={skincareProduct.description}
                    memberPrice={skincareProduct.memberPrice} />
            </div >
        )
    })

    return (
        <div>
            <div className="row">
                {/* Category component */}
            </div>
            <div className="row">
                {skincareCard}
            </div>
        </div>
    )
}

export default Skincare