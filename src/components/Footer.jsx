import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <nav className={styles.pages}>
                    <h2><a href="#main">Novafit</a></h2>
                    <ul>
                        <li><a href="#sobre_nos">Sobre Nós</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#localidades">Localidades</a></li>
                        <li><a href="#planos">Planos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
                <nav className={styles.info}>
                    <h2>Horário de contato</h2>
                    <p>Segunda – Sábado</p>
                    <p>7:00 ás 17:00</p>
                    <h2>E-mail de contato:</h2>
                    <p>contato@novafit.com</p>
                </nav>

            </div >
            <div className={styles.copy}>
                <hr />
                <p>&copy; 2024 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer