import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import './socials.styles.scss'

const Socials = () => {

    return (
        <div className="my-socials">
            <div className="my-link-container">
                <a className="my-link" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/oscargutierrezaltamirano'>
                    <FontAwesomeIcon title="" className="my-icon" icon={faLinkedin}/>
                </a>
            </div>
            <div className="my-link-container">
                <a className="my-link" target="_blank" rel="noopener noreferrer" href='https://www.github.com/oscarg617'>
                    <FontAwesomeIcon title="GitHub" className="my-icon" icon={faGithub}/>
                </a>
            </div>
            <div className="my-link-container">
                <a className="my-link" target="_blank" rel="noopener noreferrer" href='mailto:oscargutierrez617@berkeley.edu'>
                    <FontAwesomeIcon title="Email" className="my-icon" icon={faEnvelope}/>
                </a>
            </div>
        </div>
    )
}

export default Socials