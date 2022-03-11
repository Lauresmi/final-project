import ProductCard from "../Components/ProductCard"
import getFragrencesData from "../API/getFragrencesData"
import getCategoryData from "../API/getCategoryData"
import { useState } from "react";
import "./Products.css"

function Perfumes() {
    const fragrances = getFragrencesData()
    const [filter, setFilter] = useState("");


    const searchText = (event) => {
        setFilter(event.target.value);
    };

    let dataSearch = fragrances.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        );
    });

    const fragrencesCard = dataSearch.map((fragrence, index) => {
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 product-card" key={index}>
                <ProductCard productImage={fragrence.productImage}
                    brand={fragrence.brand}
                    url={`/perfumes/${index}`}
                    title={fragrence.title}
                    description={fragrence.description}
                    size={fragrence.size}
                    regularPrice={fragrence.regularPrice}
                    memberPrice={fragrence.memberPrice}
                />
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
            <div className="mt-3">
                {categoryList[1]}
            </div>
            <div className="col-md-5 g-3 search-bar">
                <form className="d-flex g-4 mt-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={filter}
                        onChange={searchText.bind(this)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="row product-row m-auto text-center mt-4">
                {fragrencesCard}
            </div>

            <div role="alert" aria-live="assertive" aria-atomic="true" className="toast" data-bs-autohide="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>



        </div>
    )
}

export default Perfumes