import images from '../imagenes'

const Menu = () => {
    return (
        <section className="menu" id="menu">

        <div className="heading">
            <img src={images.titleImg} alt=""/>
            <h3>our menu</h3>
        </div>

        <div className="box-container">

        <div className="box" data-aos="fade-up" data-aos-delay="150">
            <img src={images.product1} alt=""/>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>cheese hamburger</h3>
                <div className="price">$29.99</div>
            </div>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="300">
            <img src={images.product2}  alt=""/>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>cheese hamburger</h3>
                <div className="price">$29.99</div>
            </div>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="450">
            <img src={images.product3}  alt=""/>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>cheese hamburger</h3>
                <div className="price">$29.99</div>
            </div>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="600">
            <img src={images.product4}  alt=""/>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>cheese hamburger</h3>
                <div className="price">$29.99</div>
            </div>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="750">
            <img src={images.product5}  alt=""/>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>cheese hamburger</h3>
                <div className="price">$29.99</div>
            </div>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="900">
            <img src={images.product6} alt=""/>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>cheese hamburger</h3>
                <div className="price">$29.99</div>
            </div>
        </div>
        
        </div>

        </section>
    )
}

export default Menu