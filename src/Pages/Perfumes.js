import ProductCard from "../Components/ProductCard"
import getFragrencesData from "../API/getFragrencesData"
import getCategoryData from "../API/getCategoryData"
import { useState } from "react";
import "./Products.css"

function Perfumes() {
    const fragrances = getFragrencesData()
    const [filter, setFilter] = useState("");
    const [startList, setStartList] = useState(0)

    const endList = startList + 3

    const moveLeft = () => {
        let nextSelected = startList - 3
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(nextSelected)
    }
    const moveRight = () => {
        let nextSelected = startList + 3
        if (nextSelected > 9) {
            nextSelected = 9
        }
        setStartList(nextSelected)
    }
    const changePageOne = () => {
        setStartList(0)
    }
    const changePageTwo = () => {
        setStartList(3)
    }
    const changePageThree = () => {
        setStartList(6)
    }
    const changePageFour = () => {
        setStartList(9)
    }

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

    const fragrencesCard = dataSearch
        .slice(startList, endList)
        .map((fragrence, index) => {
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
                        <div className="col-2 text-justify">
                            <img src={category.categoryImage} className="img-fluid" />
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
                {categoryList[1]}
            </div>
            <div className="col-md-5 my-4 search-bar">
                <form className="d-flex mt-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={filter}
                        onChange={searchText.bind(this)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="row product-row m-auto text-center mt-4">
                {fragrencesCard}
            </div>
            <div className="row mb-4">
                <div className="col buttons-pagination">
                    <div className="btn-group float-end" role="group">
                        <button onClick={() => moveLeft(startList)} type="button" class="btn">«</button>
                        <button onClick={() => changePageOne(startList)} type="button" class="btn">1</button>
                        <button onClick={() => changePageTwo(startList)} type="button" class="btn">2</button>
                        <button onClick={() => changePageThree(startList)} type="button" class="btn">3</button>
                        <button onClick={() => changePageFour(startList)} type="button" class="btn">4</button>
                        <button onClick={() => moveRight(startList)} type="button" class="btn">»</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfumes