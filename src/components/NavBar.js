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

    console.log(isScrolled);

    window.addEventListener('scroll', handleScroll);

    return (
        <div className={isScrolled ? 'sticky navbar' : 'navbar'}>
            <div className="logo">
                <h3><span>c</span>K</h3>
            </div>
            <nav>
                <ul className="navigation">
                    <li href="#" > Home </li>
                    <li href="#" > About </li>
                    <li href="#" > Projects </li>
                    <li href="#" > Contact </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;