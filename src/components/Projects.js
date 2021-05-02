import './styles/Projects.scss'
import { projects } from '../content.js'

const Projects = () => {
    return (
        <div className='projects'>
            <h1>PROJECTS</h1>
            <div className='container'>
                {projects.map(project => {
                    return (
                        <div key={project.id} className='project'>
                        <div className='header'>
                            <h3>{project.title}</h3>
                            <div className='links'>
                                <a href={project.code} target="_blank" rel="noreferrer">code</a>
                                {project.live ? 
                                    <a href={project.live} target="_blank" rel="noreferrer">live</a>
                                : null}
                            </div>
                        </div>
                            <div className='description'>
                                <p>{project.description}</p>
                                <ul>
                                    {project.technologies.map((tech, index) => {
                                        return (<li key={index}>{tech}</li>)
                                    })}
                                </ul>
                            </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;