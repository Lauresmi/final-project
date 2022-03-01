import ProductCard from "../Components/ProductCard"
import getMakeupData from "../API/getMakeupData"

function Makeup() {

    const makeupProducts = getMakeupData()

    const makeupCard = makeupProducts.map((makeupProduct, index) => {
        // const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        // const addToCartButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4" >
                <ProductCard productImage={makeupProduct.productImage}
                    brand={makeupProduct.brand}
                    description={makeupProduct.description}
                    regularPrice={makeupProduct.regularPrice}
                    description={makeupProduct.description}
                    memberPrice={makeupProduct.memberPrice} />
            </div >
        )
    })

    return (
        <div>
            <div className="row">
                {/* Category component */}
            </div>
            <div className="row">
                {makeupCard}
            </div>
        </div>
    )
}

export default Makeup