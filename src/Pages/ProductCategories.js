import getCategoryData from "../API/getCategoryData"

function ProductCategories() {
    const allThreeCategories = getCategoryData()
    const categoryList = [];

    for (const i in allThreeCategories) {
        const category = allThreeCategories[i]

        categoryList.push(
            <div key={i}>
                <div className="row pb-3 my-3">
                    <div className="col-2">
                        <img src={category.categoryImage} className="img-fluid" />
                    </div>
                    <div className="col-10">
                        <h4 className="titles my-3">{category.categoryTitle}</h4>
                        <p className="lh-lg">{category.categoryDescription}</p>
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