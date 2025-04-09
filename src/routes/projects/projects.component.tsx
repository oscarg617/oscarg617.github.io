import ProjectCard from '../../components/project-card/project-card.component';
import projects from '../../data/projects.json'
import './projects.styles.scss'

const Projects = () => {

    return (
        <div className='projects'>
            <h1 className='projects-title' >Projects</h1>
            <p className='projects-subtitle' >This is where I share the challenges and insights behind each project in my developer journey.</p>
            <div className='projects-container'>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;