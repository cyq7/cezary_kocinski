import './styles/Skills.scss'

const Skills = () => {
    return (
        <div className = 'skills'>
            <h1>SKILLS</h1>
            <div className='container'>
                <div className='category'>
                    <h3>Technologies</h3>
                    <ul className='inner-container'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>SASS</li>
                        <li>REST API</li>
                        <li>Axios</li>
                        <li>GIT</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='category'>
                    <h3>Tools</h3>
                    <ul className='inner-container'>
                        <li>VSC</li>
                        <li>Atom</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>MS Word</li>
                        <li>MS Excel</li>
                        <li>MS PowerPoint</li>
                        <li>Fiddler</li>
                        <li>Jira</li>
                        <li>Visual Studio</li>
                        <li>Testrail</li>
                        <li>Confluence</li>
                    </ul>
                </div>
                <div className='category'>
                    <h3>Testing</h3>
                    <ul className='inner-container'>
                        <li>Software Testing</li>
                        <li>Script Tests</li>
                        <li>Smoke Tests</li>
                        <li>Performance Tests</li>
                        <li>Acceptance</li>
                        <li>Compliance</li>
                        <li>Regression</li>
                        <li>SQL Queries</li>
                    </ul>
                </div>
                <div className='category'>
                    <h3>Platforms</h3>
                    <ul className='inner-container'>
                        <li>Windows</li>
                        <li>Android</li>
                        <li>iOS</li>
                        <li>PlayStation</li>
                        <li>Xbox</li>
                        <li>Nintendo Switch</li>
                        <li>PlayStation VR</li>
                        <li>Oculus Rift</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;