import React from 'react';


import './project-post.styles.scss'

interface contentType  {
    type: string,
    content: string
}

const PostContent : React.FC<contentType> = ({type, content}) => {
    if (type === "paragraph") {
        return <p>{content}</p>
    } else if (type === "code") {
        return <pre>{content}</pre>
    } else if (type === "subheading") {
        return <h5>{content}</h5>
    }
}

type projectCardProps  = {
    title: string,
    description: string,
    technologies: string[],
    links: any[],
    motives: any[],
    howTos: any[],
    designChoices: string[],
    challenges: string[],
    keyLearnings: string[],
    futureImprovements: string[],
    updates: string[]
}

type updatesProps  = {
    title: string,
    description: string
}


const Project : React.FC<projectCardProps> = (props) => {
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
                {props.motives.map((motive) => (
                     <PostContent {...motive}></PostContent>
                ))}
            </div>
            <div className='project-post-how-to' >
                <h3>How It Works</h3>
                {props.howTos.map((howTo) => (
                    <PostContent {...howTo}></PostContent>
                ))}
            </div>
            <div className='project-post-design-choices' >
                <h3>Design Choices</h3>
                {props.designChoices.map((designChoice) => (
                    <p>{designChoice}</p>
                ))}
            </div>
            <div className='project-post-challenges' >
                <h3>Biggest Challenges</h3>
                {props.challenges.map((challenge) => (
                    <p>{challenge}</p>
                ))}
            </div>
            <div className='project-post-key-learnings' >
                <h3>Key Learnings</h3>
                {props.keyLearnings.map((keyLearning) => (
                    <p>{keyLearning}</p>
                ))}
            </div>
            <div className='project-post-future-improvements' >
                <h3>Future Improvements</h3>
                {props.futureImprovements.map((futureImprovement) => (
                    <p>{futureImprovement}</p>
                ))}
            </div>
            {props.updates.length === 0 ? (<div></div>) : 
                <div className='project-post-updates'>
                    <h3>Updates</h3>
                    {/* {props.updates.map((update: updatesProps) => (
                        <div className='project-post-update'>
                            <h4>{update.title}</h4>
                            <p>{update.description}</p>
                        </div>
                    ))} */}
                </div>
            }
        </div>
    )
}

export default Project;