import { useState } from 'react';
import { Link } from 'react-scroll'
import './styles/NavBar.scss'

const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false)
        }
     }

    window.addEventListener('scroll', handleScroll);

    const toggle = () => {
        const navbar = document.querySelector('#navbar');
        navbar.classList.toggle('toggle');
    }
    const closeNavbar = () => {
        const navbar = document.querySelector('#navbar');
        if(navbar.classList.contains('toggle')) {
            navbar.classList.remove('toggle');
        }
    }


    return (
        <div id="navbar" className={isScrolled ? 'sticky navbar' : 'navbar'}>
            <div className = "logo">
                <span>c</span>K
            </div>
            <nav>
                <ul className="navigation">
                    <li><Link onClick={closeNavbar} activeClass="active" to="intro" smooth={true}><span>Home</span></Link></li>
                    <li><Link onClick={closeNavbar}to="skills" spy={true} smooth={true}><span>Skills</span></Link></li>
                    <li><Link onClick={closeNavbar} to="projects" spy={true} smooth={true}><span>Projects</span></Link> </li>
                    <li><Link onClick={closeNavbar} to="about" spy={true} smooth={true}><span>About</span></Link></li>
                    <li><Link onClick={closeNavbar} to="contact" spy={true} smooth={true}><span>Contact</span></Link></li>
                </ul>
            </nav>
            <div onClick={toggle} className="toggle-btn">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;