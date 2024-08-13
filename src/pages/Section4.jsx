import styles from '../styles/Section4.module.css'
import InitCard from '../components/InitCard.jsx'
import img from '../assets/images/homem-querobel-plano.jpg'


function Section4() {
    return (
        <>
            <InitCard id='planos' titulo='PLANOS.' />
            <div className={styles.planos}>

                <div className={`${styles.blocks} ${styles.imagem}`}>
                    <img src={img} />
                </div>
                
                    <div id='primeiro' className={styles.blocks}>
                        <h2>Plano Básico</h2>
                        <p>Descubra a alegria de se sentir bem consigo mesmo com o Plano Básico. Acesso ilimitado à academia permite que você se exercite no seu ritmo e explore novas possibilidades a cada dia.</p>
                        <hr />
                        <ul>
                            <li>Todos os benefícios do Plano Plus</li>
                            <li>Sessões semanais de personal trainer</li>
                            <li>Acompanhamento nutricional mensal</li>
                            <li>Acesso a eventos exclusivos</li>
                        </ul>
                        <button>Assinar Plano</button>
                    </div>

                    <div className={styles.blocks}>
                        <h2>Plano Premium</h2>
                        <p>Eleve sua jornada fitness com o Plano Plus. Além de todos os benefícios do Plano Básico, você terá o suporte de um personal trainer mensalmente, ajudando você a superar limites e alcançar novos patamares.</p>
                        <hr />
                        <ul>
                            <li>Acesso ilimitado à academia</li>
                            <li>Participação em todas as aulas em grupo</li>
                            <li>Avaliação física inicial</li>
                            <li>Acompanhamento nutricional trimestral</li>
                        </ul>
                        <button>Assinar Plano</button>
                    </div>
            </div>
        </>

    )
}

export default Section4