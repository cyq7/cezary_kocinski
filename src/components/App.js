import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import About from './About';
import Skills from './Skills';
import Projects from './Projects'
import Contact from './Contact'

import './styles/App.scss'

const App = () => {
    return (
        <div className='container'>
            <NavBar />
            <HomeScreen />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;