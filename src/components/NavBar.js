import { useState } from 'react';
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

    return (
        <div className={isScrolled ? 'sticky navbar' : 'navbar'}>
            <div className="logo">
                <span>c</span>K
            </div>
            <nav>
                <ul className="navigation">
                    <li href="#" > Home </li>
                    <li href="#" > Skills </li>
                    <li href="#" > Projects </li>
                    <li href="#" > About </li>
                    <li href="#" > Contact </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;