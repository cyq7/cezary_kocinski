import football from './img/football-ball.png';
import atom from './img/atom.png';
import barbell from './img/barbell.png';
import physics from './img/physics.png';
import planet from './img/planet.png';
import grow from './img/grow.png'
import puzzle from './img/puzzle.png'
import heart from './img/heart.png'
import student from './img/student.png'
import poket from './img/pokemons.png'
import flicker from './img/flicker.png'
import balance from './img/balance.png'

const projects = [
  {
    "id": "1",
    "title": "pokeT",
    "imgURL": poket,
    "altText": "project pokeT",
    "code": "https://github.com/cyq7/pokeT",
    "live": "https://cyq7.github.io/pokeT/",
    "technologies": ['React', 'API', 'JS', 'SCSS', 'CSS', 'HTML']
  },
    {
    "id": "2",
    "title": "Flicker",
    "imgURL": flicker,
    "altText": "project flicker",
    "code": "https://github.com/cyq7/Flicker",
    "live": "",
    "technologies": ['React', 'JS', 'SCSS' ]
  },
    {
    "id": "3",
    "title": "Balance",
    "imgURL": balance,
    "altText": "project balance",
    "code": "https://github.com/cyq7/Balance",
    "live": "https://cyq7.github.io/Balance/",
    "technologies": ['JS', 'CSS', 'HTML']
  },
]

    const generalSnippet = "<h4> document.<strong>innerText</strong>(about.me)</h4>"
    const sportSnippet = "<h4><strong>import</strong> { Football, Gym, Cycling } <strong>from</strong> 'sport'</h4>"
    const naturalSciencesSnippet = "<h4>naturalSciences.<strong>map</strong>(e &nbsp <strong>=></strong> &nbsp { <br /> &nbsp &nbsp &nbsp &nbsp e  <strong>===</strong> chemistry &nbsp <strong>?</strong> &nbsp 'Ugh' &nbsp <strong>:</strong> &nbsp e.enjoy() <br />})</h4>"
    const gamesSnippet = "<h4><strong>do</strong> { <br /> &nbsp &nbsp play(Games) <br /> } <strong>while</strong> (getDate() < 3 AM)</h3>"

    const generalHobby = <p>I'm a Quality Assurance Specialist with 2 years of experience. I find it really cool, but I can't unleash my full potential in this position. Since I can remember I have liked to create pretty things.  I also consider myself passionate about technology and what is associated with it. That's why I'd like to become a <span>programmer</span> and the front-end is a great combination of both of these worlds.
     <br></br><br></br>
     I have also completed Bachelor's Degree in Finance and Accounting at Warsaw University of Life Sciences. <img alt='student icon' className='icon' src={student}></img> Most of my free time I spend on gym and computer games.</p>

    const sportHobby = <p>Sport has always been present in my life. I have been playing football <img alt='football icon' className='icon' src={football}></img> since I was little. I was even an active player in a district league club. I am also interested in bodybuilding. <img alt='barbell icon' className='icon' src={barbell}></img> 
    <br></br><br></br>
    I believe that gym teaches you that you must suck at something before you can be any good at it, and deliberately practicing and repeating the process will be your key in doing just that. The <span>self-control</span>, <span>discipline</span>, and  <span>work ethic</span>  I have cultivated within its walls has carried over to every other aspect of my life and has, without a doubt, led me to become a more confident, ambitious, and more complete individual.</p>

    const naturalSciencesHobby = <p>The school killed the scientist bug in me, but now I am beginning to appreciate the power of <span>mathematics</span> and <span>physics</span>. The complexity of our world on both the micro <img alt='atom icon' className='icon' src={atom}></img> and macro <img alt='planet icon' className='icon' src={planet}></img> scale is amazing.
    <br></br><br></br>
     I love reading books and watching movies about nature and <span>astrophysics</span>. If it wasn't necessary to learn chemistry, I would probably be a doctor now. I wonder if it a coincidence that Atom was my first code editor and I started my adventure with frameworks from React. <img alt='react icon' className='icon' src={physics}></img> </p>

    const gamesHobby = <p>I treat games as a great form of spending time with my friends. The athlete's soul makes me love <span>competition</span>. When it comes to games, I also like to be the best. <img alt='grow icon' className='icon' src={grow}></img> That's why I love <img alt='heart icon' className='icon' src={heart}></img> highly competitive multiplayer games the most. I believe that I learned more English while playing than in school.
     <br></br><br></br>
    As a QA Specialist, I have had an opportunity to test a lot of titles. It's a fun experience to be involved in the games' <span>development</span> <img alt='puzzle icon' className='icon' src={puzzle}></img>process. </p>

    export {
        projects,
        sportSnippet,
        naturalSciencesSnippet,
        gamesSnippet,
        sportHobby,
        naturalSciencesHobby,
        gamesHobby,
        generalHobby,
        generalSnippet
    };