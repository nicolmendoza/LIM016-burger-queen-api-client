import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./inicio.css"
import Navegador from "./componentes/navegador"
import Home from './componentes/home'

import Menu from './componentes/menu'
import AboutUs from './componentes/AboutUs'
import Employers from './componentes/Employers'
import Contact from './componentes/Contact'


const Inicio = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
         });
        AOS.refresh();
        document.documentElement.scrollTop = 0;
      }, []);
    return (
    <main>
        <Navegador/>
        <Home/>
        <Menu/>
        <AboutUs/>
        <Employers/>
        <Contact/>
    <section className="footer">

    {/* <div className="links">
        <a href="#home" className="btn">home</a>
        <a href="#menu" className="btn">menu</a>
        <a href="#about" className="btn">about</a>
        <a href="#reviews" className="btn">reviews</a>
        <a href="#contact" className="btn">contact</a>
        <a href="#blogs" className="btn">blogs</a>
    </div> */}

    {/* <p className="credit"> created by <span>mr. web designer</span> | all rights reserved! </p> */}

    </section>

    </main>
    )
}

export default Inicio