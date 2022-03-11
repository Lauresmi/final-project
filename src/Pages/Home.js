import Carousel from "../Components/Carousel"
import getCategoryData from "../API/getCategoryData"
import CategoryCard from "../Components/CategoryCard"

function Home() {

    const allCategories = getCategoryData()

    const allCategoriesCard = allCategories.map((allCategoryOne, index) => {

        return (
            < div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
                <CategoryCard categoryImage={allCategoryOne.categoryImage}
                    categoryTitle={allCategoryOne.categoryTitle}
                    categoryDescription={allCategoryOne.categoryDescriptionShort} />
            </div >
        )
    })

    return (
        <div>
            <div className="row my-5">
                <Carousel />
            </div>
            <div className="row mt-4">
                {allCategoriesCard}
            </div>
        </div>
    )
}

export default Home