import ProductCard from "../Components/ProductCard"
import getSkinCareData from "../API/getSkinCareData"
import getCategoryData from "../API/getCategoryData"
import { Link } from "react-router-dom"
import { useState } from "react";
import "./Products.css"

function Skincare() {

    const skincareProductsCard = getSkinCareData()
    const [filter, setFilter] = useState("");

    const searchText = (event) => {
        setFilter(event.target.value);
    };

    let dataSearch = skincareProductsCard.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        );
    });
    const skincareCard = dataSearch.map((skincareProduct, index) => {
        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 product-card" key={index}>
                <ProductCard productImage={skincareProduct.productImage}
                    brand={skincareProduct.brand}
                    url={`/skincare/${index}`}
                    description={skincareProduct.description}
                    regularPrice={skincareProduct.regularPrice}
                    memberPrice={skincareProduct.memberPrice} />
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
                        <div className="col-2 text-justify">
                            <img src={category.categoryImage} alt="category" className="img-fluid" />
                        </div>
                        <div className="col-10 text-justify">
                            <h4 className="titles my-3">{category.categoryTitle}</h4>
                            <p className="text-justify lh-lg">{category.categoryDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="row mt-5">
                {categoryList[0]}
            </div>
            <div className="col-md-5 search-bar my-4">
                <form className="d-flex mt-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={filter}
                        onChange={searchText.bind(this)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="row product-row m-auto text-center my-5">
                {skincareCard}
            </div>
        </div>
    )
}

export default Skincare