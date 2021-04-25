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
                            {/* <img alt='project'></img> */}
                            <div className='img'></div>
                            <div className='description'>
                                <h3>{project.title}</h3>
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