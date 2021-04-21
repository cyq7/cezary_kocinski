import './styles/Skills.scss'

const Skills = () => {
    return (
        <div className = 'skills'>
            <h1>SKILLS</h1>
            <div className='container'>
                <div className='category'>
                    <h3>Technologies</h3>
                    <div className='inner-container'>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>SASS</div>
                        <div>REST API</div>
                        <div>Axios</div>
                        <div>GIT</div>
                        <div>Bootstrap</div>
                    </div>
                </div>
                <div className='category'>
                    <h3>Tools</h3>
                    <div className='inner-container'>
                        <div>VSC</div>
                        <div>Atom</div>
                        <div>Photoshop</div>
                        <div>Illustrator</div>
                        <div>MS Word</div>
                        <div>MS Excel</div>
                        <div>MS PowerPoint</div>
                        <div>Fiddler</div>
                        <div>Jira</div>
                        <div>Visual Studio</div>
                        <div>Testrail</div>
                        <div>Confluence</div>
                    </div>
                </div>
                <div className='category'>
                    <h3>Testing</h3>
                    <div className='inner-container'>
                        <div>Software Testing</div>
                        <div>Script Tests</div>
                        <div>Smoke Tests</div>
                        <div>Performance Tests</div>
                        <div>Acceptance Tests</div>
                        <div>Compliance Tests</div>
                        <div>Regression & Retests</div>
                        <div>SQL Queries</div>
                        <div>Reporting and monitoring defects</div>
                    </div>
                </div>
                <div className='category'>
                    <h3>Platforms</h3>
                    <div className='inner-container'>
                        <div>Windows</div>
                        <div>Android</div>
                        <div>iOS</div>
                        <div>PlayStation</div>
                        <div>Xbox</div>
                        <div>Nintendo Switch</div>
                        <div>PlayStation VR</div>
                        <div>Oculus Rift</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;