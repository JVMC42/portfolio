import "./style.css"
import link from "../../assets/link.png"

export default function(props) {
    return(
        <div className="projeto">
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
            <nav>
            <a href={props.link} target="_blank"> <img src={link} alt="aa" /></a>
            <a href={props.git} target="_blank">  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="aa" /></a>
            </nav>
        </div>
    )
}