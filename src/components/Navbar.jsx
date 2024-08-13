import { Children } from 'react';
import styles from '../styles/Navbar.module.css'
import { FaBars } from "react-icons/fa";


function menuShow(e) {
    e.preventDefault()
    var menuMobile = document.getElementsByTagName('div').item(1)
    var listaMobile = menuMobile.children[2]
    var estilo = window.getComputedStyle(listaMobile)
    console.log(estilo.display)
    if(estilo.display === 'flex'){
        listaMobile.setAttribute('style', 'display: none')
    } else{
        listaMobile.setAttribute('style', 'display: flex')
    }


    
}

function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <h2><a href="#main">NovaFit</a></h2>

                <nav className={styles.itens}>
                    <a href="#sobre_nos">Sobre Nós</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#localidades">Localidades</a>
                    <a href="#planos">Planos</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div >

            <div>
                <nav className={styles.hamb_navbar}>
                    <h2><a href="#main">NovaFit</a></h2>
                    <button onClick={menuShow}><FaBars /></button>
                </nav >
            </div>


            <div className={styles.itens_mobile}>
                <ul>
                    <li><a href="#sobre_nos">Sobre Nós</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#localidades">Localidades</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </>

    )
}



export default Navbar