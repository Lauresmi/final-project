import ProductCard from "../Components/ProductCard"
import getFragrencesData from "../API/getFragrencesData"

function Perfumes() {

    const fragrances = getFragrencesData()

    const fragrencesCard = fragrances.map((fragrence, index) => {
        // const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        // const addToCartButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4" >
                <ProductCard productImage={fragrence.productImage}
                    brand={fragrence.brand}
                    title={fragrence.title}
                    description={fragrence.description}
                    regularPrice={fragrence.regularPrice}
                    description={fragrence.description}
                    memberPrice={fragrence.memberPrice} />
            </div >
        )
    })

    return (
        <div>
            <div className="row">
                {/* Category component */}
            </div>
            <div className="row">
                {fragrencesCard}
            </div>
        </div>
    )
}

export default Perfumes