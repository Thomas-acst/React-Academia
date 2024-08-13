import styles from '../styles/Section1.module.css'
import img2 from '../assets/images/bicicletas-academia.jpg'

function Section1() {
    return (
        <div id='sobre_nos' className={styles.grupo}>
            <div className={styles.quadrado_esquerdo}>
                <h2>SOBRE NÓS.</h2>
                <hr />
                <p>Fundada em 2010 por entusiastas do fitness, a NovaFit surgiu para criar um espaço acolhedor para todos, independentemente de idade, forma física ou experiência. De uma pequena academia local, nos tornamos uma comunidade diversificada e comprometida. Nossa trajetória é marcada por crescimento, inovação e dedicação a ajudar as pessoas a se tornarem a melhor versão de si mesmas.</p>
            </div>
            <div className={styles.quadrado_direito}>
                <img className={styles.bike} src={img2} />
            </div>
        </div>
    )
}

export default Section1