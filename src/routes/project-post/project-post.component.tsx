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
    } else if (type === "image") {
        return <img src={content} alt='' width={"100%"} style={{ borderRadius: "10px", border: "black 1px solid", marginBottom: "16px"}}/>   
    }
}

interface projectCardProps  {
    title: string,
    description: string,
    technologies: string[],
    links: any[],
    note: string,
    motives: any[],
    howTos: any[],
    designChoices: any[],
    challenges: any[],
    keyLearnings: any[],
    updates: any[]
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

            <i>{props.note}</i>

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
                <h3>Implementation Choices</h3>
                {props.designChoices.map((designChoice) => (
                    <PostContent {...designChoice}></PostContent>
                ))}
            </div>
            <div className='project-post-challenges' >
                <h3>Biggest Challenges</h3>
                {props.challenges.map((challenge) => (
                    <PostContent {...challenge}></PostContent>
                ))}
            </div>
            <div className='project-post-key-learnings' >
                <h3>Key Learnings</h3>
                {props.keyLearnings.map((keyLearning) => (
                    <PostContent {...keyLearning}></PostContent>
                ))}
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