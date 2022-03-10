import "./CategoryCard.css"

function CategoryCard(props) {

    const { categoryImage, categoryTitle, categoryDescription } = props

    return (
        <div className="row text-justify">
            <div className="col text-justify">
                <img src={categoryImage} className="img-fluid" />
            </div>
            <div className="col text-justify">
                <h5 className="titles">{categoryTitle}</h5>
                <p className="text-justify">{categoryDescription}</p>
            </div>
        </div>
    )
}

export default CategoryCard