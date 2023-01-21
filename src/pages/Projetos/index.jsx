import Header from "../../components/Header";
import Projeto from "../../components/Projeto";
import "./style.css"

export default function Projetos() {
    return(<>
    <Header/>
        <div className="main">
        
        <h1 className="titleProjeto">Projetos</h1>
        <div className="projetos">
            <Projeto title="Ecommerce" desc="Next.js, MongoDb, Tailwind"/>
            <Projeto title="Crud" desc="Next.js, TypeScript, Firebase" link="https://crud-next-js-seven.vercel.app/" git="https://github.com/JVMC42/Crud-Next.js"/>
            <Projeto title="Gravador" desc="HTML, JavaScript, Electron" git="https://github.com/JVMC42/GravadorElectron"/>
            <Projeto title="Ecommerce" desc="Next.js, MongoDb, Tailwind"/>
            <Projeto title="Ecommerce" desc="Next.js, MongoDb, Tailwind"/>
            <Projeto title="Ecommerce" desc="Next.js, MongoDb, Tailwind"/>
        </div>
        </div>
        </>
    )
}