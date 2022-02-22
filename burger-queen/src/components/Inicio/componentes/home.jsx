import "../imagenes"

const Home = () => {
    return (
        <section className="home" id="home">
        
        <div className="content">
            {/* <img data-aos="fade-right" data-aos-delay="150" src={images.banner} alt="imagen"/> */}
            <h3 data-aos="fade-left" data-aos-delay="300">Bienvenidos a Burger House</h3>
            <p data-aos="fade-left" data-aos-delay="300">Somos Burger House, el mejor exponente de las hamburguesas artesanales de toda Lima. Llevamos a tu paladar el sabor único que posee nuestra carne, tan peruana como la papa, con la diferencia de que no necesita máscaras o hechizos para brillar con luz propia.</p>
            <a data-aos="fade-left" data-aos-delay="450" href="#menu" className="btn">Nuestro menu</a>
        </div>

        </section>
    )
}

export default Home