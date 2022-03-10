import getCategoryData from "../API/getCategoryData"

function ProductCategories() {
    const allThreeCategories = getCategoryData()
    const categoryList = [];

    for (const i in allThreeCategories) {
        const category = allThreeCategories[i]

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
            <div className="row text-justify mt-2">
                {categoryList}
            </div>
        </div>
    )
}

export default ProductCategories