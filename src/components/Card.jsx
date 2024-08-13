import styles from '../styles/Card.module.css'



function Card({ imagem, titulo, paragrafo, botao, className}) {
    return (
        <div className={`${styles.card} ${className}`}>
            <img className={styles.imagem_card} src={imagem} />
            <div className={styles.escrita_bloco_card}>
                <h2 className={styles.titulo_card}>{titulo}</h2>
                <p className={styles.paragrafo_card}>{paragrafo}</p>
                <button className={styles.botao_card}>{botao}</button>
            </div>
        </div>
    )
}

export default Card