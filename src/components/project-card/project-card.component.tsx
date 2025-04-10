import React from 'react';
import './project-card.styles.scss'
import { Link } from "react-router-dom";
import { CCollapse, CCard, CCardBody } from '@coreui/react';

type projectCardProps  = {
    title: string,
    description: string,
    technologies: string[],
    links: any[],
    image: string,
    [x:string]: any;
}

const ProjectCard : React.FC<projectCardProps> = (props) => {

    return (
        <div className='project-card-container'>
            <Link to={`${props.title.toLowerCase()}`} className='project-button'>
            <CCollapse visible={true} >
                <CCard className='project-card' >
                    <CCardBody>
                        <div className='project-card-content'>
                            <div className='project-card-desc'>
                                <div className='project-card-heading'>
                                    <h2 className='project-card-heading-item'>{props.title}</h2>
                                </div>
                                <p className='project-card-subtitle'>{props.description}</p>
                                <div className='project-card-footer'>
                                    <ul className='project-card-tech-list' >
                                        {props.technologies.map((technology) => (
                                            <li className='project-card-tech' >{technology}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='project-card-image-container'>
                                <img  className='project-card-image' src={props.image} alt='' />
                            </div>
                        </div>
                    </CCardBody>
                </CCard>
            </CCollapse>
            </Link>
        </div>
    )
}

export default ProjectCard;
