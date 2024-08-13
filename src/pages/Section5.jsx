import styles from '../styles/Section5.module.css'
import InitCard from '../components/InitCard.jsx'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


function Section5() {
    return (
        <>
            <InitCard id='contato' titulo='CONTATO.' />
            <div className={styles.section5}>
                <div className={styles.envoltorio}>
                    <div className={styles.apresentacao}>
                        <h2>Entre em contato com nossa equipe:</h2>
                        <p>Nossa equipe dedicada está aqui para apoiar sua jornada de fitness. Entre em contato hoje mesmo para iniciar seu caminho para um estilo de vida mais saudável.</p>
                        <hr />
                        <ul>
                            <li><MdEmail /> hi@novafit.suport</li>
                            <li><IoCall /> (11) 11111-1111</li>
                        </ul>
                    </div>
                    <div className={styles.form}>
                        <form action="#">
                                <label htmlFor="name">Nome:</label>
                                <br />
                                <input type="text" id='name' placeholder='Insira seu nome...' required={true} />
                                <br />
                                <label htmlFor="sobrenome">Sobrenome:</label>
                                <br />
                                <input type="text" id='sobrenome' placeholder='Insira seu sobrenome...' required={true} />
                                <br />
                                <label htmlFor="email">Email:</label>
                                <br />
                                <input type="email" id='email' placeholder='Insira seu email...' required={true} />
                                <br />
                                <label htmlFor="endereco">Endereço:</label>
                                <br />
                                <input type="text" id='endereco' placeholder='Insira seu endereço...' required={true} />
                                <br />
                                <label htmlFor="mensagem">Mensagem:</label>
                                <br />
                                <input type="text" id='mensagem' placeholder='Insira sua mensagem...' required={true} />
                                <br />
                                <button>Enviar</button>
                        </form>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Section5