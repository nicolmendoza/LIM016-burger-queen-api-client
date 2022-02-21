
import images from "../imagenes"

const Navegador = () => {
    return (
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
    )
}

export default Navegador