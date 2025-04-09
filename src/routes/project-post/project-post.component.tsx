import Intro from '../../components/intro/intro.component'
import Projects from '../projects/projects.component'
import './project-post.styles.scss'

type projectCardProps  = {
    title: string,
    description: string,
    technologies: string[],
    links: any[],
    motive: string,
    challenges: string,
    "key learnings": string,
    "future improvements": string,
    updates: any[]
}

type updatesProps  = {
    title: string,
    description: string
}

const Project : React.FC<projectCardProps> = (props) => {
    // window.scrollTo(0, 0)
    return (
        <div className='project-post'>
            <h1 className='project-post-title'>{props.title}</h1>
            <p className='project-post-description'>{props.description}</p>
            <ul className='project-post-tech-list' >
                {props.technologies.map((technology) => (
                    <li className='project-post-tech' >{technology}</li>
                ))}
                {props.links.map((link) => (
                    <a className={`project-post-link ${link.linkType.toLowerCase().split(' ').join('-') }`} target="_blank" rel="noopener noreferrer" href={link.link}>{link.linkType}</a>
                ))}
                </ul>
            
            <div className='project-post-motive' >
                <h3>Project Inspiration</h3>
                <p>{props.motive}</p>
            </div>
            <div className='project-post-challenges' >
                <h3>My Challenges</h3>
                <p>{props.challenges}</p>
            </div>
            <div className='project-post-key-learnings' >
                <h3>Key Learnings</h3>
                <p>{props['key learnings']}</p>
            </div>
            <div className='project-post-future-improvements' >
                <h3>Future Improvements</h3>
                <p>{props['future improvements']}</p>
            </div>
            {props.updates.length === 0 ? (<div></div>) : 
                <div className='project-post-updates'>
                    <h3>Updates</h3>
                    {props.updates.map((update: updatesProps) => (
                        <div className='project-post-update'>
                            <h4>{update.title}</h4>
                            <p>{update.description}</p>
                        </div>
                    ))}
                </div>
            }
        
        </div>
    )
}

export default Project;