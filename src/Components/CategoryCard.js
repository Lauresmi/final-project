import "./CategoryCard.css" 

function CategoryCard(props) {
    
    const {categoryImage, categoryTitle, categoryDescription, categoryDescriptionLong} = props

    return (
        <div className="text-justify">
            <div className="row text-justify">

                <div className="col-3 text-justify">
                    <img src={categoryImage} className="img-fluid" />
                </div>

                <div className="col-9 text-justify">
                    <h5 className="titles">{categoryTitle}</h5>
                    <p className="text-justify">{categoryDescription}</p>
                </div>

            </div>
        </div>
    )
}

export default CategoryCard