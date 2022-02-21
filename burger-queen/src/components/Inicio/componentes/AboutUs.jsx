import images from '../imagenes'

const AboutUs = () => {
    return(
        <section className="about" id="about">

        <div className="image" data-aos="fade-right" data-aos-delay="150">
            <img src={images.about}  alt=""/>
        </div>

        <div className="content" data-aos="fade-left" data-aos-delay="300">
        <h3 className="title">Step into burger heaven</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veniam error fugit quasi perspiciatis blanditiis quo, sint beatae ut, commodi fuga illo reprehenderit ea voluptatibus earum fugiat obcaecati doloremque? Aspernatur?</p>
        <div className="icons">
            <h3> <i className="fas fa-check"></i> best price </h3>
            <h3> <i className="fas fa-check"></i> Best Service </h3>
            <h3> <i className="fas fa-check"></i> Fresh Ingredient </h3>
            <h3> <i className="fas fa-check"></i> backed buns </h3>
            <h3> <i className="fas fa-check"></i> natural cheese </h3>
            <h3> <i className="fas fa-check"></i> veg & non-veg </h3>
        </div>
        <a href=' ' className="btn">read more</a>
        </div>

        </section>
    )
}

export default AboutUs