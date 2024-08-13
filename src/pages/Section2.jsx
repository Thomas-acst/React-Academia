import InitCard from "../components/InitCard";
import Card from "../components/Card";
import img1 from "../assets/images/levantamento-de-peso.jpg"
import img2 from '../assets/images/aula-em-grupo.jpg'
import img3 from '../assets/images/pessoa-comendo.jpg'
import img4 from '../assets/images/homem-querobel.jpg'
import img5 from '../assets/images/fisioterapia.jpg'

import styles from '../styles/CardReverse.module.css'




function Section2() {
    return (
        <>
            <InitCard
                id='servicos'
                titulo='SERVIÇOS.'
                paragrafo='Explore uma variedade de serviços projetados para atender todas as suas necessidades de fitness e bem-estar. 
Desde aulas em grupo até treinamentos personalizados, a NovaFit tem tudo para ajudar você a alcançar seus objetivos.'/>
            <Card
                imagem={img1}
                titulo='Treinamento Personalizado'
                paragrafo='Oferecemos programas de treinamento personalizados para atender às suas necessidades e objetivos específicos. Nossos treinadores experientes irão criar um plano de exercícios adequado para você.'
                botao='Começar Agora' />
            <Card
                imagem={img2}
                className={styles.reverso}
                titulo='Aula em Grupo'
                paragrafo='Participe das nossas animadas aulas em grupo, que incluem yoga, pilates, zumba, spinning e muito mais. Cada aula é conduzida por instrutores qualificados que garantem uma experiência divertida e eficaz.'
                botao='Começar Agora' />
            <Card
                imagem={img3}
                titulo='Acompanhamento Nutricional'
                paragrafo='Nossa equipe de nutricionistas está disponível para ajudá-lo a alcançar seus objetivos de saúde e fitness com planos alimentares personalizados.'
                botao='Começar Agora' />
            <Card
                imagem={img4}
                className={styles.reverso}
                titulo='Treinamento Funcional'
                paragrafo='Aprimore sua força, flexibilidade e condicionamento físico geral com nossas sessões de treinamento funcional, projetadas para desafiar e motivar você.'
                botao='Começar Agora' />
            <Card
                imagem={img5}
                titulo='Reabilitação e Fisioterapia'
                paragrafo='Oferecemos serviços de reabilitação e fisioterapia para ajudá-lo a se recuperar de lesões e melhorar sua mobilidade e bem-estar.'
                botao='Começar Agora' />

        </>

    )
}

export default Section2