import "./header.css"
import { Link } from "react-router-dom";

export default function Header() {


    return(
        <header className="header">

            <h1><a href="#home">João Victor</a></h1>
            
            <nav>
            <a href="#sobre">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#projetos">Projetos</a>
            </nav>
            
            </header>
    )
}