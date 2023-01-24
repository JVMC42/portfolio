import Skill from "../../components/Skill";
import "./skills.css"

export default function Skills() {
    return (
        <>
            <section className="skills">
            <h1 className="skillsTitle">Skills</h1>
            <div>
              <span>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" name="JavaScript"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" name="TypeScript"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" name="Next.js"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" name="Node.js"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" name="Tailwind"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" name="Bootstrap"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" name="Firebase"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" name="MongoDB"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" name="MySQL"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" name="GitHub"/>
           <Skill icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" name="GIT"/>
           </span>
           </div>
           </section>
        </>
    )
}
