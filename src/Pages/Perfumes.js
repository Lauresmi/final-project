import ProductCard from "../Components/ProductCard"
import getFragrencesData from "../API/getFragrencesData"
import getCategoryData from "../API/getCategoryData"
import { Link } from "react-router-dom"
import "./Products.css"

function Perfumes() {

    const fragrances = getFragrencesData()

    const fragrencesCard = fragrances.map((fragrence, index) => {
        // const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        // const addToCartButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 product-card" key={index}>
                <ProductCard productImage={fragrence.productImage}
                    brand={fragrence.brand}
                    title={fragrence.title}
                    description={fragrence.description}
                    regularPrice={fragrence.regularPrice}
                    description={fragrence.description}
                    memberPrice={fragrence.memberPrice}
                />
                <Link to={`/perfumes/${index}`}>{fragrence.title}</Link>
            </div >
        )
    })

    const perfumeCategory = getCategoryData()
    const categoryList = [];

    for (const i in perfumeCategory) {
        const category = perfumeCategory[i]

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
                <form className="d-flex mt-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="mt-3">
                {categoryList[1]}
            </div>
            <div className="row product-row m-auto text-center">
                    {fragrencesCard}
            </div>
        </div>
    )
}

export default Perfumes