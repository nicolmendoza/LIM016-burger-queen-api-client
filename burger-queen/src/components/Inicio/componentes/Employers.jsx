import images from '../imagenes'
import DivEmployer from '../elementos/DivEmployer.jsx'
const Employers = () => {
    return(
        <section className="reviews" id="reviews">

        <div className="heading">
            <img src={images.titleImg}  alt=""/>
            <h3>Empleados del Mes</h3>
        </div>

        <div className="box-container">
        <DivEmployer
            delay="150"
            image={images.pic1}
            name="Luciana Perez"
            career="Administradora"
            description="Reconocimiento brindado por su excelente gestion en el área administrativa"
        />
        <DivEmployer
            delay="300"
            image={images.pic2}
            name="Juan Perez"
            career="Chef"
            description="Reconocimiento brindado por su dedicación, su pasión y esfuerzo en la cocina"
        />
        <DivEmployer
            delay="450"
            image={images.pic3}
            name="Mónica Garcia"
            career="Mesera"
            description="Reconocimiento brindado por su inestimable trabajo y esfuerzo en la atención a los clientes"
        />

        </div>

        </section>
    )
}

export default Employers