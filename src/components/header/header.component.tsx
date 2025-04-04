import './header.styles.css'
import location from '../../assets/location.svg'
import snow from '../../assets/snow.jpg'
import ned from '../../assets/NedStark.webp'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <h1>Oscar Gutierrez</h1>
                <h3>22 year-old software engineer with a knack for being bad at video games</h3>
                {/* <h3>0.83 Warzone K/D</h3> */}
                <div className='location'>
                    <img src={location} alt='location' width="16"/>
                    <h4>Jurupa Valley, CA</h4>
                </div>
            </div>
            <div>
                <img src={ned} alt='snow' height="300" />
            </div>
        </div>
    )
}

export default Header