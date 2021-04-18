import './styles/HomeScreen.scss'
import home_photo from '../img/home_photo.jpg'

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <img src={home_photo} alt="home screen background"></img>
           <h1> CEZARY KOCIŃSKI </h1>
           <div className="line"></div>
           <h2>Frontend Developer</h2>
        </div>
    )
}

export default HomeScreen;