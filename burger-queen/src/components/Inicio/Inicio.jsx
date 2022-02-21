import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./inicio.css"
import images from "./imagenes"

const Inicio = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
         });
        AOS.refresh();
      }, []);
    return (
    <main>
        <header className="header">

        <div id="search-btn" className="fas fa-burger icons"></div>

        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#menu">menu</a>
            <a href="#about">about</a> 
            <span className="space"></span>
            <a href="#reviews">reviews</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
        </nav>

        <a href='/login' className="fas fa-user icons"> </a>
        <a href="#home" className="logo"><img src={images.logo} alt=""/></a>

        </header>

        <section className="home" id="home">

        <div className="content">
            <img data-aos="fade-up" data-aos-delay="150" src={images.banner} alt="imagen"/>
            <h3 data-aos="fade-up" data-aos-delay="300">So meaty you'll go crazy</h3>
            <p data-aos="fade-up" data-aos-delay="450">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at fuga aliquam ipsa recusandae repellat laudantium pariatur amet culpa cum.</p>
            <a data-aos="fade-up" data-aos-delay="600" href="#menu" className="btn">our menu</a>
        </div>

        </section>

        <section className="service">

        <div className="box" data-aos="fade-up" data-aos-delay="150">
            <i className="fas fa-hamburger"></i>
            <h3>best quality</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum.</p>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="300">
            <i className="fas fa-shipping-fast"></i>
            <h3>free delivery</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum.</p>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="450">
            <i className="fas fa-headset"></i>
            <h3>24/7 support</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum.</p>
        </div>

        </section>

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
                <a href=" " className="btn">add to cart</a>
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
                <a href=" " className="btn">add to cart</a>
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
                <a href=' ' className="btn">add to cart</a>
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
                <a href=' ' className="btn">add to cart</a>
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
                <a href=' ' className="btn">add to cart</a>
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
                <a href=' ' className="btn">add to cart</a>
            </div>
        </div>
        
        </div>

        </section>

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


    <section className="contact" id="contact">

    <div className="heading">
        <img src={images.titleImg}  alt=""/>
        <h3>contact us</h3>
    </div>

    <div className="row">

    {/* <iframe data-aos="fade-up" data-aos-delay="150" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1639924799744!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe> */}

    <div className="form">

        <div className="icons-container">

            <div className="icons" data-aos="fade-up" data-aos-delay="150">
                <i className="fas fa-map"></i>
                <h3>address :</h3>
                <p>mumbai, india - 400104</p>
            </div>

            <div className="icons" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-envelope"></i>
                <h3>email :</h3>
                <p>shaikhanas@gmail.com</p>
                <p>anasbhai@gmail.com</p>
            </div>

            <div className="icons" data-aos="fade-up" data-aos-delay="450">
                <i className="fas fa-phone"></i>
                <h3>phone :</h3>
                <p>+123-456-7890</p>
                <p>+111-222-3333</p>
            </div>
            
        </div>

        <form action="">
            <input data-aos="fade-up" data-aos-delay="150" type="text" placeholder="full name" className="box"/>
            <input data-aos="fade-up" data-aos-delay="300" type="email" placeholder="email" className="box"/>
            <input data-aos="fade-up" data-aos-delay="450" type="number" placeholder="phone" className="box"/>
            <textarea data-aos="fade-up" data-aos-delay="600" name="" placeholder="message" className="box" id="" cols="30" rows="10"></textarea>
            <input data-aos="fade-up" data-aos-delay="750" type="submit" value="send message" className="btn"/>
        </form>

    </div>

    </div>

    </section>

    <section className="blogs" id="blogs">

    <div className="heading">
        <img src={images.titleImg} alt=""/>
        <h3>daily posts</h3>
    </div>

    <div className="box-container">

    <div className="box" data-aos="fade-up" data-aos-delay="150">
        <div className="image">
            <img src={images.blog1} alt=""/>
            <div className="icons">
                <a href=' '> <i className="fas fa-calendar"></i> 21st may, 2022 </a>
                <a href=' '> <i className="fas fa-user"></i> by admin </a>
            </div>
        </div>
        <div className="content">
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.</p>
            <a href=' ' className="btn">read more</a>
        </div>
    </div>

    <div className="box" data-aos="fade-up" data-aos-delay="300">
        <div className="image">
            <img src={images.blog2} alt=""/>
            <div className="icons">
                <a href=' '> <i className="fas fa-calendar"></i> 21st may, 2022 </a>
                <a href=' '> <i className="fas fa-user"></i> by admin </a>
            </div>
        </div>
        <div className="content">
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.</p>
            <a href=' ' className="btn">read more</a>
        </div>
    </div>

    <div className="box" data-aos="fade-up" data-aos-delay="450">
        <div className="image">
            <img src={images.blog3} alt=""/>
            <div className="icons">
                <a href=' '> <i className="fas fa-calendar"></i> 21st may, 2022 </a>
                <a href=' '> <i className="fas fa-user"></i> by admin </a>
            </div>
        </div>
        <div className="content">
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.</p>
            <a href=' ' className="btn">read more</a>
        </div>
    </div>

    </div>

    </section>

    <section className="footer">

    <div className="links">
        <a href="#home" className="btn">home</a>
        <a href="#menu" className="btn">menu</a>
        <a href="#about" className="btn">about</a>
        <a href="#reviews" className="btn">reviews</a>
        <a href="#contact" className="btn">contact</a>
        <a href="#blogs" className="btn">blogs</a>
    </div>

    {/* <p className="credit"> created by <span>mr. web designer</span> | all rights reserved! </p> */}

    </section>

    </main>
    )
}

export default Inicio