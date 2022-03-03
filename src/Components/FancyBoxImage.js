import "./FancyBoxImage.css"

function FancyBoxImage(props) {
    const fancyImage = props.fancyImage;

    return (
        <div>

            <div className="col">
                <a data-fancybox href={fancyImage}>
                    <img className="fancy-box-image" src={fancyImage} alt=""/>
                </a>
            </div>

        </div>
    )
}

export default FancyBoxImage