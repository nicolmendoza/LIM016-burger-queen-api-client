import images from '../imagenes'
import DivMenu from '../elementos/DivMenu'

const Menu = () => {
    return (
        <section className="menu" id="menu">

        <div className="heading">
            <img src={images.titleImg} alt=""/>
            <h3>Nuestro Menu</h3>
        </div>

        <div className="box-container">
            <DivMenu
                delay="150"
                image={images.product1}
                name="Hamburguesa Doble Queso"
                price="S/ 18.00"
            />
            <DivMenu
                delay="300"
                image={images.product2}
                name="Hamburguesa de Tocino"
                price="S/ 15.00"
            />
            <DivMenu
                delay="450"
                image={images.product3}
                name="Hamburguesa Pollo Crujiente"
                price="S/. 15.00"
            />
            <DivMenu
                delay="600"
                image={images.product4}
                name="Hamburguesa Doble"
                price="S/ 15.00"
            />
            <DivMenu
                delay="750"
                image={images.coffe}
                name="Cafe Americano"
                price="S/ 5.00"
            />
            <DivMenu
                delay="900"
                image={images.cappuccino}
                name="Cappuccino"
                price="S/ 7.00"
            />
        
        </div>

        </section>
    )
}

export default Menu