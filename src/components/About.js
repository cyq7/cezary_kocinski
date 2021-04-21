import { useEffect } from 'react';
import './styles/About.scss'

const About = () => {
    const sportSnippet = "<strong>import</strong> { Football, Gym, MMA } <strong>from</strong> 'sport'"
    const naturalSciencesSnippet = "naturalSciences.<strong>map</strong>(e &nbsp <strong>=></strong> &nbsp { <br /> &nbsp &nbsp &nbsp &nbsp e  <strong>===</strong> chemistry &nbsp <strong>?</strong> &nbsp 'Ugh' &nbsp <strong>:</strong> &nbsp e.enjoy() <br />})"
    const gamesSnippet = "<strong>do</strong> { <br /> &nbsp &nbsp play(Games) <br /> } <strong>while</strong> (getDate() < 3 AM)"

    useEffect(() => {
        document.getElementById('sportSnippet').innerHTML = sportSnippet;
        document.getElementById('naturalSciencesSnippet').innerHTML = naturalSciencesSnippet;
        document.getElementById('gamesSnippet').innerHTML = gamesSnippet;
    }, [])

 
    return (
        <div className='about'>
            <h1>ABOUT ME</h1>
            <div className='container'>
                <div className="hobby">
                    <h3 id='sportSnippet'></h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
                </div>
                <div className="hobby">
                    <h3 id='naturalSciencesSnippet'></h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections</p>
                </div>
                <div className="hobby">
                    <h3 id='gamesSnippet'></h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections</p>
                </div>
            </div>
        </div>
    )
}

export default About;