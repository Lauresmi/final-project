import "./CategoryCard.css"

function CategoryCard(props) {

    const { categoryImage, categoryTitle, categoryDescription } = props

    return (
        <div className="row text-justify mx-2">
            <div className="col-5 text-justify">
                <img src={categoryImage} className="img-fluid" />
            </div>
            <div className="col-7 text-justify">
                <h5 className="titles">{categoryTitle}</h5>
                <p className="text-justify">{categoryDescription}</p>
            </div>
        </div>
    )
}

export default CategoryCard