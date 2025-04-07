import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import './socials.styles.scss'

const Socials = () => {

    return (
        <div className="my-socials">
            <a className="my-link" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/oscargutierrezaltamirano'>
                <FontAwesomeIcon className="my-icon" icon={faLinkedin}/>
            </a>
            <a className="my-link" target="_blank" rel="noopener noreferrer" href='https://www.github.com/oscarg617'>
                <FontAwesomeIcon className="my-icon" icon={faGithub}/>
            </a>
            <a className="my-link" target="_blank" rel="noopener noreferrer" href='mailto:oscargutierrez617@berkeley.edu'>
                <FontAwesomeIcon className="my-icon" icon={faEnvelope}/>
            </a>
        </div>
    )
}

export default Socials