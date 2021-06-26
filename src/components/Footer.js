import './styles/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='icons'>
                <a href="https://github.com/cyq7" target="_blank" rel="noreferrer"><i className="fab fa-github icon"></i></a>
                <a href="https://pl.linkedin.com/in/cezary-kociński-1511a41b6"
                target = "_blank"
                rel = "noreferrer" > <i className = "fab fa-linkedin-in icon"> </i></a>
                <a href="https://www.facebook.com/czarek.kocinski" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f icon"></i></a>
                </div>
            <p>Copyright © 2021 Cezary Kociński</p>
        </div>
        )
}

export default Footer;