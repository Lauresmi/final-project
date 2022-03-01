function Category() {

    return (
        <div>
            <div className="row pb-3 mb-3">

                <div className="col-3">
                    <img src={img} className="img-fluid" />
                </div>

                <div className="col-9">
                    <h5 className="titles">{title}</h5>
                    <p>{desc}</p>
                </div>

            </div>
        </div>
    )
}

export default Category