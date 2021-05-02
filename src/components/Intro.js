import './styles/Intro.scss'
import Typical from 'react-typical'

const Intro = () => {
    return (
        <div className="intro">
            <div className='container'>
                <div className="introduction">
                    <h2> Hi, my name is <span>Cezary</span> and I like to <strong>create</strong> {' '}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            2000,
                            'pretty things',
                            4000,
                            'websites',
                            3000,
                            'apps',
                            3000,
                            'projects',
                            3000,
                            'graphic design',
                            1000
                        ]}
                    />
                    </h2>
                </div>
                <div className="description">
                    <p> Since I can remember I've liked to create pretty things.  I also consider myself passionate about technology and what is associated with it. The front-end is a great combination of both of these worlds. I've been learning <strong>programming</strong> for over a year and I'm completely in love with it.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;