import images from '../imagenes'

const Employers = () => {
    return(
        <section className="reviews" id="reviews">

        <div className="heading">
            <img src={images.titleImg}  alt=""/>
            <h3>testimonial</h3>
        </div>

        <div className="box-container">

        <div className="box" data-aos="fade-up" data-aos-delay="150">
            <img src={images.pic1}  alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem! Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="300">
            <img src={images.pic2} alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem! Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="450">
            <img src={images.pic3} alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem! Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        </div>

        </div>

        </section>
    )
}

export default Employers