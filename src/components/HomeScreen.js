import { useState } from 'react';
import './styles/HomeScreen.scss'
import home_photo from '../img/home_photo.jpg'

const HomeScreen = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > window.innerHeight*0.93) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false)
        }
     }

    window.addEventListener('scroll', handleScroll);

    return (
        <div className='homescreen'>
            <img src={home_photo} style={isScrolled ? null : {position: 'fixed'}} alt="home screen background"></img>
           <h1 > CEZARY KOCIŃSKI </h1>
           <div className="line"></div>
           <h2>Frontend Developer</h2>
        </div>
    )
}

export default HomeScreen;