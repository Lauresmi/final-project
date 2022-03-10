import ProductCard from "../Components/ProductCard"
import getMakeupData from "../API/getMakeupData"
import getCategoryData from "../API/getCategoryData"
import { useState } from "react";
import "./Products.css"

function Makeup() {

    const makeupProducts = getMakeupData()
    const [filter, setFilter] = useState("");

    const searchText = (event) => {
        setFilter(event.target.value);
    };

    let dataSearch = makeupProducts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        );
    });

    const makeupCard = dataSearch.map((makeupProduct, index) => {
        return (
            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 ml-2 product-card" key={index}>
                <ProductCard 
                    productImage={makeupProduct.productImage}
                    brand={makeupProduct.brand}
                    url={`/makeup/${index}`}
                    description={makeupProduct.description}
                    regularPrice={makeupProduct.regularPrice}
                    memberPrice={makeupProduct.memberPrice} />
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
            <div className="row mt-3">
                {categoryList[2]}
            </div>
            <div className="col-md-5 search-bar mb-4">
                <form className="d-flex mt-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={filter}
                        onChange={searchText.bind(this)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="row product-row m-auto text-center">
                {makeupCard}
            </div>
        </div>
    )
}

export default Makeup