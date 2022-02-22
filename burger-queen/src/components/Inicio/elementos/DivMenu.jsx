

const DivMenu = ({delay, image, name, price}) => {
    return(
    <div className="box" data-aos="fade-up" data-aos-delay={delay}>
        <img src={image} alt=""/>
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>{name}</h3>
            <div className="price">{price}</div>
        </div>
    </div>
    )
}

export default DivMenu