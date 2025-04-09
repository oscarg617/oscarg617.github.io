import Socials from "../socials/socials.component"
import location from '../../assets/location.png'

import './footer.styles.scss'

const Footer = () => {
    return (
        <div className='extra-footer'>
            <div className='location-wrapper'>
                <img className='location-image' src={location} alt='location'/>
                <p className="my-location" >Jurupa Valley, CA</p>
            </div>
            <div></div>
            <Socials/>

        </div>
    )
}

export default Footer
