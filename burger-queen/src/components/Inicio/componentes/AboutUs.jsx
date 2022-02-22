import images from '../imagenes'

const AboutUs = () => {
    return(
        <section className="about" id="about">

        <div className="image" data-aos="fade-right" data-aos-delay="150">
            <img src={images.about}  alt=""/>
        </div>

        <div className="content" data-aos="fade-left" data-aos-delay="300">
        <h3 className="title">Un paso dentro de Burger House</h3>
        <p>Una de las palabras que nos define como franquicia es “Familia”. Qué mejor manera de hacerle 
            honor a esta palabra que visitándonos y probando nuestras hamburguesas artesanales, 
            hechas con todo el cariño que tenemos para ti.</p>
        <div className="icons">
            <h3> <i className="fas fa-check"></i> Buenos Precios </h3>
            <h3> <i className="fas fa-check"></i> Buen Ambiente</h3>
            <h3> <i className="fas fa-check"></i> Servicio A1 </h3>
            <h3> <i className="fas fa-check"></i> veg & non-veg </h3>
            <h3> <i className="fas fa-check"></i> Ingredientes frescos</h3>
        </div>
        <a href=' ' className="btn">read more</a>
        </div>

        </section>
    )
}

export default AboutUs