import "../ComponentCss/MiniContact.css"
import { GrGithub } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import { AiFillLinkedin } from "react-icons/ai"
const MiniContact = () => {
    return (
        <aside>
            <a href="https://github.com/Urtats-Code" target="_blank"><GrGithub size={30} /></a>
            <a className="linkedinIcon" href="https://www.linkedin.com/in/urtats-berrocal-sanjuan-b17a32233/"> <AiFillLinkedin></AiFillLinkedin></a>
            <a className="emailIcon" title="urtatsberrocal@gmail.com" target="_blank" href="mailto:urtatsberrocal@gmail.com"> <GrMail size={30} /></a>
        </aside>
    )
}

export default MiniContact; 