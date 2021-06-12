import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import './styles/App.scss'

const App = () => {
    return (
        <div className='container'>
            <NavBar />
            <HomeScreen />
            <Intro id="intro"/>
            <Skills id="skills" />
            <Projects id="projects"/>
            <About id="about"/>
            <Contact id="contact"/>
            <Footer/>
        </div>
    )
}

export default App;