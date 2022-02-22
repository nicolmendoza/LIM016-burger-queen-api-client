const DivEmployer = ({delay, image, name, career, description}) => {
    return(
        <div className="box" data-aos="fade-up" data-aos-delay={delay}>
            <img src={image}  alt=""/>
            <h3>{name}</h3>
            <p>{career}</p>
            <p>{description}</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        </div>
    )
}

export default DivEmployer