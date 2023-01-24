import Header from "../../components/Header";
import Skills from "../../components/Skills";
import Projetos from "../../components/Projetos"
import Sobre from "../../components/Sobre";
import Footer from "../../components/Footer"
import Home from "../../components/Home"
import "./style.css"


export default function HomePage() {
    return (<>
    
     <Header/>
     

     <Home/>
     
        <Sobre/>

     
        <Skills/>
        
        <Projetos/>
        
        <Footer/>
        </>
    )
}