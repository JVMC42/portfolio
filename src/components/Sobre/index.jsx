import sobre from "../../assets/sobre.png"
import "./sobre.css"

export default function Sobre() {
    return (
            <section id="sobre" className="sobre">
            <img src={sobre} alt="desenho" />
            <span>
            <h1>Sobre mim</h1>
            <p id="p1">Bom dia, me chamo João Victor, sou apaixonado por tecnologia e estudo programação,<strong>sempre buscando aprimorar meus conhecimentos </strong>  e ficar atento nas novidades do mercado.</p>
            <p id="p2">Desenvolvo projetos com  <strong>Javascript,TypeScript,React,Next.js </strong>e futuramente outras tecnologias que me possibilite estar ainda mais apto para desenvolvimento WEB/Mobile de alto nível.</p>
            <p id="p3">Me considero <strong> ágil e consistente em aprender uma nova tecnologia </strong> e possuo alta adaptabilidade às mudanças, pronto para superar qualquer desafio!</p>
            <p id="p4">Se eu pudesse me definir em 2 palavras, certamente seriam: <strong> criativo e esforçado!</strong></p>
            </span>
            </section>
    )
}
