import styles from '../styles/Main.module.css'
import img from '../assets/images/homem-peso.jpg'


function Main() {
    return (
        <>
            <div className={styles.titulo_mobile}>
                <h1 className={styles.titulo1}>TRANSFORME SEU CORPO </h1>
                <h1 className={styles.titulo2}>ELEVE SUA MENTE</h1>
                <p>Descubra um espaço dedicado ao seu bem-estar e performance. Junte-se a nós para iniciar sua jornada rumo a uma vida mais saudável e equilibrada.</p>
            </div>
            <div id='main' className={styles.main}>
                <img className={styles.homem_peso} src={img} />
                <div className={styles.titulo_e_subtitulo}>
                    <h1>TRANSFORME SEU CORPO ELEVE SUA MENTE</h1>
                    <p>Descubra um espaço dedicado ao seu bem-estar e performance. Junte-se a nós para iniciar sua jornada rumo a uma vida mais saudável e equilibrada.</p>
                </div>
                <div className={styles.btns}>
                    <button className={styles.inscrever}>Inscrever-se</button>
                    <button className={styles.servicos}>Serviços</button>
                </div>
            </div>

        </>
    )

}

export default Main