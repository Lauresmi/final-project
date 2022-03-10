import CategoryCard from "../Components/CategoryCard"
import getCategoryData from "../API/getCategoryData"

function ProductCategories() {

    const skincareCategories = getCategoryData()

    const skincareCategoriesCard = skincareCategories.map((skincareCategory, index) => {

        return (
            < div className="row mt-2" key={index}>
                <CategoryCard categoryImage={skincareCategory.categoryImage}
                    categoryTitle={skincareCategory.categoryTitle}
                    categoryDescription={skincareCategory.categoryDescription}/>
            </div >
        )
    })

    return (
        <div>
            <div className="row text-justify mt-2">
                {skincareCategoriesCard}
            </div>
        </div>
    )
}

export default ProductCategories