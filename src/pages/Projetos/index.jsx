import Header from "../../components/Header";
import Projeto from "../../components/Projeto";
import "./style.css"

export default function Projetos() {
    return(<>
    <Header/>
        <div className="main">
        
        <h1 className="titleProjeto">Projetos</h1>
        <div className="projetos">
            <Projeto title="Ecommerce" desc="Next.js, MongoDb, Tailwind" link="https://ecommerce-chi-bay.vercel.app/" git="https://github.com/JVMC42/Ecommerce"/>
            <Projeto title="Crud" desc="Next.js, TypeScript, Firebase" link="https://crud-next-js-seven.vercel.app/" git="https://github.com/JVMC42/Crud-Next.js"/>
            <Projeto title="Calculadora React" desc="Css,JavaScript,React" link="https://calculadora-react-khaki.vercel.app/" git="https://github.com/JVMC42/calculadoraReact"/>
            <Projeto title="Calculadora Vue" desc="Css,JavaScript,Vue" link="https://calculadora-vue-tau.vercel.app/" git="https://github.com/JVMC42/calculadoraVue"/>
            <Projeto title="Super Trunfo" desc="HTML,Css,JavaScript" link="https://jvmc42.github.io/superTrunfo/" git="https://github.com/JVMC42/superTrunfo"/>
            <Projeto title="Gravador" desc="HTML, JavaScript, Electron" git="https://github.com/JVMC42/GravadorElectron"/>
        </div>
        </div>
        </>
    )
}