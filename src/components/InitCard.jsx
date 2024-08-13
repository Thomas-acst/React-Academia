import styles from '../styles/InitCard.module.css'

function InitCard({ titulo, paragrafo, id }) {
    return (
        <div className={styles.init_card} id={id}>
            <h1 className={styles.init_card_title}>{titulo}</h1>
            <hr className={styles.init_card_hr}/>
            <p className={styles.init_card_paragraph}>{paragrafo}</p>
        </div>
    )
}

export default InitCard