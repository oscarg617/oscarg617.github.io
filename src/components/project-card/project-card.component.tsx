import React from 'react';
import './project-card.styles.scss'
import { Link } from "react-router-dom";
import { CCollapse, CCard, CCardBody } from '@coreui/react';

type projectCardProps  = {
    title: string,
    description: string,
    technologies: string[],
    links: any[],
    [x:string]: any;
}


const ProjectCard : React.FC<projectCardProps> = (props) => {
    return (
        <div className='project-card-container'>
            <Link to={`/projects/${props.title.toLowerCase()}`} className='projects-button'>
            <CCollapse visible={true} >
                <CCard className='projects-card' >
                    <CCardBody>
                        <div className='project-card-heading'>
                            <h2 className='project-card-heading-item'>{props.title}</h2>
                        </div>
                        <p>{props.description}</p>
                        <div className='project-card-footer'>
                            <ul className='project-card-tech-list' >
                                {props.technologies.map((technology) => (
                                    <li className='project-card-tech' >{technology}</li>
                                ))}
                                {props.links.map((link) => (
                                    <a className={`project-card-link ${link.linkType.toLowerCase().split(' ').join('-') }`} target="_blank" rel="noopener noreferrer" href={link.link}>{link.linkType}</a>
                                ))}
                            </ul>
                        </div>
                    </CCardBody>
                </CCard>
            </CCollapse>
            </Link>
        </div>
    )
}

export default ProjectCard;
