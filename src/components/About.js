import { useState, useEffect } from 'react';
import './styles/About.scss';
import  { sportSnippet, sportHobby, naturalSciencesSnippet, naturalSciencesHobby, gamesSnippet, gamesHobby, generalHobby, generalSnippet } from '../content.js';

const About = () => {
    const [activeHobby, setActiveHobby] = useState(generalHobby);

    useEffect(() => {
        document.getElementById('generalSnippet').innerHTML = generalSnippet;
        document.getElementById('sportSnippet').innerHTML = sportSnippet;
        document.getElementById('naturalSciencesSnippet').innerHTML = naturalSciencesSnippet;
        document.getElementById('gamesSnippet').innerHTML = gamesSnippet;
    }, [])


    return (
        <div className='about'>
            <h1>ABOUT.ME</h1>
            <div className='container'>
                <div className="navigation">
                    <ul>
                        <li 
                            onClick={() => setActiveHobby(generalHobby)}
                            style={activeHobby === generalHobby ? {background: 'rgb(255, 0, 50)'} : null}
                        >About</li>
                        <li 
                            onClick={() => setActiveHobby(sportHobby)}
                            style={activeHobby === sportHobby ? {background: 'rgb(255, 0, 50)'} : null}                    
                        >Sport</li>
                        <li 
                            onClick={() => setActiveHobby(naturalSciencesHobby)}
                            style={activeHobby === naturalSciencesHobby ? {background: 'rgb(255, 0, 50)'} : null} 
                        >Science</li>
                        <li 
                            onClick={() => setActiveHobby(gamesHobby)}
                            style={activeHobby === gamesHobby ? {background: 'rgb(255, 0, 50)'} : null} 
                        >Games</li>
                    </ul>
                    <div className="snippets">
                        <div className='snippet'
                            id='generalSnippet'
                            style={activeHobby === generalHobby ? {display: 'block'} : {display: 'none'}}
                            ></div>
                        <div className='snippet'
                            id='sportSnippet'
                            style={activeHobby === sportHobby ? {display: 'block'} : {display: 'none'}}
                            ></div>
                        <div className='snippet'
                            id='naturalSciencesSnippet'
                            style={activeHobby === naturalSciencesHobby ? {display: 'block'} : {display: 'none'}}
                            ></div> 
                        <div className='snippet'
                            id='gamesSnippet'
                            style={activeHobby === gamesHobby ? {display: 'block'} : {display: 'none'}}
                            ></div> 
                    </div>
                </div>
                <div className="hobby">
                    {activeHobby}
                </div>
            </div>
        </div>
    )
}

export default About;