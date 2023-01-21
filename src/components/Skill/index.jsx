import "./skill.css";

export default function Skill(props) {
    return(
        <div className="skill">
           <img src={props.icon}/>
           <h1>{props.name}</h1>
        </div>
    )
}