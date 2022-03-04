import CategoryCard from "../Components/CategoryCard"
import OneCategory from "../Components/OneCategory"

function OneCategory() {

    const categories = getCategoryData()

    const categoryCard = categories.map((category, index) => {
        // const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        // const addToCartButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4" >
                <CategoryCard productImage={fragrence.productImage}
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
                <OneCategory />
            </div>
            <div className="row">
                <div className="col-3 bg-primary">
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default OneCategory