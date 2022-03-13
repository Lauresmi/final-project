import ProductCard from "../Components/ProductCard"
import getFragrencesData from "../API/getFragrencesData"
import getCategoryData from "../API/getCategoryData"
import { useState } from "react"
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import React, {
  useEffect,
} from "https://cdn.skypack.dev/react@17.0.1";
import "./Products.css"

function Perfumes() {
    const fragrances = getFragrencesData()
    const [filter, setFilter] = useState("");

    function Items({ currentItems }) {
        return (
            <div className="items">
                {currentItems && currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
            </div>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.

        const [itemOffset, setItemOffset] = useState(0)

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(fragrances.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(fragrances.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % fragrances.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };


        ////// 
        const [startList, setStartList] = useState(0)

        const endList = startList + 4

        const moveLeft = () => {
            let nextSelected = startList - 4
            if (nextSelected < 0) {
                nextSelected = 0
            }
            setStartList(nextSelected)
        }
        const moveRight = () => {
            let nextSelected = startList + 4
            if (nextSelected > 8) {
                nextSelected = 8
            }
            setStartList(nextSelected)
        }
        const changePageOne = () => {
            setStartList(0)
        }
        const changePageTwo = () => {
            setStartList(4)
        }
        const changePageThree = () => {
            setStartList(8)
        }
        // const changePageFour = () => {
        //     setStartList(12)
        // }

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
                            <button onClick={() => moveRight(startList)} type="button" class="btn">»</button>
                        </div>
                    </div>
                </div>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
                <PaginatedItems itemsPerPage={4} />
            </div>
        )
    }
}
export default Perfumes