import { useEffect } from 'react';
import './styles/About.scss'

const About = () => {
    const sportSnippet = "<h3><strong>import</strong> { Football, Gym, Cycling } <strong>from</strong> 'sport'</h3>"
    const naturalSciencesSnippet = "<h3>naturalSciences.<strong>map</strong>(e &nbsp <strong>=></strong> &nbsp { <br /> &nbsp &nbsp &nbsp &nbsp e  <strong>===</strong> chemistry &nbsp <strong>?</strong> &nbsp 'Ugh' &nbsp <strong>:</strong> &nbsp e.enjoy() <br />})</h3>"
    const gamesSnippet = "<h3><strong>do</strong> { <br /> &nbsp &nbsp play(Games) <br /> } <strong>while</strong> (getDate() < 3 AM)</h3>"

    useEffect(() => {
        document.getElementById('sportSnippet').innerHTML = sportSnippet;
        document.getElementById('naturalSciencesSnippet').innerHTML = naturalSciencesSnippet;
        document.getElementById('gamesSnippet').innerHTML = gamesSnippet;
    }, [])

 
    return (
        <div className='about'>
            <h1>ABOUT.ME</h1>
            <div className='container'>

                <p>I'm a Quality Assurance Specialist with 2 years of experience. I find it really cool, but I can't unleash my full potential in such a position. Since I can remember I have liked to create pretty things.  I also consider myself passionate about technology and what is associated with it. That's why I'd like to become a <span>programmer</span> and the front-end is a great combination of both of these worlds. I have also completed Bachelor's Degree in Finance and Accounting at Warsaw University of Life Sciences. Most of my free time I spend on gym and computer games. </p>
                <div className="hobby">
                    <span id='sportSnippet'></span>
                    <p>Sport has always been present in my life. I have been playing football since I was little. I was even an active player in a district league club. I am also interested in bodybuilding. I believe that gym teaches you that you must suck at something before you can be any good at it, and deliberately practicing and repeating the process will be your key in doing just that. The <span>self-control</span>, <span>discipline</span>, and  <span>work ethic</span>  I have cultivated within its walls has carried over to every other aspect of my life and has, without a doubt, led me to become a more confident, ambitious, and more complete individual.</p>
                </div>
                <div className="hobby">
                    <span id='naturalSciencesSnippet'></span>
                    <p>The school killed the scientist bug in me, and now I am beginning to appreciate the power of <span>mathematics</span> and <span>physics</span>. The complexity of our world on both the macro and micro scale is amazing. I love reading books and watching movies about nature and <span>astrophysics</span>. If it wasn't necessary to learn chemistry, I would probably be a doctor now. I wonder if it a coincidence that I started my adventure with frameworks from React. </p>
                </div>
                <div className="hobby">
                    <span id='gamesSnippet'></span>
                    <p>
                    I treat games as a great form of spending time with my friends. The athlete's soul makes me love <span>competition</span>. When it comes to games, I also like to be the best. That's why i like highly competitive multiplayer games the most. I believe that I learned more English while playing than in school. As a QA Specialist, I have tested a lot of game titles. It's a fun experience to be involved in the game development process.</p>
                </div>
            </div>
        </div>
    )
}

export default About;