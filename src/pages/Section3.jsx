import InitCard from '../components/InitCard.jsx'
import styles from '../styles/Section3.module.css'
import img1 from '../assets/images/sp.jpg'
import img2 from '../assets/images/rj2.jpg'
import img3 from '../assets/images/br.jpg'


function Section3() {
    return (
        <>
            <InitCard id='localidades' titulo='LOCALIDADES.' paragrafo='Estamos aqui para ajudar! Entre em contato conosco para mais informações ou suporte.' />
                <div className={styles.localidades}>
                    <div className={styles.cidade}>
                        <img className={styles.rj} src={img2} />
                        <h2>Rio de Janeiro</h2>
                        <button>Contate-nos</button>
                    </div>
                    <div className={styles.cidade}>
                        <img className={styles.sp} src={img1} />
                        <h2>São Paulo</h2>
                        <button>Contate-nos</button>
                    </div>
                    <div className={styles.cidade}>
                        <img className={styles.br} src={img3} />
                        <h2>Brasília</h2>
                        <button>Contate-nos</button>
                    </div>

                </div>  
        </>
    )
}

export default Section3