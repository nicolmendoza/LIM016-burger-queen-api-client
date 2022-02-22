
import images from "../imagenes"

const Navegador = () => {
    return (
        <header className="header">

        <div id="search-btn" className="fas fa-burger icons"></div>

        <nav className="navbar">
            <a href="#home">Inicio</a>
            <a href="#menu">Menu</a>
            <a href="#about">Nosotros</a> 
            <span className="space"></span>
            <a href="#reviews">Empleados</a>
            <a href="#contact">Contáctanos</a>
        </nav>

        <a href='/login' className="fas fa-circle-user icons"><p>Login</p>  </a> 
            
        <a href="#home" className="logo"><img src={images.logo} alt=""/></a>

        </header>
    )
}

export default Navegador