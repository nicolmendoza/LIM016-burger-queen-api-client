import images from '../imagenes'

const Contact = () => {
    return (
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
    )
}

export default Contact